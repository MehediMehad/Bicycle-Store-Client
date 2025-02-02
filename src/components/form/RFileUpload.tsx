import { ReactNode, useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { RiDeleteBinLine } from "react-icons/ri";
import cn from "../../lib/cn";

type TImageUploadProps = {
  name: string;
  label?: string;
  children?: ReactNode;
  size?: string;
  parentClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  previewImageClassName?: string;
  defaultValue?: string;
  setShowProfile?: (showProfile: boolean) => void;
  showProfile?: boolean;
  [key: string]: unknown;
};

const RFileUpload = ({
  name,
  label,
  size = "large",
  parentClassName = "",
  labelClassName = "",
  inputClassName = "",
  previewImageClassName = "",
  defaultValue,
  children,
  showProfile,
  setShowProfile,
  ...rest
}: TImageUploadProps) => {
  const { control, setValue, resetField } = useFormContext();
  const [preview, setPreview] = useState<string | null>(defaultValue || null);
  const [fileInputKey, setFileInputKey] = useState(0);

  // Handle file change (set preview and form value)
  const handleFileChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (setShowProfile) setShowProfile(!showProfile);
      setPreview(reader.result as string); // Set preview
    };
    reader.readAsDataURL(file);

    setValue(name, file); // Update form value with the file
  };

  // Remove image and reset field
  const handleRemoveImage = () => {
    if (setShowProfile) setShowProfile(!showProfile);
    setPreview(null); // Clear preview
    resetField(name); // Clear form value
    setFileInputKey((prev) => prev + 1); // Force file input reset
  };

  // Effect to set default value in the form when the component mounts or defaultValue changes
  useEffect(() => {
    if (defaultValue) {
      // Only set if defaultValue is provided
      setValue(name, defaultValue, { shouldValidate: false });
      setPreview(defaultValue); // Set preview with the default value
    }
  }, [defaultValue, name, setValue]);

  return (
    <div className={cn(`form-group h-full ${size}`, parentClassName)}>
      {label && <p className={cn("mb-2", labelClassName)}>{label}</p>}
      <Controller
        control={control}
        name={name}
        render={({ fieldState: { error } }) => (
          <>
            {preview ? (
              <div className={cn(" relative w-fit", previewImageClassName)}>
                <img
                  height={300}
                  width={300}
                  src={preview}
                  alt="Preview"
                  className="rounded-md object-cover"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="px-1 py-1 bg-black bg-opacity-80 text-white rounded-md absolute top-2 right-2"
                >
                  <RiDeleteBinLine size={20} className="hover:text-red-500" />
                </button>
              </div>
            ) : (
              <>
                {children && (
                  <label htmlFor={name} className="h-full w-full">
                    {children}
                  </label>
                )}

                <input
                  key={fileInputKey} // Force reset of input field
                  id={name}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleFileChange(file);
                    }
                  }}
                  className={cn(
                    "w-full rounded-md border border-gray-300 p-[6px]",
                    inputClassName,
                    children ? "hidden" : ""
                  )}
                  {...rest}
                />
              </>
            )}

            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </>
        )}
      />
    </div>
  );
};

export default RFileUpload;

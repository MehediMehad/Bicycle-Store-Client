import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
import cn from "../../lib/cn";

type TFileUploadProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
};

const RFileUpload = ({
  name,
  label,
  disabled,
  className,
  placeholder,
}: TFileUploadProps) => {
  return (
    <div className={cn("mx-auto", className)}>
      <Controller
        name={name}
        render={({ field: { onChange, value, ...field } }) => (
          <Form.Item label={label}>
            <Input
              size="large"
              type="file"
              disabled={disabled}
              placeholder={placeholder}
              value={value?.fileName}
              {...field}
              onChange={(e) => onChange(e.target.files?.[0])}
              className="w-full"
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default RFileUpload;

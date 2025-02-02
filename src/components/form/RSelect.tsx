import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
import cn from "../../lib/cn";

type TRSelectProps = {
  label?: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
  className?: string;
};

const RSelect = ({
  label,
  name,
  options,
  disabled,
  mode,
  className,
}: TRSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            className={cn("mx-auto", className)}
            mode={mode}
            style={{ width: "100%" }}
            {...field}
            placeholder={`Select ${label}`}
            options={options}
            size="large"
            disabled={disabled}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default RSelect;

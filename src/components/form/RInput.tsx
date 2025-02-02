import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
import cn from "../../lib/cn";
type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
};

const RInput = ({
  type,
  name,
  label,
  disabled,
  className,
  placeholder,
}: TInputProps) => {
  return (
    <div className={cn("mx-auto", className)}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
              disabled={disabled}
              placeholder={placeholder}
              className="w-full"
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default RInput;

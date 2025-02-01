import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
import cn from "../../lib/cn";
type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  className?: string;
};

const RInput = ({ type, name, label, disabled, className }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }} className={cn("mx-auto", className)}>
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
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default RInput;

import { Controller, useFormContext } from "react-hook-form";
import { Form, TimePicker } from "antd";
import cn from "../../lib/cn";

type TRDatePicker = {
  name: string;
  label: string;
  className?: string;
};

const RTimePicker = ({ name, label, className }: TRDatePicker) => {
  const { control } = useFormContext();

  return (
    <div style={{ marginBottom: "10px" }} className={cn("mx-auto", className)}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Form.Item label={label}>
              <TimePicker
                showNow={false}
                {...field}
                size="large"
                style={{ width: "100%" }}
                format="HH:mm"
              />
              {error && <small style={{ color: "red" }}>{error.message}</small>}
            </Form.Item>
          </>
        )}
      ></Controller>
    </div>
  );
};

export default RTimePicker;

import RSelect from "../../../../components/form/RSelect";
import { Button, Form, Input } from "antd";
import RInput from "../../../../components/form/RInput";
import RForm from "../../../../components/form/RForm";
import RTextArea from "../../../../components/form/RTextArea";
import {
  bicycleBrandOptions,
  bicycleColorOptions,
  bicycleTypeOptions,
} from "../../../../constants/product.constant";
import { useAddBicycleMutation } from "../../../../redux/features/admin/bicycleManagement";
import { Controller } from "react-hook-form";
import { toast } from "sonner";

const AddProduct = () => {
  const [addBicycle, { data, error }] = useAddBicycleMutation();
  console.log({ data, error });

  const onSubmit = async (data: any) => {
    console.log("Product Data:", data);
    const toastId = toast.loading("Logging in");
    try {
      const bicycleData = {
        name: data.name,
        brand: data.brand,
        price: Number(data.price),
        type: data.type,
        color: data.color,
        description: data.description,
        quantity: Number(data.quantity),
        inStock: true,
      };
      const formData = new FormData();
      formData.append("data", JSON.stringify(bicycleData));
      formData.append("file", data.profileImg);
      const res = await addBicycle(formData).unwrap();
      toast.dismiss(toastId);
      toast.success(`${res.message || "Bicycle added successfully..!"}`, {
        duration: 2000,
      });
    } catch (error: any) {
      const errorMessage =
        error?.data?.message || "bicycle creating not successful.";
      toast.dismiss(toastId);
      toast.success(errorMessage);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add New Bicycle</h2>
      <RForm
        onSubmit={onSubmit}
        // resolver={zodResolver(addProductValidationSchema)}
        className="space-y-5"
      >
        {/* Image Upload */}
        <Controller
          name="profileImg"
          render={({ field: { onChange, value, ...field } }) => (
            <Form.Item label="Picture">
              <Input
                size="large"
                type="file"
                value={value?.fileName}
                {...field}
                onChange={(e) => onChange(e.target.files?.[0])}
              />
            </Form.Item>
          )}
        />
        {/* Name & Brand */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <RInput
            name="name"
            label="Name"
            type="text"
            className="w-full"
            placeholder="Name"
          />
          <RSelect
            name="brand"
            label="Brand"
            options={bicycleBrandOptions}
            className="w-full"
          />
        </div>

        {/* Price & Quantity */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <RInput
            name="price"
            label="Price"
            type="number"
            className="w-full"
            placeholder="Price"
          />
          <RInput
            name="quantity"
            label="Quantity"
            type="number"
            className="w-full"
            placeholder="Quantity"
          />
        </div>

        {/* type & color */}
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
          <RSelect
            name="type"
            label="Select Type"
            options={bicycleTypeOptions}
          />
          <RSelect name="color" label="Color" options={bicycleColorOptions} />
        </div>

        {/* Description */}
        <RTextArea
          name="description"
          label="Description"
          placeHolder="Description"
        />

        {/* Submit Button */}
        <div className="flex justify-start">
          <Button htmlType="submit">Add Product</Button>
        </div>
      </RForm>
    </div>
  );
};

export default AddProduct;

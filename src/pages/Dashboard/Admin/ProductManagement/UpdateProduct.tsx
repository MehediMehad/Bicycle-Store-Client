import RSelect from "../../../../components/form/RSelect";
import { Form, Input } from "antd";
import RInput from "../../../../components/form/RInput";
import RForm from "../../../../components/form/RForm";
import {
  bicycleAvailabilityOptions,
  bicycleBrandOptions,
  bicycleColorOptions,
  bicycleTypeOptions,
} from "../../../../constants/product.constant";
import {
  useGetBicycleQuery,
  useUpdateProductMutation,
} from "../../../../redux/features/admin/bicycleManagement";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { Controller } from "react-hook-form";

const UpdateProduct = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useGetBicycleQuery(id);
  const [updateProduct] = useUpdateProductMutation();

  const bicycle = data?.data;

  const defaultValues = {
    name: bicycle?.name || "",
    price: bicycle?.price || 0,
    brand: bicycle?.brand || "",
    type: bicycle?.type || "",
    color: bicycle?.color || "",
    description: bicycle?.description || "",
    quantity: bicycle?.quantity || 0,
    inStock: bicycle?.inStock || false,
    image: bicycle?.image || "",
    availability: bicycle?.availability || "",
  };

  const onSubmit = async (formData: any) => {
    const toastId = toast.loading("Updating...");
    try {
      const updatedData = {
        name: formData.name,
        brand: formData.brand,
        availability: formData.availability,
        price: Number(formData.price),
        type: formData.type,
        color: formData.color,
        description: formData.description,
        quantity: Number(formData.quantity),
        image: formData.image,
      };

      const formUpdatedData = new FormData();
      formUpdatedData.append("data", JSON.stringify(updatedData));
      formUpdatedData.append("file", formData.image);

      await updateProduct({ id, data: formUpdatedData }).unwrap();
      toast.dismiss(toastId);
      toast.success("Bicycle updated successfully!", { duration: 2000 });
      refetch();
    } catch (error: any) {
      toast.dismiss(toastId);
      toast.error(error?.data?.message || "Update failed.");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Update Bicycle</h2>
      <RForm
        onSubmit={onSubmit}
        className="space-y-5"
        defaultValues={defaultValues}
      >
        {/* Image Upload */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Controller
            name="image"
            render={({ field: { onChange, value, ...field } }) => (
              <Form.Item label="Picture">
                {/* বর্তমান ইমেজ দেখানোর জন্য */}
                <div className="flex">
                  {value && (
                    <img
                      src={
                        typeof value === "string"
                          ? value
                          : URL.createObjectURL(value)
                      }
                      alt="Bicycle"
                      className="w-32 h-32 object-cover mb-2 border rounded"
                    />
                  )}
                  <Input
                    style={{ height: "40px", marginLeft: "20px" }}
                    size="large"
                    type="file"
                    {...field}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      onChange(file || value);
                    }}
                  />
                </div>
              </Form.Item>
            )}
          />
          <RSelect
            name="availability"
            label="Availability"
            options={bicycleAvailabilityOptions}
            className="w-full"
          />
        </div>
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

        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
          <RSelect
            name="type"
            label="Select Type"
            options={bicycleTypeOptions}
          />
          <RSelect name="color" label="Color" options={bicycleColorOptions} />
        </div>

        <RInput name="description" label="Description" type="text" />

        <div className="flex justify-start">
          {/* <Button name="Update Product" htmlType="submit">
            Update Product
          </Button> */}
          <button
            type="submit"
            className="bg-[#014036] text-white px-10 mt-2 py-3 text-sm cursor-pointer"
          >
            Update Product
          </button>
        </div>
      </RForm>
    </div>
  );
};

export default UpdateProduct;

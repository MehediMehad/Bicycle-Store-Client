/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import RFileUpload from "../../../../components/form/RFileUpload";
import RSelect from "../../../../components/form/RSelect";
import { Button } from "antd";
import RInput from "../../../../components/form/RInput";
import RForm from "../../../../components/form/RForm";
import { useForm } from "react-hook-form";
import RTextArea from "../../../../components/form/RTextArea";
import {
  bicycleColorOptions,
  bicycleTypeOptions,
} from "../../../../constants/product.constant";

const addProductValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  brand: z.string().min(1, "Brand is required"),
  price: z.number().min(0, "Price must be a positive number"),
  quantity: z.number().int().min(0, "Quantity must be a non-negative integer"),
  type: z.enum(["Mountain", "Road", "Hybrid", "BMX", "Electric"]),
  color: z.enum(["Red", "Blue", "Black", "White", "Green", "Yellow", "Gray"]),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Image must be a valid URL").optional(),
  inStock: z.boolean(),
});

const AddProduct = () => {
  const onSubmit = (data: any) => {
    console.log("Product Data:", data);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add New Bicycle</h2>
      <RForm onSubmit={onSubmit} className="space-y-5">
        {/* Image Upload */}
        <RFileUpload name="image" label="Upload Image" />
        {/* Name & Brand */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <RInput
            name="name"
            label="Name"
            type="text"
            className="w-full"
            placeholder="Name"
          />
          <RInput
            name="brand"
            label="Brand"
            type="text"
            className="w-full"
            placeholder="Brand"
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

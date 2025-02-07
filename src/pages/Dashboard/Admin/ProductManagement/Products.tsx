import { Button, Table, Tag, Modal } from "antd";
import { NavLink } from "react-router-dom";
import {
  useDeleteBicycleMutation,
  useGetAllBicycleQuery,
} from "../../../../redux/features/admin/bicycleManagement";
import { toast } from "sonner";
import { AiOutlineExclamationCircle } from "react-icons/ai";
const { confirm } = Modal;

const Products = () => {
  const {
    data: mainData,
    isLoading,
    isFetching,
    refetch,
  } = useGetAllBicycleQuery(undefined);

  const [deleteBicycle, { isLoading: isDeleting }] = useDeleteBicycleMutation();

  const orders = mainData?.data;

  const showDeleteConfirm = (id: string) => {
    confirm({
      title: "Are you sure you want to delete this bicycle?",
      icon: <AiOutlineExclamationCircle size={40} color="red" />,
      content: "This action cannot be undone!",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        try {
          await deleteBicycle(id).unwrap();
          toast.success("Bicycle deleted successfully!");
          refetch();
        } catch (error) {
          toast.error("Failed to delete bicycle.");
          console.error(error);
        }
      },
      onCancel() {
        toast.info("🚫 Delete cancelled.");
      },
    });
  };

  const tableData = orders?.map(
    ({ _id, brand, quantity, availability, type, image, name }) => ({
      key: _id,
      availability: availability as "In Stock" | "Out of Stock" | "Pre-Order", // Fixed type
      quantity,
      brand,
      type,
      image,
      name,
    })
  );

  const columns = [
    {
      title: "Image",
      key: "image",
      dataIndex: "image",
      render: (image: string) => (
        <img src={image} alt="Bicycle" style={{ width: 50 }} />
      ),
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "Availability",
      key: "availability",
      dataIndex: "availability",
      render: (text: "In Stock" | "Out of Stock" | "Pre-Order") => {
        const colorMap: Record<
          "In Stock" | "Out of Stock" | "Pre-Order",
          string
        > = {
          "In Stock": "green",
          "Out of Stock": "red",
          "Pre-Order": "blue",
        };
        return <Tag color={colorMap[text]}>{text}</Tag>;
      },
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
    },
    {
      title: "Brand",
      key: "brand",
      dataIndex: "brand",
    },
    {
      title: "Update",
      key: "update",
      render: (item: { key: string }) => (
        <NavLink
          className="update-button"
          to={`/admin/dashboard/product-update/${item.key}`}
        >
          Update
        </NavLink>
      ),
    },
    // Delete
    {
      title: "Delete",
      key: "delete",
      render: (item: { key: string }) => (
        <Button
          type="primary"
          danger
          loading={isDeleting}
          onClick={() => showDeleteConfirm(item.key)}
        >
          Delete
        </Button>
      ),
    },
  ];

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default Products;

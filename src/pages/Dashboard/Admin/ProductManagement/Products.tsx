import { Table, Tag } from "antd";
import { NavLink } from "react-router-dom";
import { useGetAllBicycleQuery } from "../../../../redux/features/admin/bicycleManagement";

const Products = () => {
  const {
    data: mainData,
    isLoading,
    isFetching,
  } = useGetAllBicycleQuery(undefined);
  const orders = mainData?.data;
  console.log(orders);

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

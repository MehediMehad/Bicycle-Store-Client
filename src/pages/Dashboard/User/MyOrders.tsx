import { Dropdown, Table, TableColumnsType, Tag } from "antd";
import { NavLink } from "react-router-dom";
import { useGetMyOrdersQuery } from "../../../redux/features/order/orderApi";
import moment from "moment";

type TTableData = {
  email: string;
  quantity: number;
  sp_message: string;
  date_time: string;
  totalPrice: number;
  key: string;
  product: string;
};

const MyOrders = () => {
  const {
    data: mainData,
    isLoading,
    isFetching,
  } = useGetMyOrdersQuery(undefined);
  const orders = mainData?.data;
  console.log(orders);

  // **TableData Create **
  const tableData: TTableData[] =
    orders?.map((order) => ({
      key: order._id,
      email: order.email,
      quantity: order.quantity,
      sp_message: order.transaction?.sp_message || "Pending",
      date_time: order.transaction?.date_time
        ? moment(order.transaction.date_time).format("YYYY-MM-DD HH:mm:ss")
        : "N/A",
      totalPrice: order.totalPrice,
      product: order.product,
    })) || [];

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "Transaction Status",
      key: "sp_message",
      dataIndex: "sp_message",
      render: (text) => (
        <Tag color={text === "Success" ? "green" : "red"}>{text}</Tag>
      ),
    },
    {
      title: "Transaction Date",
      key: "date_time",
      dataIndex: "date_time",
    },
    {
      title: "Total Price",
      key: "totalPrice",
      dataIndex: "totalPrice",
    },
    {
      title: "Product",
      key: "x",
      render: (item) => (
        <Dropdown trigger={["click"]}>
          <NavLink className="update-button" to={`/details/${item.product}`}>
            Product
          </NavLink>
        </Dropdown>
      ),
    },
    // {
    //   title: "Action",
    //   key: "x",
    //   render: (item) => (
    //     <Dropdown trigger={["click"]}>
    //       <Button onClick={() => setSemesterId(item.key)}>Update</Button>
    //     </Dropdown>
    //   ),
    // },
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

export default MyOrders;

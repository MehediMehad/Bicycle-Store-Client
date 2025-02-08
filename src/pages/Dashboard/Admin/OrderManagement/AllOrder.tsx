import { Dropdown, Table, TableColumnsType, Tag } from "antd";
import moment from "moment";
import { useGetOrdersQuery } from "../../../../redux/features/order/orderApi";
import { NavLink } from "react-router-dom";

type TTableData = {
  email: string;
  quantity: number;
  sp_message: string;
  date_time: string;
  totalPrice: number;
  key: string;
  product: string;
};

const AllOrder = () => {
  const {
    data: mainData,
    isLoading,
    isFetching,
  } = useGetOrdersQuery(undefined);
  const orders = mainData?.data;
  console.log(orders);

  const tableData = orders?.map(
    ({ _id, email, quantity, transaction, totalPrice, product }) => ({
      key: _id,
      email,
      quantity,
      sp_message: transaction?.sp_message || "N/A",
      date_time: transaction?.date_time
        ? moment(transaction.date_time).format("YYYY-MM-DD HH:mm:ss")
        : "2/08/2025",
      totalPrice,
      product,
    })
  );

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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render: (_text) => (
        // <Tag color={text === "Success" ? "green" : "red"}>{text}</Tag>
        <Tag color="green">Success</Tag>
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

export default AllOrder;

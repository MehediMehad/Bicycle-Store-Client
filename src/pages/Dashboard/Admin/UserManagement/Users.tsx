import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import {
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
} from "../../../../redux/features/admin/userManagement";
import { TUser } from "../../../../types/user.type";
import moment from "moment";
import { toast } from "sonner";
import { useState } from "react";

type TTableData = Pick<TUser, "name" | "role" | "status" | "createdAt">;

const UsersPage = () => {
  const [semesterId, setSemesterId] = useState("");
  console.log("=>>>>>", semesterId);

  const [updateSemesterStatus] = useUpdateUserStatusMutation();
  const {
    data: mainData,
    isLoading,
    isFetching,
  } = useGetAllUsersQuery(undefined);
  const bicycles = mainData?.data;
  console.log(bicycles);

  const tableData = bicycles?.map(({ _id, name, role, status, createdAt }) => ({
    key: _id,
    name,
    role,
    status,
    createdAt: moment(new Date(createdAt)).format("ll"),
  }));

  const handleStatuesUpdate = async (data: any) => {
    const toastId = toast.loading("Update User Status");
    const updateData = {
      data: {
        _id: semesterId,
        status: data.key,
      },
    };
    console.log(updateData);

    try {
      const res = await updateSemesterStatus(updateData).unwrap();
      toast.dismiss(toastId);
      toast.success(`${res.message}` || "Status Updated", {
        duration: 2000,
      });
      console.log("Update successful:", res);
    } catch (error: any) {
      const errorMessage =
        error?.data?.message || "An error occurred while updating the status.";
      toast.dismiss(toastId);
      toast.success(errorMessage);
    }
  };
  const menuProps = {
    items,
    onClick: handleStatuesUpdate,
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Start Month",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "End Month",
      key: "role",
      dataIndex: "role",
    },
    {
      title: "status",
      key: "status",
      dataIndex: "status",
      render: (item) => {
        let color;
        if (item === "in-progress") {
          color = "green";
        }
        if (item === "blocked") {
          color = "red";
        }
        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      title: "createdAt",
      key: "createdAt",
      dataIndex: "createdAt",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setSemesterId(item.key)}>Update</Button>
          </Dropdown>
        );
      },
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

export default UsersPage;

const items = [
  // {
  //   label: "ONGOING",
  //   key: "UPCOMING",
  // },
  {
    label: "Block",
    key: "blocked",
  },
  {
    label: "in-progress",
    key: "in-progress",
  },
];

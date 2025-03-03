import { ConfigProvider, Table } from "antd";
import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import CreateAdmin from "../../components/ui/Admin/CreateAdmin";
import Title from "../../components/common/Title";
import {
  useDeleteAdminMutation,
  useGetAllAdminsQuery,
} from "../../redux/apiSlices/adminManagementSlice";
import toast from "react-hot-toast";

const Admin = () => {
  const [open, setOpen] = useState(false);

  const { data: admin, isLoading } = useGetAllAdminsQuery();
  const [deleteAdmin] = useDeleteAdminMutation();

  const adminData = admin?.data;
  console.log(adminData);

  const columns = [
    {
      title: "Serial No.",
      dataIndex: "index",
      key: "index",
      render: (_, record, index) => <p>{index + 1}</p>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <RiDeleteBin5Line
          onClick={() => handleDelete(record._id)}
          size={24}
          className="text-red-600 cursor-pointer"
        />
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      const response = await deleteAdmin(id).unwrap();
      if (response?.success) {
        toast.success(response?.message);
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      toast.error(
        error?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="p-5 text-white">
      {/* header */}
      <div className="flex items-center justify-between mb-4">
        <Title className="">Admins</Title>
        <button
          className="bg-[#6d5d36] text-white h-10 px-4 rounded-md"
          onClick={() => {
            setOpen(true);
          }}
        >
          + Add Admin
        </button>
      </div>

      {/* table container */}
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#6d5d36",
              headerColor: "white",
              selectedRowColor: "white",
              colorBgContainer: "#1e1e1e",
              colorText: "white",
              borderColor: "#494949",
            },
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={adminData}
          pagination={{ pageSize: 5 }}
          rowKey="_id"
        />
      </ConfigProvider>
      <CreateAdmin open={open} setOpen={setOpen} />
    </div>
  );
};

export default Admin;

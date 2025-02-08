import { ConfigProvider, Table } from "antd";
import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import CreateAdmin from "../../components/ui/Admin/CreateAdmin";
import Title from "../../components/common/Title";

const data = [
  {
    key: 1,
    name: "sinchan",
    email: "sinchan@gmail.com",
  },
  {
    key: 2,
    name: "sinchan",
    email: "sinchan@gmail.com",
  },
  {
    key: 3,
    name: "sinchan",
    email: "sinchan@gmail.com",
  },
  {
    key: 4,
    name: "sinchan",
    email: "sinchan@gmail.com",
  },
  {
    key: 5,
    name: "sinchan",
    email: "sinchan@gmail.com",
  },
];

const Admin = () => {
  const [open, setOpen] = useState(false);

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
        <RiDeleteBin5Line size={24} className="text-red-600" />
      ),
    },
  ];
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
          dataSource={data}
          pagination={{ pageSize: 5 }}
        />
      </ConfigProvider>
      <CreateAdmin open={open} setOpen={setOpen} />
    </div>
  );
};

export default Admin;

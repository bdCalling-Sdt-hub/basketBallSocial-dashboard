import React, { useState } from "react";
import { Table, ConfigProvider } from "antd";
import moment from "moment";
import { useAvatarTransactionQuery } from "../../redux/apiSlices/abatarSlice";

const OurTransactions = () => {
  const [page, setPage] = useState(1);

  const { data: avatarTransactions, isLoading } = useAvatarTransactionQuery({
    page,
    limit: 10,
  });

  const transactions = avatarTransactions?.data || [];

  console.log(avatarTransactions);

  const columns = [
    {
      title: "Serial",
      dataIndex: "_id",
      key: "_id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Transaction ID",
      dataIndex: "txid",
      key: "txid",
    },
    {
      title: "Customer Name",
      dataIndex: ["user", "name"],
      key: "customerName",
    },

    {
      title: "Email",
      dataIndex: ["user", "email"],
      key: "email",
    },
    {
      title: "Occupation",
      dataIndex: ["user", "occupation"],
      key: "occupation",
      render: (occupation) => occupation || "Not specified",
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => moment(date).format("DD-MM-YYYY HH:mm "),
    },
  ];

  return (
    <div className="bg-[#1e1e1e] p-5">
      <h1 className="text-2xl font-semibold mb-4 text-start">
        Avatar Purchase Transactions
      </h1>
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
          loading={isLoading}
          rowKey="_id"
          dataSource={transactions}
          pagination={{
            pageSize: avatarTransactions?.pagination?.limit,
            total: avatarTransactions?.pagination?.total,
            onChange: (page) => setPage(page),
          }}
        />
      </ConfigProvider>
    </div>
  );
};

export default OurTransactions;

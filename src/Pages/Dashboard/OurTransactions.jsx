import React, { useState } from "react";
import { Table, ConfigProvider } from "antd";
import moment from "moment";

const transactions = [
  {
    key: "1",
    transactionId: "AVT001",
    customerName: "Alice Johnson",
    packageName: "Basic Avatar Pack",
    price: 20,
    adminEarning: 3,
    date: "2024-06-15 10:30:00",
  },
  {
    key: "2",
    transactionId: "AVT002",
    customerName: "Michael Brown",
    packageName: "Premium Avatar Pack",
    price: 50,
    adminEarning: 7.5,
    date: "2024-06-14 14:45:00",
  },
  {
    key: "3",
    transactionId: "AVT003",
    customerName: "Samantha White",
    packageName: "Exclusive Avatar Pack",
    price: 100,
    adminEarning: 15,
    date: "2024-06-16 09:15:00",
  },
  {
    key: "4",
    transactionId: "AVT004",
    customerName: "Daniel Green",
    packageName: "Basic Avatar Pack",
    price: 20,
    adminEarning: 3,
    date: "2024-06-10 11:00:00",
  },
  {
    key: "5",
    transactionId: "AVT005",
    customerName: "Sophia Miller",
    packageName: "Deluxe Avatar Pack",
    price: 75,
    adminEarning: 11.25,
    date: "2024-06-12 17:20:00",
  },
  {
    key: "6",
    transactionId: "AVT006",
    customerName: "Ethan Wilson",
    packageName: "Ultimate Avatar Pack",
    price: 150,
    adminEarning: 22.5,
    date: "2024-06-13 08:45:00",
  },
];

const OurTransactions = () => {
  const columns = [
    {
      title: "Serial No.",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    { title: "Customer Name", dataIndex: "customerName", key: "customerName" },
    {
      title: "Package Name",
      dataIndex: "packageName",
      key: "packageName",
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Date & Time",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => moment(a.date).valueOf() - moment(b.date).valueOf(),
      render: (date) => moment(date).format("DD-MM-YYYY HH:mm A"),
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
          dataSource={transactions}
          pagination={{ pageSize: 5 }}
        />
      </ConfigProvider>
    </div>
  );
};

export default OurTransactions;

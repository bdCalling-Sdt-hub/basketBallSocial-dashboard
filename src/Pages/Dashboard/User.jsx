import React from "react";
import { Table, Card, Avatar, ConfigProvider } from "antd";
import profileImg from "../../assets/randomProfileImage.jpg";

const user = {
  name: "John Doe",
  email: "johndoe@example.com",
  avatar: profileImg,
  bio: "Passionate writer & content creator.",
  phoneNumber: "+1234567890",
  address: "123 Main St, City, Country",
  totalPosts: 10,
  totalStories: 5,
  reports: [],
  friends: [
    {
      name: "John Smith",
      image:
        "https://i.pinimg.com/736x/b1/31/6a/b1316ac932bafb8434cac32d5feeedf6.jpg",
    },
    {
      name: "Jane Doe",
      image:
        "https://i.pinimg.com/736x/b1/31/6a/b1316ac932bafb8434cac32d5feeedf6.jpg",
    },
    {
      name: "Michael Johnson",
      image:
        "https://i.pinimg.com/736x/b1/31/6a/b1316ac932bafb8434cac32d5feeedf6.jpg",
    },
    {
      name: "Emily Davis",
      image:
        "https://i.pinimg.com/736x/b1/31/6a/b1316ac932bafb8434cac32d5feeedf6.jpg",
    },
    {
      name: "Chris Brown",
      image:
        "https://i.pinimg.com/736x/b1/31/6a/b1316ac932bafb8434cac32d5feeedf6.jpg",
    },
  ],
  status: "Active",
};

// Dummy story data
const stories = [
  {
    key: "1",
    title: "A Journey Through Time",
    date: "2024-01-05",
    image:
      "https://i.pinimg.com/236x/f0/c0/c3/f0c0c33933dd14df7335c44a3f15ed30.jpg",
    views: 500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    key: "2",
    title: "The Hidden Secrets of Nature",
    date: "2024-02-10",
    image:
      "https://i.pinimg.com/236x/f0/c0/c3/f0c0c33933dd14df7335c44a3f15ed30.jpg",
    views: 750,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    key: "3",
    title: "The Power of Music",
    date: "2024-03-15",
    image:
      "https://i.pinimg.com/236x/f0/c0/c3/f0c0c33933dd14df7335c44a3f15ed30.jpg",
    views: 1000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    key: "4",
    title: "A Journey Through Time",
    date: "2024-01-05",
    image:
      "https://i.pinimg.com/236x/f0/c0/c3/f0c0c33933dd14df7335c44a3f15ed30.jpg",
    views: 500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    key: "5",
    title: "The Hidden Secrets of Nature",
    date: "2024-02-10",
    image:
      "https://i.pinimg.com/236x/f0/c0/c3/f0c0c33933dd14df7335c44a3f15ed30.jpg",
    views: 750,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    key: "6",
    title: "The Power of Music",
    date: "2024-03-15",
    image:
      "https://i.pinimg.com/236x/f0/c0/c3/f0c0c33933dd14df7335c44a3f15ed30.jpg",
    views: 1000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
];

// Dummy post data
const posts = [
  {
    key: "1",
    title: "Understanding React Hooks",
    date: "2024-01-02",
    likes: 150,
    interactions: 50,
  },
  {
    key: "2",
    title: "Exploring TypeScript in 2024",
    date: "2024-02-15",
    likes: 220,
    interactions: 75,
  },
];

// Post Table Columns
const postColumns = [
  { title: "Serial No.", dataIndex: "key", key: "key" },
  { title: "Title", dataIndex: "title", key: "title" },
  { title: "Interactions", dataIndex: "interactions", key: "interactions" },
  { title: "Likes", dataIndex: "likes", key: "likes" },
  { title: "Date", dataIndex: "date", key: "date" },
];

const UserPage = () => {
  return (
    <div className="p-5 text-white">
      {/* User Profile Card */}

      <div className="flex items-center gap-5 my-10">
        <Avatar size={100} src={user?.avatar} />
        <div>
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-gray-400">{user?.email}</p>
          <p className="text-gray-400">{user?.bio}</p>
          <p className="text-gray-400">📞 {user?.phoneNumber}</p>
          <p className="text-gray-400">📍 {user?.address}</p>
          <p className="text-gray-400">
            👥 Total Friends:{" "}
            <span className="underline text-white font-bold">
              {user?.friends?.length}
            </span>
          </p>
          <p className="text-gray-400">📝 Total Posts: {user?.totalPosts}</p>
          <p className="text-gray-400">
            📚 Total Stories: {user?.totalStories}
          </p>
          <p
            className={`text-${
              user?.status === "Active" ? "green" : "red"
            }-500`}
          >
            ✅ Status: {user?.status}
          </p>
          <p className="text-gray-400">Reports: {user?.reports?.length}</p>
        </div>
      </div>

      {/* Stories */}
      <h1 className="text-2xl font-semibold mb-5">Stories</h1>

      <div className="grid grid-cols-8 gap-5">
        {stories?.map((story) => (
          <div key={story.key}>
            <div className="relative  cursor-pointer">
              <img
                src={story.image}
                alt={story.title}
                className="w-[160px] h-[250px] rounded-2xl border border-black shadow-lg"
              />
              <p className="absolute text-sm bottom-0 left-0 bg-black w-[160px] p-2 bg-opacity-10 line-clamp-2">
                {story.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#c4a862",
              colorBgContainer: "#1e1e1e",
              colorText: "white",
              borderColor: "#494949",
              headerColor: "white",
            },
          },
        }}
      >
        {/* Posts Table */}
        <h2 className="text-2xl font-semibold mb-5 mt-10">Posts</h2>
        <Table
          columns={postColumns}
          dataSource={posts}
          pagination={{ pageSize: 5 }}
        />
      </ConfigProvider>
    </div>
  );
};

export default UserPage;

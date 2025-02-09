import { useState } from "react";
import { Modal, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import avatar1 from "../../assets/avatar1.png";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const initialAvatars = [
  { id: "1", img: avatar1, title: "Avatar 1", price: "Free" },
  { id: "2", img: avatar1, title: "Avatar 2", price: "$15" },
  { id: "3", img: avatar1, title: "Avatar 3", price: "$20" },
  { id: "4", img: avatar1, title: "Avatar 4", price: "$25" },
  { id: "5", img: avatar1, title: "Avatar 5", price: "$30" },
  { id: "6", img: avatar1, title: "Avatar 6", price: "$35" },
  { id: "7", img: avatar1, title: "Avatar 7", price: "$40" },
  { id: "8", img: avatar1, title: "Avatar 8", price: "$45" },
  { id: "9", img: avatar1, title: "Avatar 9", price: "$50" },
  { id: "10", img: avatar1, title: "Avatar 10", price: "$55" },
];

const AvatarSettings = () => {
  const [avatars, setAvatars] = useState(initialAvatars);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAvatar, setNewAvatar] = useState({
    title: "",
    price: "",
    img: avatar1,
  });

  const handleAddAvatar = () => {
    setAvatars([...avatars, { ...newAvatar, id: avatars.length + 1 }]);
    setIsModalOpen(false);
    setNewAvatar({ title: "", price: "", img: avatar1 });
  };

  const handleImageUpload = ({ file }) => {
    const reader = new FileReader();
    reader.onload = () => {
      setNewAvatar((prev) => ({ ...prev, img: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-5 text-white">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Avatar Settings</h1>
        <Button
          className="bg-primary px-7 py-5 rounded-md border-none"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus /> Add Avatar
        </Button>
      </div>
      <h1 className="font-bold text-xl mt-5">
        All Avatars: <span>{avatars.length}</span>
      </h1>
      <div className="grid grid-cols-8 gap-10 my-20">
        {avatars.map((avatar) => (
          <Link to={`/avatar-settings/${avatar.id}`}>
            <div
              key={avatar.id}
              className="relative p-2 bg-slate-200 rounded-2xl h-[150px] flex items-center justify-end flex-col bg-opacity-10 cursor-pointer"
            >
              <img className="absolute -top-6" src={avatar.img} alt="" />
              <h1>{avatar.title}</h1>
              <p
                className={`${
                  avatar.price === "Free" ? "text-green-500" : "text-primary"
                }`}
              >
                {avatar.price}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Modal for Adding Avatar */}
      <Modal
        title="Add New Avatar"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleAddAvatar}
      >
        <Input
          className="mb-3"
          placeholder="Title"
          value={newAvatar.title}
          onChange={(e) =>
            setNewAvatar({ ...newAvatar, title: e.target.value })
          }
        />
        <Input
          className="mb-3"
          placeholder="Price"
          value={newAvatar.price}
          onChange={(e) =>
            setNewAvatar({ ...newAvatar, price: e.target.value })
          }
        />
        <Upload
          showUploadList={false}
          beforeUpload={() => false}
          customRequest={handleImageUpload}
        >
          <Button icon={<UploadOutlined />}>Upload Avatar Image</Button>
        </Upload>
      </Modal>
    </div>
  );
};

export default AvatarSettings;

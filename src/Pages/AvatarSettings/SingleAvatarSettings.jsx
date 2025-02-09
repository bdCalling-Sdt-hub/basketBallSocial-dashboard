import { useState } from "react";
import { Button, Modal, Upload, Tooltip } from "antd";
import { FaPlus } from "react-icons/fa6";
import { UploadOutlined } from "@ant-design/icons";
import avatar2 from "../../assets/avatar2.png";
import avatar22 from "../../assets/avatar22.png";
import avatar23 from "../../assets/avatar23.png";
import avatar24 from "../../assets/avatar24.png";
import { MdCancel } from "react-icons/md";

const SingleAvatarSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([avatar2, avatar22, avatar23, avatar24]);
  const [fileList, setFileList] = useState([]);

  const handleUpload = ({ file }) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImages([...images, e.target.result]);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="p-5 text-white">
      <div className="flex flex-col bg-[#181818] rounded-3xl w-[70%] mx-auto py-10 items-center">
        <img src={avatar2} alt="" className="h-[180px] rounded-full" />
        <h1 className="font-bold text-2xl text-center">Barcha Avatarka</h1>
        <p className="w-[80%] my-3 text-center text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl my-10">All Avatars</h1>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-5 bg-primary border-none font-bold"
          >
            <FaPlus /> Add New Avatar
          </Button>
        </div>

        <div className="grid grid-cols-8 gap-2">
          {images.map((image, i) => (
            <div
              key={i}
              className="relative p-2 bg-slate-200 rounded-2xl h-[120px] flex items-center justify-end flex-col bg-opacity-10 cursor-pointer"
            >
              <img className="absolute -top-6 h-[120px]" src={image} alt="" />

              <span
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => handleRemoveImage(i)}
              >
                <MdCancel className="text-red-500" />
              </span>
            </div>
          ))}
        </div>
      </div>

      <Modal
        title="Add New Avatar"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Upload
          beforeUpload={() => false}
          fileList={fileList}
          onChange={({ fileList }) => setFileList(fileList)}
          customRequest={handleUpload}
        >
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
        <Button
          onClick={() => {
            setIsModalOpen(false);
            setFileList([]);
          }}
          className="mt-5 w-full bg-primary border-none font-bold"
        >
          Submit
        </Button>
      </Modal>
    </div>
  );
};

export default SingleAvatarSettings;

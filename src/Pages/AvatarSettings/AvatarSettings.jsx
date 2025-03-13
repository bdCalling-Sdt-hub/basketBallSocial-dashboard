import { useState } from "react";
import {
  Modal,
  Input,
  Button,
  Upload,
  Spin,
  Select,
  Pagination,
  Form,
} from "antd";
import whiteBg from "../../assets/whiteBG.png";
import { FaPlus } from "react-icons/fa6";
import {
  useAddAvatarMutation,
  useAvatarsQuery,
} from "../../redux/apiSlices/abatarSlice";
import { imageUrl } from "../../redux/api/baseApi";
import toast from "react-hot-toast";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const { Option } = Select;

const AvatarSettings = () => {
  const [form] = Form.useForm();
  const [imgURL, setImgURL] = useState();
  const [file, setFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  const { data: avatarsDetails, isLoading } = useAvatarsQuery({
    page,
    limit: 24,
  });
  const [addAvatar] = useAddAvatarMutation();

  const avatarsData = avatarsDetails?.data?.avatars || [];
  const totalAvatars = avatarsDetails?.data?.pagination?.total || 0;
  const pagination = avatarsDetails?.data?.pagination;

  const handleAddAvatar = async (values) => {
    const formData = new FormData();
    formData.append("type", values.type);
    formData.append("price", values.price);
    formData.append("icon", file);

    try {
      const response = await addAvatar(formData).unwrap();
      if (response.success) {
        toast.success("Avatar added successfully!");
        setIsModalOpen(false);
        form.resetFields();
        setImgURL();
        setFile(null);
      }
    } catch (error) {
      console.error("Failed to add avatar:", error);
    }
  };

  const handleImageUpload = ({ file }) => {
    if (file.type !== "image/png") {
      alert("Only PNG files are allowed.");
      return false; // Prevent upload
    }
    const reader = new FileReader();
    reader.onload = () => {
      form.setFieldsValue({ icon: reader.result }); // Set the base64 image to the form
    };
    reader.readAsDataURL(file);
    return false; // Prevent default upload behavior
  };

  const onChangeImage = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imgUrl = URL.createObjectURL(selectedFile);
      setImgURL(imgUrl);
      setFile(selectedFile);
    }
  };

  return (
    <div className="p-5 text-white">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl mt-5">All Avatars</h1>
        <Button
          className="bg-primary px-7 py-5 rounded-md border-none flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus /> Add Avatar
        </Button>
      </div>

      <div className="grid grid-cols-8 gap-10 my-10">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spin />
          </div>
        ) : (
          avatarsData?.map((avatar) => (
            <div
              key={avatar._id}
              className="relative p-2 bg-slate-200 rounded-2xl h-[150px] flex items-center justify-end flex-col bg-opacity-10 cursor-pointer"
            >
              <img
                className="absolute -top-6 h-[70%] w-[80%] rounded-full"
                src={
                  avatar.avatar.startsWith("http")
                    ? avatar.avatar
                    : `${imageUrl}${avatar.avatar}`
                }
                alt={avatar.title}
              />
              <h1
                className={
                  avatar.type === "Free" ? "text-green-500" : "text-primary"
                }
              >
                {avatar.type}
              </h1>
              {avatar.type === "Paid" && (
                <p className="text-primary">${avatar.price}</p>
              )}
            </div>
          ))
        )}
      </div>

      <Pagination
        className="text-center mt-5"
        pageSize={pagination?.limit}
        total={pagination?.total}
        onChange={(page) => setPage(page)}
      />

      {/* Modal for Adding Avatar */}
      <Modal
        title="Add New Avatar"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields(); // Reset the form when modal is closed
        }}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              console.log("Submitting Avatar Data:", values);
              handleAddAvatar(values);
            })
            .catch((error) => {
              console.error("Validation Failed:", error);
            });
        }}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="type"
            label="Type"
            initialValue="Free"
            rules={[{ required: true, message: "Please select a type!" }]}
          >
            <Select>
              <Option value="Free">Free</Option>
              <Option value="Paid">Paid</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="price"
            label="Price"
            initialValue={0}
            dependencies={["type"]}
            rules={[
              ({ getFieldValue }) => ({
                required: getFieldValue("type") === "Paid",
                message: "Please enter the price!",
              }),
            ]}
          >
            <Input
              type="number"
              placeholder="Price"
              // disabled={form.getFieldValue("type") === "Free"}
            />
          </Form.Item>

          <div className="flex flex-col items-center mb-4">
            <input
              onChange={onChangeImage}
              type="file"
              id="img"
              style={{ display: "none" }}
            />
            <label
              htmlFor="img"
              className="relative w-full h-80 cursor-pointer border border-gray-300 bg-white bg-cover bg-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{
                backgroundImage: `url(${imgURL ? imgURL : whiteBg})`,
              }}
            >
              {!imgURL && (
                <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <MdOutlineAddPhotoAlternate
                    size={60}
                    className="text-gray-600"
                  />
                </div>
              )}
            </label>
            <p className="mt-2 text-sm text-gray-500">Click to upload image</p>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AvatarSettings;

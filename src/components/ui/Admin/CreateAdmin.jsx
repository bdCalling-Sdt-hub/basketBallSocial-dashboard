import { Form, Input, Modal } from "antd";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useCreateAdminMutation } from "../../../redux/apiSlices/adminManagementSlice";
import toast from "react-hot-toast";

const CreateAdmin = ({ open, setOpen }) => {
  const [form] = Form.useForm();
  const [createAdmin] = useCreateAdminMutation();

  const handleClose = () => {
    setOpen(false);
    form.resetFields();
  };

  const onFinish = async (values) => {
    try {
      const response = await createAdmin(values).unwrap(); // Use unwrap to get the resolved value
      if (response.success) {
        toast.success("Admin created successfully!");
        handleClose(); // Close the modal after success
      } else {
        toast.error(response.message || "Failed to create admin.");
      }
    } catch (error) {
      toast.error(
        error?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <Modal
      centered
      open={open}
      onCancel={handleClose}
      width={500}
      footer={null}
      className="custom-modal"
      closeIcon={<RxCross2 style={{ color: "red" }} />}
    >
      <div className="p-6 mt-4">
        <h1 className="font-semibold text-white text-xl mb-3">Add Admin</h1>

        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label={<p className="text-white">Name</p>}
            name="name"
            rules={[
              { required: true, message: "Please enter the admin's name" },
            ]}
            className="text-[#6D6D6D] py-1"
          >
            <Input
              style={{ background: "#535045", color: "white" }}
              className="w-full border outline-none px-3 py-[10px]"
            />
          </Form.Item>

          <Form.Item
            label={<p className="text-white">Email</p>}
            name="email"
            rules={[
              { required: true, message: "Please enter the admin's email" },
            ]}
            className="text-[#6D6D6D] py-1"
          >
            <Input
              style={{ background: "#535045", color: "white" }}
              className="w-full border outline-none px-3 py-[10px]"
            />
          </Form.Item>
          <Form.Item
            label={<p className="text-white">Role</p>}
            name="role"
            rules={[
              { required: true, message: "Please enter the admin's role" },
            ]}
            className="text-[#6D6D6D] py-1"
          >
            <Input
              style={{ background: "#535045", color: "white" }}
              className="w-full border outline-none px-3 py-[10px]"
            />
          </Form.Item>

          <Form.Item
            label={<p className="text-white">Password</p>}
            name="password"
            rules={[{ required: true, message: "Please enter a password" }]}
            className="text-[#6D6D6D] py-1"
          >
            <Input.Password
              style={{ background: "#535045", color: "white" }}
              className="w-full border outline-none px-3 py-[10px]"
            />
          </Form.Item>

          <Form.Item className="text-center mt-6">
            <button
              type="submit"
              className="bg-[#6d5d36] text-white w-40 h-11 rounded-lg"
            >
              Create
            </button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default CreateAdmin;

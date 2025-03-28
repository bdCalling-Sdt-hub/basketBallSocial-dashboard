import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import logo from "../../assets/logo.png";

import toast from "react-hot-toast";
import { useChangePasswordMutation } from "../../redux/apiSlices/authSlice";

const ChangePassword = () => {
  const [form] = Form.useForm();
  const [errorMessages, setErrorMessages] = useState({
    newPassError: "",
    conPassError: "",
  });

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const validatePasswordChange = (values) => {
    let errors = {};

    if (values.currentPassword === values.newPassword) {
      errors.newPassError = "The New password is similar to the old Password";
    }

    if (values.newPassword !== values.confirmPassword) {
      errors.conPassError = "New Password and Confirm Password don't match";
    }

    setErrorMessages(errors);
    return errors;
  };

  const onFinish = async (values) => {
    const errors = validatePasswordChange(values);

    if (Object.keys(errors).length === 0) {
      try {
        const res = await changePassword(values).unwrap(); // Use `.unwrap()` to get the resolved value or error
        if (res.success) {
          toast.success("Password changed successfully");
        } else {
          toast.error("Password change failed");
        }
      } catch (err) {
        console.error("Error changing password:", err);
        toast.error("An error occurred while changing the password");
      }
    }
  };

  return (
    <div className="p-5 rounded-2xl h-[700px]">
      <Form
        layout="vertical"
        form={form} // Connect the form instance
        onFinish={onFinish}
        className="w-[50%] mx-auto mt-20"
      >
        <Form.Item
          name="currentPassword"
          label={<p className="text-white">Current Password</p>}
          rules={[
            {
              required: true,
              message: "Please Enter Current Password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Enter current password"
            className="h-12 border border-gray-300 rounded-md focus:border-[#C4A862] focus:ring-0"
            style={{ background: "#535045", color: "white" }}
          />
        </Form.Item>

        {errorMessages.newPassError && (
          <p style={{ color: "red" }}>{errorMessages.newPassError}</p>
        )}

        <Form.Item
          name="newPassword"
          rules={[
            {
              required: true,
              message: "Please Enter New Password!",
            },
          ]}
          label={<p className="text-white">New Password</p>}
        >
          <Input.Password
            style={{ background: "#535045", color: "white" }}
            placeholder="Enter new password"
            className="h-12 border border-gray-300 rounded-md focus:border-[#C4A862] focus:ring-0"
          />
        </Form.Item>

        {errorMessages.conPassError && (
          <p style={{ color: "red" }}>{errorMessages.conPassError}</p>
        )}

        <Form.Item
          label={<p className="text-white">Confirm Password</p>}
          name="confirmPassword"
          dependencies={["newPassword"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please Enter Confirm Password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Enter confirm password"
            style={{ background: "#535045", color: "white" }}
            className="h-12 border border-gray-300 rounded-md focus:border-[#C4A862] focus:ring-0"
          />
        </Form.Item>

        <Form.Item
          style={{
            marginBottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            htmlType="submit"
            block
            style={{
              width: 178,
              height: 48,
              fontWeight: "400px",
              background: "#C4A862",
              color: "black",
            }}
            className="roboto-medium text-lg leading-4 font-semibold"
          >
            {isLoading ? "Loading..." : "Change"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePassword;

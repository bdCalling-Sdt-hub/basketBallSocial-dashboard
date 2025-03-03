import { Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import {
  useCreateFaqMutation,
  useUpdateFaqMutation,
} from "../../../redux/apiSlices/faqSlice";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

const FaqModal = ({
  setModalData,
  modalData,
  openAddModel,
  setOpenAddModel,
}) => {
  const [form] = Form.useForm();

  const [updateFaq] = useUpdateFaqMutation();
  const [createFaq] = useCreateFaqMutation();

  useEffect(() => {
    if (modalData) {
      form.setFieldsValue({
        question: modalData?.question,
        answer: modalData?.answer,
      });
    }
  }, [modalData]);

  const onFinish = async (values) => {
    if (modalData) {
      try {
        const response = await updateFaq({
          data: values,
          id: modalData?._id,
        }).unwrap();
        if (response?.success) {
          toast.success(response?.message);
          setOpenAddModel(false);
          setModalData(null);
          form.resetFields();
        } else {
          toast.error(response?.message);
        }
      } catch (error) {
        toast.error(
          error?.data?.message || "An error occurred. Please try again."
        );
      }
    } else {
      try {
        const response = await createFaq(values).unwrap();
        if (response?.success) {
          toast.success(response?.message);
          setOpenAddModel(false);
          setModalData(null);
          form.resetFields();
        } else {
          toast.error(response?.message);
        }
      } catch (error) {
        toast.error(
          error?.data?.message || "An error occurred. Please try again."
        );
      }
    }
    console.log(values);
  };
  return (
    <Modal
      centered
      open={openAddModel}
      onCancel={() => {
        setOpenAddModel(false);
        setModalData(null);
        form.resetFields();
      }}
      width={500}
      footer={false}
      className="custom-modal text-white"
      closeIcon={<RxCross2 style={{ color: "red" }} />}
    >
      <div className="p-6">
        <h1
          className=" text-[20px] font-medium"
          style={{ marginBottom: "12px" }}
        >
          {modalData ? "Update FAQ" : "Add FAQ"}
        </h1>
        <Form onFinish={onFinish} form={form} layout="vertical">
          <Form.Item
            name="question"
            style={{ marginBottom: "16px" }}
            label={<p style={{ display: "block", color: "white" }}>Question</p>}
          >
            <Input
              type="Text"
              placeholder="Enter Question"
              style={{
                border: "1px solid #E0E4EC",
                padding: "10px",
                height: "52px",
                background: "#535045",
                color: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="answer"
            style={{ marginBottom: "16px" }}
            label={<p style={{ display: "block", color: "white" }}>Answer</p>}
          >
            <Input.TextArea
              type="Text"
              placeholder="Enter answer"
              style={{
                border: "1px solid #E0E4EC",
                padding: "10px",
                height: "152px",
                background: "#535045",
                color: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                resize: "none",
              }}
            />
          </Form.Item>
          <Form.Item className=" text-end">
            <button
              type="primary"
              htmlType="submit"
              className="bg-primary text-white w-[120px] h-[42px] rounded-lg"
            >
              Submit
            </button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default FaqModal;

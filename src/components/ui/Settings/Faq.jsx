import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import FaqModal from "../../ui/FAQ/FaqModal";
import {
  useDeleteFaqMutation,
  useGetAllFaqsQuery,
} from "../../../redux/apiSlices/faqSlice";
import logo from "../../../assets/logo.png";
import toast from "react-hot-toast";

const Faq = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [modalData, setModalData] = useState(null);

  const { data: faqs, isLoading } = useGetAllFaqsQuery();
  const [deleteFaq] = useDeleteFaqMutation();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={logo} alt="" />
      </div>
    );
  }

  const faqData = faqs?.data;
  console.log(faqData);

  const handleDelete = async (id) => {
    try {
      const response = await deleteFaq(id).unwrap();
      if (response?.success) {
        toast.success(response?.message);
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      toast.error(
        error?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  const faqInfo = [
    {
      _id: "1",
      question: "What is your return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase with a valid receipt. Items must be in their original condition.",
    },
    {
      _id: "2",
      question: "How can I track my order?",
      answer:
        "You can track your order by using the tracking link sent to your email upon shipment. Alternatively, log in to your account to view the order status.",
    },
    {
      _id: "3",
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to selected countries. Please check our shipping information page for more details.",
    },
    {
      _id: "4",
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on 'Forgot Password' on the login page. A password reset link will be sent to your registered email address.",
    },
    {
      _id: "5",
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on 'Forgot Password' on the login page. A password reset link will be sent to your registered email address.",
    },
  ];

  return (
    <div className=" p-5 text-white">
      <div className="mb-4 flex justify-between items-center w-full">
        <button
          onClick={() => setOpenAddModel(true)}
          className="flex items-center gap-1 px-4 py-2 text-black bg-primary rounded hover:bg-secondary hover:text-black transition-colors"
        >
          <FaPlus />
          Add FAQ
        </button>
      </div>

      <div className="bg-black p-1 space-y-1 rounded-md">
        {faqData?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-start gap-4 p-4 rounded-lg bg-[#1e1e1e]"
          >
            <GoQuestion color="#c4a862" size={25} className="mt-3" />
            <div className="flex-1">
              <p className="text-base font-medium rounded-xl py-2 px-4 flex items-center gap-8">
                <span className="flex-1 text-white">{item?.question}</span>
              </p>
              <div className=" rounded-xl py-2 px-4 mt-4">
                <p className="text-[#b3b3b3] leading-6">{item?.answer}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <CiEdit
                onClick={() => {
                  setOpenAddModel(true);
                  setModalData(item);
                }}
                className="text-2xl cursor-pointer text-[#00809E]"
              />
              <RxCross2
                onClick={() => handleDelete(item?._id)}
                className="text-2xl cursor-pointer text-red-600"
              />
            </div>
          </div>
        ))}
      </div>

      <FaqModal
        setOpenAddModel={setOpenAddModel}
        openAddModel={openAddModel}
        modalData={modalData}
        setModalData={setModalData}
      />
    </div>
  );
};

export default Faq;

import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import Title from "../../components/common/Title";
import logo from "../../assets/logo.png";
import toast from "react-hot-toast";
import {
  usePrivacyPolicyQuery,
  useUpdatePricyPolicyMutation,
} from "../../redux/apiSlices/privacyPolicySlice";

const PrivacyPolicy = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  console.log(content);

  const { data: privacyPolicy, isLoading, refetch } = usePrivacyPolicyQuery();

  const [updatePricyPolicy] = useUpdatePricyPolicyMutation();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={logo} alt="" />
      </div>
    );
  }

  const privacyPolicyData = privacyPolicy?.content;

  const termsDataSave = async () => {
    const data = {
      content: content,
    };

    try {
      const res = await updatePricyPolicy(data).unwrap();
      if (res.success) {
        toast.success("Privacy Policy updated successfully");
        setContent(res.data.content);
        refetch();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Update failed. Please try again.");
    }
  };

  return (
    <div className="p-5">
      <Title className="mb-4">Privacy Policy</Title>

      <JoditEditor
        className="text-black"
        ref={editor}
        value={privacyPolicyData}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />

      <div className="flex items-center justify-center mt-5">
        <button
          onClick={termsDataSave}
          type="submit"
          className="bg-[#C4A862] text-lg font-semibold text-black w-[160px] h-[42px] rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

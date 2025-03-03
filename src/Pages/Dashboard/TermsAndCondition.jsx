import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import Title from "../../components/common/Title";
import {
  useTermsAndConditionQuery,
  useUpdateTermsAndConditionsMutation,
} from "../../redux/apiSlices/termsAndConditionSlice";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png";

const TermsAndCondition = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const {
    data: termsAndCondition,
    isLoading,
    refetch,
  } = useTermsAndConditionQuery();

  const [updateTermsAndConditions] = useUpdateTermsAndConditionsMutation();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={logo} alt="" />
      </div>
    );
  }

  const termsAndConditionData = termsAndCondition?.content;
  console.log(termsAndConditionData);

  const termsDataSave = async () => {
    const data = {
      content: content,
    };

    try {
      const res = await updateTermsAndConditions(data).unwrap();
      if (res.success) {
        toast.success("Terms and Conditions updated successfully");
        setContent(res.data.content);
        refetch();
      } else {
        toast.error("Something went wrong");
      }
    } catch {
      throw new Error("Something Is wrong at try");
    }
  };

  return (
    <div className="p-5 text-white">
      <Title className="mb-4">Terms and Conditions</Title>

      <JoditEditor
        className="text-black"
        ref={editor}
        value={termsAndConditionData}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />

      <div className="flex items-center justify-center mt-5">
        <button
          onClick={termsDataSave}
          type="submit"
          className="bg-[#C4A862] text-black text-lg font-semibold w-[160px] h-[42px] rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TermsAndCondition;

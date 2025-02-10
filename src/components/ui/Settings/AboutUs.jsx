import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

// import {
//   useTermsAndConditionQuery,
//   useUpdateTermsAndConditionsMutation,
// } from "../../redux/apiSlices/termsAndConditionSlice";
import toast from "react-hot-toast";
import logo from "../../../assets/logo.png";
import Title from "../../common/Title";

const AboutUs = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const isLoading = false;

  useEffect(() => {
    setContent(content);
  }, []);

  // const {
  //   data: termsAndCondition,
  //   isLoading,
  //   refetch,
  // } = useTermsAndConditionQuery(selectedTab);

  // const [updateTermsAndConditions] = useUpdateTermsAndConditionsMutation();

  const termsAndCondition = [];

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={logo} alt="" />
      </div>
    );
  }

  const termsAndConditionData = termsAndCondition?.content;

  const termsDataSave = async () => {
    const data = {
      content: content,
      userType: selectedTab,
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
      <Title className="mb-4">About Us</Title>

      <JoditEditor
        ref={editor}
        value={termsAndConditionData}
        onChange={(newContent) => {
          setContent(newContent);
        }}
        config={{
          toolbarInline: true,
          toolbarSticky: false,
          style: {
            backgroundColor: "#535045",
            color: "white",
          },
        }}
      />

      <div className="flex items-center justify-center mt-5">
        <button
          onClick={termsDataSave}
          type="submit"
          className="bg-[#FFB342] text-black w-[160px] h-[42px] rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AboutUs;

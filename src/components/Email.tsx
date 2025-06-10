import React from "react";
import { useState } from "react";
import { sendEmail } from "../utils/api";
import { CoreCustomToast } from "../utils/CustomToast";
import { filterObjectValue } from "../utils/emailValidation";
import styles from "./Email.module.css";

interface EmailData {
  name: string;
  message: string;
  email: string;
}

type EmailProp = {
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  custName: React.Dispatch<React.SetStateAction<string>>;
};
export function Email({ showModal, custName }: EmailProp) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [highlightedFields, setHighlightedFields] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { disabled, emptyFields } = filterObjectValue(inputs);
    if (disabled) {
      setHighlightedFields(emptyFields);
      CoreCustomToast(
        false,
        "Complete all required fields that have asterisk (*)"
      );
      setLoading(false);
    } else {
      setHighlightedFields([]);
      submitEmail(inputs);
    }
    async function submitEmail(data: EmailData) {
      const response = await sendEmail(data);

      if (response.success) {
        setLoading(false);
        showModal(true);
        custName(data.name);
        CoreCustomToast(true, response.message);
        setInputs({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setLoading(false);
        CoreCustomToast(false, response.message);
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={`space-y-4`}>
        <div className={`${styles.centerForm} space-y-2`}>
          <label
            htmlFor="name"
            className={`${styles.hideLabel} w-24 font-semibold md:block`}
          >
            Name
          </label>
          <input
            className={`border-1 rounded-md px-2 ${
              highlightedFields.includes("name") ? "text-red-500" : ""
            }`}
            placeholder="John Doe"
            type="text"
            onChange={handleChange}
            name="name"
            value={inputs.name}
          />
        </div>
        <div className={`${styles.centerForm} space-y-2`}>
          <label
            htmlFor="email"
            className={`${styles.hideLabel} w-24 font-semibold`}
          >
            Email
          </label>
          <input
            className={`border-1 rounded-md px-2 ${
              highlightedFields.includes("name") ? "text-red-500" : ""
            }`}
            placeholder="johndoe@email.com"
            type="text"
            onChange={handleChange}
            name="email"
            value={inputs.email}
          />
        </div>

        <div className={`${styles.centerForm} space-y-2`}>
          <label
            htmlFor="message"
            className={`${styles.hideLabel} w-24 font-semibold`}
          >
            Message
          </label>
          <textarea
            className={`border-1 rounded-md p-2 w-72 ${
              highlightedFields.includes("name") ? "text-red-500" : ""
            }`}
            onChange={handleChange}
            name="message"
            value={inputs.message}
            rows={4}
            placeholder="Leave me a message"
          ></textarea>
        </div>
        <div className="ml-24">
          <button
            type="submit"
            disabled={loading}
            className="border-1 rounded-xl px-2 py-1 text-white bg-[#2d64b0] w-24 mt-4"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </>
  );
}

export default Email;

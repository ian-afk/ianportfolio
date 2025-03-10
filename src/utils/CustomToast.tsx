import { toast } from "react-toastify";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
// Reusable function
export const CoreCustomToast = (type: boolean, message: string) => {
  console.log(type);
  if (type === true) {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      progress: undefined,
      icon: <FaCheckCircle style={{ color: "green" }} />,
    });
  } else {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      progress: undefined,
      icon: <FaExclamationCircle style={{ color: "red" }} />,
    });
  }
};

export const toProperCase = (text: String) => {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .replace(/\b\w/g, (char: String) => char.toUpperCase());
};

export const eventLocationConcat = (
  streetAddress: string,
  regionSelected: { value: string; label: string } | null,
  provinceSelected: { value: string; label: string } | null,
  citySelected: { value: string; label: string } | null
): string => {
  const region = regionSelected?.label || "";
  const province = provinceSelected?.label || "";
  const city = citySelected?.label || "";
  console.log(
    `${streetAddress}, ${city}, ${province}, ${region}`
      .replace(/(, )+/g, ", ")
      .trim()
  );
  return `${streetAddress}, ${city}, ${province}, ${region}`
    .replace(/(, )+/g, ", ")
    .trim();
};

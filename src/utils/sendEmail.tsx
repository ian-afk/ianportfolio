import { Resend } from "resend";
import Contact from "../emails/Contact";

const resend = new Resend(import.meta.env.VITE_RESEND_API); // Get API key from Resend

interface sendEmailProps {
  name: string;
  message: string;
  email: string;
}
export const sendEmail = async ({ name, email, message }: sendEmailProps) => {
  try {
    const response = await resend.emails.send({
      from: "crkdosal@gmail.com",
      to: "crkdosal@gmail.com",
      subject: `New contact from message from ${name}`,
      react: <Contact email={email} message={message} name={name} />, // Renders the React Email template
    });

    return response;
  } catch (error) {
    console.error("Email sending failed:", error);
    return null;
  }
};

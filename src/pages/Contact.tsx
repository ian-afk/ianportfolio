import { useState } from "react";
import Email from "../components/Email";
import Modal from "../components/Modal";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [custName, setCustName] = useState("");
  const message =
    "Thank you for hitting me up, I will get in touch with you shortly! Aja!";
  return (
    <section id="contact" className="mx-40 min-h-[70vh] ">
      <div className="text-center font-bold text-2xl my-4">
        <h2 className="underline underline-offset-8 text-[#2d64b0]">Contact</h2>
      </div>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
        <div className="">
          <img src="./contact-us.jpg" alt="" />
        </div>
        <div>
          <Email showModal={setShowModal} custName={setCustName} />
        </div>
      </div>
      {showModal && (
        <Modal custName={custName} message={message} showModal={setShowModal} />
      )}
    </section>
  );
}

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const btn = document.getElementById("button");
    btn.value = "Sending...";

    emailjs
      .sendForm("service_mcbb91r", "template_tty3hxr", form.current, {
        publicKey: "Vnp52ZGpzK8G7jUPE",
      })
      .then(
        () => {
          btn.value = "Send Email";
          console.log("SUCCESS!");
          setFormData({ name: "", message: "", email: "" });
        },
        (error) => {
          btn.value = "Send Failed";
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center pt-16 min-h-screen"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-16">
        Get in Touch ✨
      </h1>
      <form
        id="form"
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg p-8 bg-gray-100 shadow-lg rounded-xl border border-gray-200"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Enter your message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <input
          type="submit"
          id="button"
          value="Send Email"
          className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-all"
        />
      </form>
    </section>
  );
}

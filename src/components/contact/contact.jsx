import React from "react";
import "./contact.css";
import Swal from "sweetalert2";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5f1c0b8a-8726-46bf-9e56-97cdefb19c0c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Message sent successfully",
        text: "I'll get back to you soon",
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#8d99ae",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      Swal.fire({
        title: "Something went wrong",
        text: "Please try again",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#8d99ae",
      });
    }
  };

  return (
    <div className="contactMeWrapper">
      <h1>Write me a message:</h1>
      <div className="contactMe">
        <form onSubmit={onSubmit} id="form">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            id="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

"use client";
import { useForm } from "@/hooks/useForm";

const initialForm = {};
const validationsForm = (form) => {};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
      </form>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.name}
        required
      />
      <textarea
        name="comments"
        cols="50"
        rows="5"
        placeholder="Type your comments"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.name}
        required
      ></textarea>
      <input type="submit" value="Send"></input>
    </div>
  );
};

export default ContactForm;

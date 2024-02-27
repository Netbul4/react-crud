"use client";
import { useForm } from "@/hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "Field 'Name' is required.";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Field 'Name' only accepts letters and white spaces.";
  }

  if (!form.email.trim()) {
    errors.email = "Field 'Email' is required.";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Field 'Email' is not valid.";
  }

  if (!form.subject.trim()) {
    errors.subject = "Field 'Subject' is required.";
  }

  if (!form.comments.trim()) {
    errors.comments = "Field 'Comments' is required.";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "Field 'Comments' only accepts length of 255 characters.";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

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
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Type your comments"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Send"></input>
      </form>
      {loading && <Loader />}
      {response && (
      <Message msg="Data has been sent." bgColor='#198754'/>)}
    </div>
  );
};

export default ContactForm;

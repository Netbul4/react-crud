import { useFetch } from "@/hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, object, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);

  if (!data) return null;
  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#c3545"
      />
    );
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[object];

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Please choose a {title}</option>
        {data && options.map((el) => <option value={el}>{el}</option>)}
      </select>
    </>
  );
};

export default SelectList;

import Image from "next/image";
import "../components/index.css";
import CrudApp from "@/components/CrudApp";
import CrudApi from "@/components/CrudApi";
import SongSearch from "@/components/SongSearch";
import Selects from "@/components/Selects";
import ContactForm from "@/components/ContactForm";
import Modals from "@/components/Modals";

export default function Home() {
  return (
    <>
      <h1>React Tasks</h1>
      <hr />
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <Selects />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

import Image from "next/image";
import "../components/index.css";
import CrudApp from "@/components/CrudApp";
import CrudApi from "@/components/CrudApi";

export default function Home() {
  return (
    <>
      <h1>React Tasks</h1>
      <hr/>
      <CrudApi/>
      <hr/>
      <CrudApp/>
    </>
  );
}

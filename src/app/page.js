import Image from "next/image";
import "../components/index.css";
import CrudApp from "@/components/CrudApp";

export default function Home() {
  return (
    <>
      <h1>React Tasks</h1>
      <CrudApp/>
    </>
  );
}

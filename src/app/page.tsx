import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="absolute flex h-screen">
      <div className="bg-red-100 absolute h-screen w-screen"></div>
      <div className="bg-green-100 absolute h-screen w-screen"></div>
      <div className="bg-yellow-100 absolute h-screen w-screen"></div>
    </div>
  );
}

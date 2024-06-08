import SideBar from "./components/SideBar";
import DashBoard from "./components/dashboard/DashBoard";

export default function Home() {
  return (
   <div className="poppins flex w-full h-screen">
    <SideBar />
    <DashBoard />
   </div>
  );
}

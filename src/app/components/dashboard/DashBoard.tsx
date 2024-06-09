import AddProjects from "../Project/ AddProjects"
import MainArea from "./Main/MainArea"
import TopBar from "./TopBar/TopBar"

const DashBoard = () => {
  return (
    <div className="poppins w-full">
      <AddProjects />
      <TopBar />
      <MainArea />
    </div>
  )
}

export default DashBoard

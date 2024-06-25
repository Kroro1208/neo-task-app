"use client";
import { useGlobalContextProvider } from '../ContextAPI'
import SideBar from '../components/SideBar';
import DashBoard from '../components/Dashboard/Dashboard';
import Projects from '../components/ProjectsScreen/Projects';
import Categories from '../components/CategoriesScreen/Categories';

const Page = () => {
    const {isDark, sideBar, dashboardItems} = useGlobalContextProvider();
    const {openSideBar, setOpenSideBar} = sideBar;
    const { menuItems, setMenuItems } = dashboardItems;
    const selectedItems = menuItems.find( (item) => ( item.isSelected));
    let selectedComponent = null;

    switch (selectedItems?.name){
      case "DashBoard":
        selectedComponent = <DashBoard />;
        break;
      case "Projects":
        selectedComponent = <Projects />
        break;
      case "Categories":
        selectedComponent = <Categories />
        break;
      default:
        break;
    }

  return (
    <div className={`poppins flex w-full h-auto relative ${isDark ? "dark-mode" : "light-mode"}`}>
      <SideBar />
      {selectedComponent}
      <div className={`${openSideBar ? "block" : "hidden"}
        w-full h-full fixed bg-black z-9 opacity-20`}>
      </div>
    </div>
  )
}

export default Page

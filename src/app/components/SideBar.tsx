"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faFeather } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContextProvider } from "../ContextAPI";

interface MenuItem {
    name: string;
    icon : any;
    isSelected: boolean;
}

const SideBar = () => {
    const { isDark  } = useGlobalContextProvider();
    const [ menuItems, setMenuItem] = useState<MenuItem[]>([
        {name: "DashBoard", icon: "faDashboard", isSelected: true},
        {name: "Projects", icon: "faBarsProgress", isSelected: false},
        {name: "Categories", icon: "faLayerGroup", isSelected: false},
    ]);

    const updateItemSelection = (indexItem: number) => {
        const copyMenuItems = menuItems.map((item, index)=> {
            if(indexItem === index) {
                return {...item, isSelected: true};
            }

            return {...item, isSelected: false};
        });

        setMenuItem(copyMenuItems);
    }

  return (
    <div className="poppins border border-gray-200 w-[330px] p-6 py-16 flex flex-col gap-3 justify-center">
      {/* logo */}
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon
        icon={faFeather}
        className={`bg-mainColor p-3 text-sm h-[30px] text-white rounded-md`}
        />
        <span className="text-2xl font-light">
            <span className="font-bold text-mainColor">NeoTask</span> App
        </span>
      </div>
      {/* Menu */}
      <div className="flex text-[15px] flex-col gap-3 w-[182px] h-1/3 pl-5">
        {menuItems.map((menuItem, menuItemIndex) => (
            <div key={menuItemIndex} onClick={()=> {updateItemSelection(menuItemIndex)}}
            className={`${menuItem.isSelected ? 'bg-mainColor' : 'bg-transparent'}
                rounded-lg p-3 flex items-center gap-3 select-none cursor-pointer
                hover:border-mainColor transition-all border border-gray-200
                `}>
                    <FontAwesomeIcon
                    className={`${menuItem.isSelected ? "text-white" : "text-mainColor"}`}
                    width={20}
                    height={20}
                    icon={menuItem.icon}
                    />
                    <span className={`${menuItem.isSelected ? "text-white" : isDark ? "text-white" : "text-dark"}`}>
                        {menuItem.name}
                    </span>
            </div>
        ))}
      </div>
      {/* Footer */}
      <div className="pl-5 cursor-pointer p-3 select-none flex gap-8 flex-col">
        {/* logout button */}
        <div className="flex gap-3 items-center">
            <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            width={20}
            height={20}
            className="text-mainColor"
            />
            <span className="text-[15px]">ログアウト</span>
        </div>
      </div>
      {/* DarkMode */}
      <div className="border p-3">
        darkMode
      </div>
    </div>
  );
}

export default SideBar

"use client";

import { useState } from "react";
import { useGlobalContextProvider } from "../../ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { iconsData } from "../../../../iconsData";

const IconsWindow = ({ setSelectedIcon }: { setSelectedIcon: (icon: any) => void }) => {
    const [allIcons, setAllIcons] = useState(iconsData);
    const { iconBox, isDark } = useGlobalContextProvider();
    const { openIconBox, setOpenIconBox } = iconBox;

    function handleIconSelection(iconIndex: number) {
      const updatedAllIcons = allIcons.map((singleIcon, index) => {
        if(index === iconIndex) {
          setSelectedIcon(singleIcon.faIcon);
          return {...singleIcon, isSelected: true};
        }
        return { ...singleIcon, isSelected: false };
      });
      setAllIcons(updatedAllIcons);
      setOpenIconBox(false);
    }

  return (
    <div className={ `flex absolute justify-center items-center top-50 w-full left-0 
        ${openIconBox ? "flex" : "hidden" }`}>
      <div className={`${isDark ? "bg-blackColorDark text-white" : "bg-white text-black"}
        flex flex-col gap-6 shadow-md relative z-50 w-[400px] p-4 rounded-md border`}>
        <FontAwesomeIcon
            height={20}
            width={20}
            className={`${isDark ? "bg-blackColorDark" : "bg-white"}`
            }
            icon={faClose}
            onClick={() => setOpenIconBox(false)}
        />
        <span className="font-bold text-lg bg-transparent mt-3">
            アイコンを選んでください
        </span>
        <div className="flex flex-wrap gap-4 items-center rounded-md border border-gray-200 p-5">
            {allIcons.map((icon, iconIndex)=> (
                <FontAwesomeIcon
                // todo
                className={`${icon.isSelected ? "text-mainColor border-mainColor" : `${isDark ? "text-white" : "text-black"}`}
                  border p-2 border-gray-300 rounded-md text-xl cursor-pointer hover:text-mainColor`}
                icon={icon.faIcon}
                key={iconIndex}
                width={50}
                height={50}
                />
            ))}
        </div>
        <div className="flex justify-end my-2">
            <button className="bg-mainColor select-none p-2 rounded-md text-white text-[13px] px-8">
                登録
            </button>
        </div>
      </div>
    </div>
  )
}

export default IconsWindow

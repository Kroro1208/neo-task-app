"use client";

import { useEffect, useRef, useState } from "react";
import { useGlobalContextProvider } from "../ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faFlask, faIcons } from "@fortawesome/free-solid-svg-icons";
import IconsWindow from "./ProjectsScreen/IconsWindow";
import MultipleSelectIcon from "./MultipleSelectIcon";

const AddProjects = () => {
    const [ position, setPosition ] = useState({ top: 0, left: 0}); 
    const [ childWidth, setInnerWidth ] = useState(590);
    const { projectWindow, isDark, iconBox, allCategoriesObject, allProjectsObject, selectedItemObject } = useGlobalContextProvider();
    const [parentWidth, setParentWidth ] = useState(0);
    const [ parentHeight, setParentHeight ] = useState(0);
    const { openIconBox, setOpenIconBox } = iconBox;
    const {openNewProjectBox, setOpenNewProjectBox } = projectWindow;
    const projectInputRef = useRef<HTMLInputElement>(null);
    const { selectedItem, setSelectedItem } = selectedItemObject;
    const [ selectedIcon, setSelectedIcon ] = useState<any>(faFlask);
    const { allCategories } = allCategoriesObject;

    const [ projectName, setProjectName ] = useState("");
    const [ projectCategories, setProjectCategories ] = useState<string[]>([]);
    const childHeight = 400;

    useEffect(() => {
      const caluculatePosition = () => {
        const left = (parentWidth - childWidth) / 2;
        const top = (parentHeight - childHeight) / 2;
        setPosition({ left, top }); // { left: left, top: top}
      }

      setParentWidth(window.innerWidth);
      setParentHeight(window.innerHeight);
      caluculatePosition();

      const handleResize = () => {
        caluculatePosition();
        setParentWidth(window.innerWidth);
        setParentHeight(window.innerHeight);
      }

      if(parentWidth < 600){
        setInnerWidth(340);
      } else {
        setInnerWidth(570);
      }

      window.addEventListener('resize', handleResize);
      return () => {
        window.addEventListener('resize', handleResize);
      }
    }, [openNewProjectBox, parentHeight, parentWidth, childWidth]);
    
    const handleCategoryChange = (value: string[]) => {
      setProjectCategories(value);
    }
    
  return (
    <div style={{
      left: `${position.left}px`,
      top: `${position.top}px`,
      width: `${childWidth}px`,
      height: `${childHeight}px`
    }}
    className={`${openNewProjectBox ? "visible opacity-100" : "invisible opacity-0"}
    transition-all fixed p-6 py-7 rounded-lg flex flex-col z-40 shadow-md top-8
    ${isDark ? "bg-blackColor" : "bg-white"}` }>
      <IconsWindow setSelectedIcon={setSelectedIcon}/>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-[20px] mt-1">
          {selectedItem === null ? "タスクの追加" : "編集"}
        </span>
        <FontAwesomeIcon
        style={{ pointerEvents: `${openIconBox ? "none" : "all"}` }}
        onClick={()=>{setOpenNewProjectBox(false); setParentWidth(0); setSelectedItem(null); }}
        icon={faClose}
        className="opacity-30 cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-2 mt-10 px-3">
        <span className="text-sm opacity-80">プロジェクト名</span>
        <div className="flex gap-4 justify-between items-center">
          <input
          ref={projectInputRef}
          value={projectName}
          onChange={(event) => setProjectName(event.target.value)}
          className={`border w-full border-gray-200 outline-none p-4 rounded-md text-[13px]
            ${isDark ? "bg-blackColorDark" : "bg-white"}`}
          placeholder="プロジェクト名を入力"
          />
          <FontAwesomeIcon
           className="bg-mainColor mt-[1px] p-4 rounded-md text-white cursor-pointer"
           onClick={()=> setOpenIconBox(true)}
           icon={selectedIcon ? selectedIcon : faFlask}
           height={16}
           width={20}
          />
        </div>
      </div>
        {/* カテゴリーの選択 */}
      <div className={`flex flex-col gap-2 mx-3`}>
        <MultipleSelectIcon
        selectedCategories={allCategories}
        onselectionchange={handleCategoryChange}
        openNewProjectBox={openNewProjectBox}
        projectCategories={projectCategories}
        selectedItem={selectedItem}
        isDark={isDark}
        />
      </div>
      <div className="text-center mx-2 mt-10">
        <button
        onClick={() => {
          selectedItem ? editProjectFunction() : addNewProject();
        }}
        className="bg-mainColor w-full p-3 text-white rounded-md text-sm">
          { selectedItem === null ? "追加" : "編集"}
        </button>
      </div>
    </div>
  )
}

export default AddProjects

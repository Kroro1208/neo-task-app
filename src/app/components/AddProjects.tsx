"use client";

import { useEffect, useState } from "react";
import { useGlobalContextProvider } from "../ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const AddProjects = () => {
    const [ position, setPosition ] = useState({ top: 0, left: 0}); 
    const [ childWidth, setInnerWidth ] = useState(590);
    const { projectWindow, isDark } = useGlobalContextProvider();
    const {openNewProjectBox, setOpenNewProjectBox } = projectWindow;
    const parentWidth = window.innerWidth;
    const parentHeight = window.innerHeight;
    const childHeight = 400;

    useEffect(() => {
      const caluculatePosition = () => {
        const left = (parentWidth - childWidth) / 2;
        const top = (parentHeight - childHeight) / 2;
        setPosition({ left, top }); // { left: left, top: top}
      }

      caluculatePosition();
      const handleResize = () => {
        caluculatePosition();
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
    }, [childWidth]);
    
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
      <div className="flex justify-between items-center">
        <span className="font-semibold text-[20px] mt-1">新規プロジェクト追加</span>
        <FontAwesomeIcon
        onClick={()=>setOpenNewProjectBox(false)}
        icon={faClose}
        className="bg-mainColor mt-1 p-3 rounded-md text-white"
        height={50}
        width={20}
        />
      </div>
        {/* カテゴリーの選択 */}
      <div className={`flex flex-col gap-2 mx-3`}>
        <span className="text-sm opacity-80">カテゴリー</span>
        <select className={`p-3 text-[13px] outline-none border border-gray-200 rounded-md
          ${isDark ? "bg-blackColor" : "bg-white opacity-60"}`}>
          <option value="">カテゴリーを選択</option>
          <option value="option2">カテゴリー1</option>
          <option value="option3">カテゴリー2</option>
        </select>
      </div>
      <div className="text-center mx-2 mt-10">
        <button className="bg-mainColor w-full p-3 text-white rounded-md text-sm">
          プロジェクト追加
        </button>
      </div>
    </div>
  )
}

export default AddProjects

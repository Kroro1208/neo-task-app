import { useGlobalContextProvider } from "@/app/ContextAPI";
import { faDiagramProject, faLayerGroup, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface statisticsCard {
    text: string;
    numbers: number;
    icon: any;
}

const Statistics = () => {
    const staticticsCrd: statisticsCard[] = [
        {text: '全てのタスク', numbers: 15, icon: faDiagramProject},
        {text: '完了済みのタスク', numbers: 30, icon: faListCheck},
        {text: 'カテゴリー', numbers: 3, icon: faLayerGroup},
    ];

    const { isDark, setIsDark } = useGlobalContextProvider();
    const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        function handleResize(){
            setCurrentWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.addEventListener('resize', handleResize);
        }
    }, [currentWidth]);

  return (
    <div className={`${isDark ? "bg-blackColorDark" : "bg-white"} m-5 p-8 rounded-lg flex gap-4`}>
      {staticticsCrd.map((singleCard, cardIndex) => (
        <div key={cardIndex}>
            <Card singleCard={singleCard} currentWidth={currentWidth}/>
        </div>
      ))}
    </div>
  );
}

export default Statistics

const Card = ({singleCard, currentWidth}: {singleCard: statisticsCard, currentWidth:number}) =>  {
    const {text, numbers, icon} = singleCard;
    return (
        <div className={`${currentWidth < 1318 ? "gap-6" : "gap-11"}
            px-4 p-3 rounded-md text-white bg-mainColor flex items-center gap-12`}>
            <div className={`${currentWidth < 750 ? "items-center" : ""} flex flex-col`}>
                <span className="font-bold text-3xl">{numbers}</span>
                <span className={`${currentWidth < 750 ? "text-center" : ""}
                    font-light text-[12px]`}>{text}</span>
            </div>
            <div className={`${currentWidth < 750 ? "hidden" : ""}
                    h-12 w-12 rounded-full bg-white flex items-center justify-center`}>
                <FontAwesomeIcon
                className="p-7 text-mainColor"
                icon={icon}
                />
            </div>
        </div>
    )
}
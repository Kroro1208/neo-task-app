import { useGlobalContextProvider } from "@/app/ContextAPI";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";


interface TaskData {
    day: string;
    taskDone: number;
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: any;
    label: string | number;
}

const ChartBarProgress = () => {
    const [mocDate, setMocData] = useState<TaskData[]>([]);
    const { isDark } = useGlobalContextProvider();
    const [currentWidth, setCurrentWidth ] = useState<number>(window.innerWidth);

    useEffect(()=> {
        const data: TaskData[] = [
            { day: "Monday", taskDone: 5 },
            { day: "Tuesday", taskDone: 14 },
            { day: "Wednesday", taskDone: 3 },
            { day: "Thursday", taskDone: 6 },
            { day: "Friday", taskDone: 7 },
            { day: "Saturday", taskDone: 8 },
            { day: "Sunday", taskDone: 2 },
        ];

        setMocData(data);
    }, []);

    useEffect(() => {
        function handleResize() {
            setCurrentWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [currentWidth]);

    const CustomToolTip:React.FC<CustomTooltipProps> = ({
        active,
        payload,
        label
    }) => {
        if(active && payload && payload.length){
            return (
                <div className={`${isDark ? "bg-blackColor" : "bg-white" }
                p-4 py-4 rounded-md shadow-lg`}>
                    <p className="lex gap-2">
                        <span className="font-bold text-mainColor">{payload[0].value}</span>
                        <span className={`${isDark ? "text-white" : "text-black"}`}>
                            タスク完了
                        </span>
                    </p>
                </div>
            );
        }
        return null;
    }

    const RoundedBar = (props: any) => {
        const { x, y, width, height } = props;
        const radius = 3;
        return (
            <g>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    rx={radius}
                    ry={radius}
                    fill="rgb(62,92,255)"
                />
            </g>
        );
    }

    return (
        <div className={`${isDark ? "bg-blackColor" : "text-white"}
        p-6 py-8 m-5 flex flex-col rounded-lg gap-12`}>
            <div className="font-semibold text-lg ml-5">Daily Progress</div>
            <div className={`${currentWidth < 1358 ? "justify-center" : "" } flex`}>
                <BarChart width={currentWidth < 1358 ? 480 : 600} height={300} data={mocDate}>
                    <CartesianGrid stroke="transparent"/>
                    <XAxis 
                        dataKey="day"
                        tick={{fill: isDark ? "white" : "black", fontSize: `${ currentWidth < 1318 ? 13 : 16 }`}}
                        
                    />
                    <YAxis tick={{fill: isDark ? "white" : "black", fontSize: `${ currentWidth < 1318 ? 13 : 16 }`}}/>
                    <Tooltip content={<CustomToolTip label={"test"}/>} />
                    <Bar
                        dataKey="taskDone"
                        fill="rgb(62,92,255)"
                        background={{fill: "transparent"}}
                        barSize={50}
                        shape={<RoundedBar />}
                        />
                </BarChart>
            </div>
        </div>
    );
}

export default ChartBarProgress

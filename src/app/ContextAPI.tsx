"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { Project } from "./Data/ProjectsData";
import { ProjectCategory } from "./Data/CategoriesData";
import { faBarsProgress, faDashboard, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
    name: string;
    icon: any; // 修正: iconの型を any に変更
    isSelected: boolean;
}

interface dropDownPosition {
    x: number;
    y: number;
}

interface GlobalContext {
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
    menuItems: MenuItem[];
    sideBar: {
        openSideBar: boolean;
        setOpenSideBar: (openSideBar: boolean) => void;
    };
    mobileView: {
        isMobileView: boolean;
        setIsMobileView: (isMobileView: boolean) => void;
    };
    dashboardItems: {
        menuItems: MenuItem[];
        setMenuItems: Dispatch<SetStateAction<MenuItem[]>>;
    };
    allProjectsObject: {
        allProjects: Project[];
        setAllProjects: Dispatch<SetStateAction<Project[]>>;
    };
    allCategoriesObject: {
        allCategories: ProjectCategory[];
        setAllCategories: Dispatch<SetStateAction<ProjectCategory[]>>;
    };

    selectedItemObject: {
        selectedItem: any | null;
        setSelectedItem: Dispatch<SetStateAction<any | null>>;
    };

    projectWindow: {
        openNewProjectBox: boolean;
        setOpenNewProjectBox: (openNewProjectBox: boolean) => void;
        openCreateProject: boolean;
        setOpenCreateProject: (openCreateProject: boolean) => void;
        openTaskWindow: boolean;
        setOpenTaskWindow: (openTaskWindow: boolean) => void;
    };
    iconBox: {
        openIconBox: boolean;
        setOpenIconBox: (openIconBox: boolean) => void;
    };
    dropDown: {
        openDropDown: boolean;
        setOpenDropDown: (openDropDown: boolean) => void;
        dropDownPosition: dropDownPosition;
        setDropDownPosition: Dispatch<SetStateAction<dropDownPosition>>;
    };
}

const GlobalContext = createContext<GlobalContext>({
    isDark: false,
    setIsDark: () => {},
    menuItems: [],
    sideBar: {
        openSideBar: false,
        setOpenSideBar: () => {},
    },
    mobileView: {
        isMobileView: false,
        setIsMobileView: () => {},
    },
    dashboardItems: {
        menuItems: [],
        setMenuItems: () => {},
    },
    allProjectsObject: {
        allProjects: [],
        setAllProjects: () => {},
    },
    allCategoriesObject: {
        allCategories: [],
        setAllCategories: () => {},
    },
    projectWindow: {
        openNewProjectBox: false,
        setOpenNewProjectBox: () => {},
        openCreateProject: false,
        setOpenCreateProject: () => {},
        openTaskWindow: false,
        setOpenTaskWindow: () => {}
        },
    iconBox: {
        openIconBox: false,
        setOpenIconBox: () => {},
    },
    dropDown: {
    openDropDown: false,
    setOpenDropDown: () => {},
    dropDownPosition: { x: 0, y: 0 },
    setDropDownPosition: () => {},
    },
    selectedItemObject: {
        selectedItem: null,
        setSelectedItem: () => {},
      },
});

function GlobalContextProvider({children}: {children: ReactNode}) {
    const [isDark, setIsDark] = useState<boolean>(false);
    const [openSideBar, setOpenSideBar] = useState<boolean>(false);
    const [isMobileView, setIsMobileView] = useState<boolean>(false);
    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const [allCategories, setAllCategories] = useState<ProjectCategory[]>([]);
    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        { name: 'DashBoard', icon: faDashboard, isSelected: true },
        { name: 'Projects', icon: faBarsProgress, isSelected: false },
        { name: 'Categories', icon: faLayerGroup, isSelected: false },
    ]);
    const [ openNewProjectBox, setOpenNewProjectBox] = useState(false);
    const [ openCreateProject, setOpenCreateProject] = useState(false);
    const [openIconBox, setOpenIconBox] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [ openTaskWindow, setOpenTaskWindow] = useState(false);
    const [dropDownPosition, setDropDownPosition] = useState({ x: 0, y: 0 });
    const [ selectedItem, setSelectedItem] = useState<any | null>(null);


    useEffect(() => {
        function handleResize(){
            setIsMobileView(window.innerWidth <= 1160);
            setOpenDropDown(false);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if(openNewProjectBox){
            setOpenNewProjectBox(false);
            setOpenIconBox(false);
        }
    }, [menuItems]);

    

    return (
        <GlobalContext.Provider
            value={{
                isDark,
                setIsDark,
                menuItems,
                sideBar: { openSideBar, setOpenSideBar },
                mobileView: { isMobileView, setIsMobileView },
                dashboardItems: { menuItems, setMenuItems },
                allProjectsObject: { allProjects, setAllProjects },
                allCategoriesObject: { allCategories, setAllCategories },
                projectWindow: {
                    openNewProjectBox,
                    setOpenNewProjectBox,
                    openCreateProject,
                    setOpenCreateProject,
                    openTaskWindow,
                    setOpenTaskWindow
                },
                iconBox: {
                    openIconBox, setOpenIconBox
                },
                dropDown: {
                    openDropDown,
                    setOpenDropDown,
                    dropDownPosition,
                    setDropDownPosition
                },
                selectedItemObject: {
                    selectedItem,
                    setSelectedItem
                }
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContextProvider() {
    return useContext(GlobalContext);
}

export default GlobalContextProvider;

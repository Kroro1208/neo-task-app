"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { Project } from "./Data/ProjectsData";
import { ProjectCategory } from "./Data/CategoriesData";

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
}

const GlobalContext = createContext<GlobalContext>({
    isDark: false,
    setIsDark: () => {},
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
});

function GlobalContextProvider({children}: {children: ReactNode}) {
    const [isDark, setIsDark] = useState<boolean>(false);
    const [openSideBar, setOpenSideBar] = useState<boolean>(false);
    const [isMobileView, setIsMobileView] = useState<boolean>(false);
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const [allCategories, setAllCategories] = useState<ProjectCategory[]>([]);

    useEffect(() => {
        function handleResize(){
            setIsMobileView(window.innerWidth <= 1160);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return window.addEventListener('resize', handleResize);
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                isDark,
                setIsDark,
                sideBar: { openSideBar, setOpenSideBar },
                mobileView: { isMobileView, setIsMobileView },
                dashboardItems: { menuItems, setMenuItems },
                allProjectsObject: { allProjects, setAllProjects },
                allCategoriesObject: { allCategories, setAllCategories },
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

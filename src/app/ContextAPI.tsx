"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContext {
    isDark: boolean;
    setIsDark: (isDark: boolean)=> void;
}

const GlobalContext = createContext<GlobalContext>({
    isDark: false,
    setIsDark: () => {}
});

function GlobalContextProvider({children}: {children: ReactNode}) {
    const [isDark, setIsDark] = useState<boolean>(false);
    return (
        <GlobalContext.Provider value={{isDark, setIsDark}}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContextProvider(){
    return useContext(GlobalContext);
}

export default GlobalContextProvider;
import React, { createContext, useState } from "react";

import { CommonContextType, Podcast } from "@/types";

export const CommonContext = createContext<CommonContextType>({
  podcasts: [],
  setPodcasts: () => true,
});

// @ts-expect-error
export const CommonProvider = ({ children }) => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  return (
    <CommonContext.Provider value={{ podcasts, setPodcasts }}>
      {children}
    </CommonContext.Provider>
  );
};

import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();
export const FavouritesContextProvider = ({ children }) => {
  const [favouritesCount, setfavouritesCount] = useState([]);
  return (
    <FavouritesContext.Provider value={[favouritesCount, setfavouritesCount]}>
      {children}
    </FavouritesContext.Provider>
  );
};

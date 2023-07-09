import { createContext, useContext, useState } from "react";
import { data } from "../assets/assets";
const TripAdvisorContext = createContext({
	continents: []
});

export const TripAdvisorProvider = ({ children }) => {
  const [continents, setContinents] = useState(data.continents);
  return (
    <TripAdvisorContext.Provider
      value={{
        continents
      }}
    >
      {children}
    </TripAdvisorContext.Provider>
  );
};

export const useTripAdvisor = () => useContext(TripAdvisorContext);
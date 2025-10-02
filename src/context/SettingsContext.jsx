import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { api } from "../common/Config";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${api}settings`)
      .then((res) => {
        setSettings(res.data.setting);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
};
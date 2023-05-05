import frontendReadSettings from "@/services/frontend/settings/frontendReadSettings";
import { useEffect, useState } from "react";

export default function useSettings() {
  const [settings, setSettings] = useState();
  const [settingsLoading, setSettingsLoading] = useState(true);
  const [settingsError, setSettingsError] = useState();

  useEffect(() => {
    let subscribe = true;

    frontendReadSettings()
      .then((res) => {
        if (!subscribe) return;

        setSettings(res);
      })
      .catch((err) => {
        setSettingsError(err);
      })
      .finally(() => {
        setSettingsLoading(false);
      });

    return () => {
      subscribe = false;
    };
  }, []);

  return {
    settings,
    settingsLoading,
    settingsError,
  };
}

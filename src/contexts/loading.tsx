"use client";

import LoadingScreen from "@/components/loading-screen";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type DefaultValue = {
  loaded: boolean;
};

type InitialState = DefaultValue & {
  onChange: (key: keyof DefaultValue, value: boolean) => void;
};

const defaultValue = {
  loaded: false,
};

const initialState: InitialState = {
  ...defaultValue,
  onChange: (_key: keyof DefaultValue, _value: boolean) => {},
};

export const LoadingContext = createContext(initialState);

export default function LoadingContextProvider({
  children,
}: PropsWithChildren) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (key: keyof typeof initialState, value: boolean) => {
    setValue((state) => ({
      ...state,
      [key]: value,
    }));
  };

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        onChange("loaded", true);
      },
      150 * 7 + 500,
    );

    return () => clearTimeout(timeout);
  }, []);

  if (!value.loaded) return <LoadingScreen />;

  return (
    <LoadingContext.Provider
      value={{
        ...value,
        onChange,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

import React from "react";

interface ILangContext {
  lang: string,
}

export const LangContext = React.createContext<ILangContext | null>(null)
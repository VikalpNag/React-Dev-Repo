import { createContext } from "react";
// import run from "../config/gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {
  //   const onSent = async (prompt) => {
  //     await run(prompt);
  //   };

  //   onSent("What is React js");

  const contextValue = {};
  return (
    <ContextProvider value={contextValue}>{props.children}</ContextProvider>
  );
};

export default ContextProvider;

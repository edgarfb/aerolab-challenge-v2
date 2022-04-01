import { createContext, useReducer } from "react";

const initalValues = {
  redeemHistory: [],
};
const RedeemContext = createContext();

export default function RedeemContextProvider() {
  const [state, dispatch] = useReducer(redeemReducer, {});
  return <RedeemContext.Provider value={reducerValue}></RedeemContext.Provider>;
}

function redeemReducer(state, action) {
  switch (action.type) {
  }
}

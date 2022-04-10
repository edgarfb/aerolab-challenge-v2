import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import getUserHandler from "../lib/getUserHandler";

const UserContext = createContext(null);
const UserDispatchContext = createContext(null);

export function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, {});

  useEffect(async () => {
    const res = await getUserHandler();

    dispatch({ type: "SET_USER", payload: res });
  }, [user]);

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

export function useUserDispatchContext() {
  return useContext(UserDispatchContext);
}

function userReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "DISCOUNT_POINTS":
      return {
        ...state,
        points: state.points - action.payload,
      };
    case "ADD_POINTS":
      return {
        ...state,
        points: state.points + action.payload,
      };
    default:
      return state;
  }
}

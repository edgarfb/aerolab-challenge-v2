import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";

const UserContext = createContext(null);
const UserDispatchContext = createContext(null);

export function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, {});

  useEffect(async () => {
    const res = await fetch("/api/get-user-handler");
    const data = await res.json();

    dispatch({ type: "SET_USER", payload: data });
  }, []);

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
    default:
      return state;
  }
}

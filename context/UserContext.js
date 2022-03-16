import { createContext, useContext, useReducer } from "react";
import { userMock } from "../fake-data/user-mock";

const UserContext = createContext(null);
const UserDispatchContext = createContext(null);

export function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, userMock);

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
  return state;
}

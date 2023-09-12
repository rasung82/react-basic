import {createContext, useState} from "react";

// 1) Context 생성
export const DarkModeContext = createContext();

// 2) 자식 컴포넌트들을 Context의 Provider로 감싼다.(우산을 쓰여준다.)
// 3) 자식 컴포넌트들과 공유하고 싶은 상태는 value에 넣어준다.
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  );
}

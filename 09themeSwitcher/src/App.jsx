import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light");

  function lightTheme(){
    console.log("light theme");
    setThemeMode("light");
  }

  function darkTheme(){
    console.log("dark theme");
    setThemeMode("dark");
  }

  //actual change in theme
  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(themeMode);
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";


function App() {
  const {theme, toggleTheme} = useTheme()
  return ( 
    <div className={classNames('app', {}, [theme])}>
      <Navbar></Navbar>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
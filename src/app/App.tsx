import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/AppRouter";


function App() {
  const {theme} = useTheme()
  return ( 
    <div className={classNames('app', {}, [theme])}>
      <Navbar></Navbar>
      <div className="content-page">
        <Sidebar></Sidebar>
        <AppRouter></AppRouter>
      </div>
    </div>
  );
}

export default App;
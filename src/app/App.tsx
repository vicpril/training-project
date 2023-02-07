import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/AppRouter";
import { Suspense } from "react";


function App() {
  const {theme} = useTheme()
  return ( 
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar></Navbar>
        <div className="content-page">
          <Sidebar></Sidebar>
          <AppRouter></AppRouter>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
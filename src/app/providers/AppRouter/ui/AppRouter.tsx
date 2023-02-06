import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/routerConfig";

const AppRouter = () => {
  return ( 
    <Suspense fallback={<div>Загрузка...</div>}>
      <div className="page-wrapper">
        <Routes>
          {Object.values(routerConfig).map(({element, path}) => (
            <Route 
            key={path}
            path={path}
            element={element}
            />
            ))}
        </Routes>
      </div>
    </Suspense>
   );
}
 
export default AppRouter;
import {Navigate, Route, Routes} from 'react-router-dom';
import {publicRoutes, RouteNames} from './index';


function AppRouter() {


    return (
        <Routes>
            {
                (publicRoutes).map((route) => (
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.path}
                    />
                ))
            }
            <Route
                path="*"
                element={<Navigate to={RouteNames.HOME} replace/>}
            />
        </Routes>
    );
}

export default AppRouter;

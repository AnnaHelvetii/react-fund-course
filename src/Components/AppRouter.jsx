import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/routes";

const AppRouter = () => {
	const isAuth = true;
	return (
		isAuth
			?
			<Routes>
				{privateRoutes.map((route, i) => 
					<Route
						key={route.path}
						path={route.path}
						element={<route.component/>}
						exact={route.exact}
					/>
					
				)}
				<Route path="/*" element={<Navigate replace to="posts"/>} />
			</Routes>
			:
			<Routes>
				{publicRoutes.map((route, i) => 
					<Route
						key={route.path}
						path={route.path}
						element={<route.component/>}
						exact={route.exact}
					/>
					
				)}
				<Route path="/*" element={<Navigate replace to="login"/>} />
			</Routes>
	);
};

export default AppRouter;
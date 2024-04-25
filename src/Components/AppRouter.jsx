import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/routes";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
	const {isAuth, isLoading} = useContext(AuthContext);

	if (isLoading) {
		return <Loader/>
	}

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
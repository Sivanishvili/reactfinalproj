import {Route, Routes } from "react-router-dom";
import { Homepage, LoginPage, RegisterPage } from "./pages";



export const RouteComponent = () => {
    return (<Routes>

        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
    </Routes>
    );
};
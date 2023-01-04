import { Routes , Route } from "react-router-dom"
import { PrivateRoutes } from ".";

import Home from "../pages/Home";
import Login from "../pages/Login";

export default () => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/home" element={<PrivateRoutes />} >
                <Route path="/home" element={<Home />} />
            </Route>

        </Routes>
    )
}
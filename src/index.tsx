import Home from "./pages/Home";
import PostCSS from "./pages/post";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/global.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PostCSS />}>
                {/* <Route index element={<Home />} /> */}
            </Route>
            <Route path="/home" element={<Home />} />
        </Routes>
    </BrowserRouter>,
);

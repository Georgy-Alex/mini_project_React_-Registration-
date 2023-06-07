import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import PersData from "./PersData";
import SchoolUser from "./SchoolUser";
function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="data" element={<PersData />} />
                <Route path="school" element={<SchoolUser />} />
            </Routes>
        </div>
    );
};

export default Main
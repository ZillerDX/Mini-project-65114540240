import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <div className="home">
                <header className="bg-green-500 text-white p-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Home Garden Tracking</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a 
                                    href="/register" 
                                    className="text-white hover:text-gray-300 transition"
                                >
                                    ลงทะเบียน
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/login" 
                                    className="text-white hover:text-gray-300 transition"
                                >
                                    เข้าสู่ระบบ
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="p-4">
                    <Routes>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/"
                            element={
                                <div>
                                    <p className="text-lg">
                                        ยินดีต้อนรับสู่ระบบบันทึกและติดตามการปลูกผักสวนครัวของคุณ!
                                    </p>
                                    <p>
                                        คุณสามารถจัดการข้อมูลพืช ประวัติการดูแล และติดตามตารางการรดน้ำหรือใส่ปุ๋ยได้จากแอปนี้
                                    </p>
                                </div>
                            }
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;

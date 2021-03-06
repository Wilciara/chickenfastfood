import React from "react";


import { MainContainer } from "./components";
import { CreateContainer } from "./components";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";


const App = () => {
    return (
       
        <div className="w-screen h-auto flex flex-col bg-primary">
            <Header />
            <main className="mt-14 md:mt-20 px-16 py-4 w-full bg-white">
                <Routes>
                    <Route path="/" element={<MainContainer />} />
                    <Route path="/createItem" element={<CreateContainer />} />               
                </Routes>            
            </main>
        </div>
    );
};

export default App;
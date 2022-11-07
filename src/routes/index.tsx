import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../screens/Dashboard/Dashboard";
import Header from "../components/Layout/Header/Header";
import Project from "../screens/Project/Project";
import CreateCollection from "../screens/CreateCollection/CreateCollection";
import AddBlockchain from "../screens/AddBlockchain/AddBlockchain";
import Mint from "../screens/Mint/Mint";
import TokenCollection from "../screens/TokenCollection/TokenCollection";

const AppMain = () => {
    return (
        <>
            <Suspense fallback={<span>loading</span>}>
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/create" element={<CreateCollection />} />
                    <Route path="/blockchain" element={<AddBlockchain />} />
                    <Route path="/Mint" element={<Mint />} />
                    <Route path="/tokencollection" element={<TokenCollection />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default AppMain;

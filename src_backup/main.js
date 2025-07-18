import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import RoleRouter from './components/RoleRouter';
import CoolBeansShop from './components/CoolBeansShop';
import MythicNodeConsole from './components/MythicNodeConsole';
import XPLevelPath from './components/XPLevelPath';
import Wallet from './components/Wallet';
import NodeTempleAccess from './components/NodeTempleAccess';
import JobQueueBoard from './components/JobQueueBoard';
import ChaosButton from './components/ChaosButton';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(Router, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(MainLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(RoleRouter, {}) }), _jsx(Route, { path: "shop", element: _jsx(CoolBeansShop, {}) }), _jsx(Route, { path: "wallet", element: _jsx(Wallet, {}) }), _jsx(Route, { path: "xp", element: _jsx(XPLevelPath, {}) }), _jsx(Route, { path: "nodes", element: _jsx(NodeTempleAccess, {}) }), _jsx(Route, { path: "queue", element: _jsx(JobQueueBoard, {}) }), _jsx(Route, { path: "chaos", element: _jsx(ChaosButton, {}) }), _jsx(Route, { path: "mythic", element: _jsx(MythicNodeConsole, {}) })] }) }) }) }));

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/JobQueueBoard.tsx
import { useEffect, useState } from 'react';
import { runJob } from '../jobEngine';
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';
export default function JobQueueBoard() {
    // pull in all three actions from your store
    const { gainXP, gainBeans, addVault } = usePlayerStore((s) => ({
        gainXP: s.gainXP,
        gainBeans: s.gainBeans,
        addVault: s.addVault,
    }));
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const interval = setInterval(() => {
            const id = `job-${Date.now()}`;
            runJob(id, 1 + Math.floor(Math.random() * 3), 3, ({ jobId, payout }) => {
                gainXP(payout);
                gainBeans(payout * 2); // example: 2 CB per XP
                addVault(payout * 0.1); // example: $0.10 per XP
                setJobs((prev) => [...prev, `${jobId} (+${payout} XP)`]);
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [gainXP, gainBeans, addVault]);
    return (_jsxs("div", { style: { padding: '2rem' }, children: [_jsx("h2", { children: "\uD83D\uDCCB Job Queue Board" }), _jsx("p", { children: "A new job fires automatically every 5 seconds." }), _jsx("ul", { children: jobs.map((j, i) => (_jsxs("li", { children: ["\u2699\uFE0F ", j] }, i))) }), _jsx("br", {}), _jsx(Link, { to: "/", children: "\u2190 Dashboard" })] }));
}

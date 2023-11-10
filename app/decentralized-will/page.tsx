"use client";

import Wrapper from "@/components/decentralized-will/Wrapper";
import Image from "next/image";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { shuffle } from "lodash";

const initialLeaderboard = [
    {
        name: "Sandra",
        visits: 420,
        image: "https://images.unsplash.com/photo-1613730317814-1cede28e0151?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGhlYWRzaG90c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Harrison",
        visits: 420,
        image: "https://images.unsplash.com/photo-1606459431839-90b942dc3754?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGhlYWRzaG90c3xlbnwwfHwwfHx8MA%3D%3D   ",
    },
];

const font = localFont({ src: "./turismo.ttf" });

export default function DecentralizedWill() {
    const [isTapped, setIsTapped] = useState(false);
    const progress = useMotionValue(0);
    const [isVerified, setIsVerified] = useState(false);
    const [leaderboard, setLeaderboard] = useState(initialLeaderboard);

    useEffect(() => {
        if (isTapped) {
            setTimeout(() => {
                const interval = setInterval(() => {
                    progress.set(progress.get() + 1);
                    if (progress.get() >= 40) {
                        clearInterval(interval);
                        setIsVerified(true);
                        setTimeout(
                            () =>
                                setLeaderboard(
                                    leaderboard.map((user) =>
                                        user.name === "Harrison"
                                            ? { ...user, visits: 421 }
                                            : user
                                    )
                                ),
                            500
                        );
                    }
                }, 0.5);
            }, 200);
        }
    }, [isTapped]);

    return (
        <div className="h-screen font-inter max-w-[500px] overflow-hidden mx-auto relative p-4 bg-[url('/decentralized-will/bg.png')] bg-cover bg-center">
            <header className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <div className="h-[2px] rounded-full w-7 bg-black" />
                    <div className="h-[2px] rounded-full w-4 bg-black" />
                </div>
                <div className={`font-bold ${font.className}`}>POAP</div>
                <div className="ring-1 ring-white rounded-full bg-gray-100 overflow-hidden relative w-8 h-8">
                    <Image
                        src="https://images.unsplash.com/photo-1606459431839-90b942dc3754?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGhlYWRzaG90c3xlbnwwfHwwfHx8MA%3D%3D"
                        fill
                        alt=""
                        className="object-cover object-top"
                    />
                </div>
            </header>
            <div className="rounded-2xl shadow-md mt-6 bg-white">
                <div className="p-6 flex flex-col items-center gap-6 text-center">
                    <div>
                        <div className="font-bold text-gray-800">
                            Grandma's Will Challenge
                        </div>
                        <div className="text-gray-400 text-xs">
                            Visit grandma to increase your inheritance
                        </div>
                    </div>
                    <div className="relative">
                        <Wrapper progress={progress} />
                        <div className="absolute z-10 left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                            <div
                                onClick={() => setIsTapped(true)}
                                className="shadow-lg border transition duration-200 active:scale-90 border-gray-100 rounded-full flex items-center justify-center flex-col w-40 h-40 bg-white"
                            >
                                <Image
                                    src="/decentralized-will/icon.png"
                                    width={50}
                                    height={50}
                                    className="w-6 h-6 mb-1"
                                    alt=""
                                />
                                <div
                                    className={`${font.className} uppercase text-2xl`}
                                >
                                    Tap
                                </div>
                                <div className="text-xs text-gray-400">
                                    to verify visit
                                </div>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isVerified && (
                                <motion.div
                                    initial={{ opacity: 1, scale: 1 }}
                                    animate={{ opacity: 0, scale: 5 }}
                                    transition={{ duration: 0.75 }}
                                    className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center"
                                >
                                    <Image
                                        className="w-40 h-40"
                                        src="/decentralized-will/orb.png"
                                        width={400}
                                        height={400}
                                        alt=""
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="border-t p-6 flex justify-between">
                    <div className="flex text-gray-500 font-semibold uppercase text-xs gap-2 items-center">
                        <UserPlusIcon className="w-5 h-5" />
                        Total visits
                    </div>
                    <div className="font-medium text-sm">
                        {leaderboard.find((l) => l.name === "Harrison")?.visits}
                    </div>
                </div>
            </div>
            <div className="p-4 my-4">
                <div className="text-sm uppercase font-semibold text-gray-500">
                    Leaderboard
                </div>
                <div className="flex flex-col my-3 gap-3">
                    {leaderboard
                        .sort((a, b) => b.visits - a.visits)
                        .map((p) => (
                            <motion.li
                                layout
                                key={p.name}
                                transition={{
                                    type: "spring",
                                    damping: 25,
                                    stiffness: 120,
                                }}
                                className="flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="ring-1 ring-white rounded-full bg-gray-100 overflow-hidden relative w-7 h-7">
                                        <Image
                                            src={p.image}
                                            fill
                                            alt=""
                                            className="object-cover object-center"
                                        />
                                    </div>
                                    <div
                                        className={`${font.className} text-xs uppercase`}
                                    >
                                        {p.name}
                                    </div>
                                </div>
                                <div className="flex text-sm font-medium items-center gap-1 text-gray-500">
                                    {p.visits}
                                </div>
                            </motion.li>
                        ))}
                </div>
            </div>
        </div>
    );
}

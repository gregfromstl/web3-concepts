"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SuccessOverlay from "@/components/mint-highlight/SuccessOverlay";
import { Airdrop } from "@/types/sports-viewer-rewards";
import Spinner from "@/components/sports-viewer-rewards/Spinner";

export default function SportsViewerRewards() {
    const [playing, setPlaying] = useState(true);
    const [airdrop, setAirdrop] = useState<Airdrop | null>(null);
    const [timer, setTimer] = useState<undefined | number>();
    const videoRef = useRef<any>(null);

    useEffect(() => {
        let countdownInterval: NodeJS.Timeout;
        if (timer) {
            countdownInterval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer && prevTimer > 0) {
                        return prevTimer - 1;
                    } else {
                        clearInterval(countdownInterval);
                        return 0;
                    }
                });
            }, 1000);
        }
        return () => {
            clearInterval(countdownInterval);
        };
    }, [timer]);

    useEffect(() => {
        if (playing) {
            videoRef.current.currentTime = 5;
            videoRef.current.play();
            setTimeout(() => {
                setAirdrop({
                    status: "pending",
                    amount: 10,
                    asset: "$GSW",
                });
                setTimeout(() => {
                    setAirdrop({
                        status: "claimable",
                        amount: 10,
                        asset: "$GSW",
                    });
                    setTimer(10);
                }, 4000);
            }, 4000);
        } else {
            videoRef.current.pause();
        }
    }, [playing]);

    useEffect(() => {
        if (airdrop !== null && airdrop.status === "claiming") {
            setTimeout(() => {
                setAirdrop({ status: "claimed", amount: 10, asset: "$GSW" });
            }, 2000);
        }

        if (airdrop !== null && airdrop.status === "claimed") {
            setTimeout(() => {
                setAirdrop(null);
            }, 2000);
        }
    }, [airdrop]);

    return (
        <main className="h-screen bg-gray-950 flex flex-col w-screen overflow-hidden mx-auto relative">
            <video
                ref={videoRef}
                className="h-full w-full object-cover"
                webkit-playsinline="true"
                playsInline
                preload="auto"
                muted
            >
                <source
                    src="/sports-viewer-rewards/broadcast.mp4"
                    type="video/mp4"
                />
            </video>
            <AnimatePresence>
                {airdrop !== null && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0,
                            y: -100,
                        }}
                        onClick={() => {
                            if (airdrop.status === "claimable") {
                                setAirdrop({ ...airdrop, status: "claiming" });
                            }
                        }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: -100 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        key="toast"
                        className="cursor-pointer text-white shadow-xl flex fixed top-6 text-center z-10 text-base left-0 right-0 mx-auto w-[350px] rounded-xl overflow-hidden bg-gray-900 border border-white/50"
                    >
                        <Image
                            src="/sports-viewer-rewards/rickbarry.avif"
                            width={40}
                            height={40}
                            alt=""
                            className={`h-16 w-auto px-2 pt-2 ${
                                airdrop.status === "pending"
                                    ? "animate-pulse"
                                    : ""
                            }`}
                        />

                        <div className="w-full relative flex items-center">
                            <AnimatePresence>
                                {airdrop.status === "pending" && (
                                    <motion.div
                                        key="pending"
                                        initial={{ opacity: 0, translateY: 10 }}
                                        animate={{
                                            opacity: 1,
                                            translateY: 0,
                                            transition: { delay: 0 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            translateY: 10,
                                        }}
                                        className="pr-2 py-2 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                                    >
                                        Earn {airdrop.amount} {airdrop.asset} if
                                        Rick Barry makes a free throw
                                    </motion.div>
                                )}
                                {airdrop.status === "claiming" && (
                                    <motion.div
                                        key="claiming"
                                        initial={{ opacity: 0, translateY: 10 }}
                                        animate={{
                                            opacity: 1,
                                            translateY: 0,
                                            transition: { delay: 0.4 },
                                        }}
                                        exit={{ opacity: 0, translateY: 10 }}
                                        className="pr-2 py-2 gap-2 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                                    >
                                        <Spinner />
                                        Claiming...
                                    </motion.div>
                                )}
                                {airdrop.status === "claimable" && (
                                    <motion.div
                                        key="claimable"
                                        initial={{ opacity: 0, translateY: 10 }}
                                        animate={{
                                            opacity: 1,
                                            translateY: 0,
                                            transition: { delay: 0.4 },
                                        }}
                                        exit={{ opacity: 0, translateY: 10 }}
                                        className="pr-2 py-2 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                                    >
                                        <div>
                                            {timer} seconds to claim{" "}
                                            {airdrop.amount} {airdrop.asset} to{" "}
                                            <b>gregfromstl.eth</b>
                                        </div>
                                    </motion.div>
                                )}
                                {airdrop.status === "claimed" && (
                                    <motion.div
                                        key="claimed"
                                        initial={{ opacity: 0, translateY: 10 }}
                                        animate={{
                                            opacity: 1,
                                            translateY: 0,
                                            transition: { delay: 0.4 },
                                        }}
                                        exit={{ opacity: 0, translateY: 10 }}
                                        className="pr-2 py-2 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                                    >
                                        <div>
                                            {airdrop.amount} {airdrop.asset}{" "}
                                            claimed to <b>gregfromstl.eth</b>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-end">
                <div className="w-full flex text-white justify-between z-10 items-center bg-gray-800 space-x-4 p-4">
                    <div className="flex gap-2 items-center">
                        <Image
                            alt=""
                            className="rounded-full"
                            src="https://pbs.twimg.com/profile_images/1646330655784017921/xBrfH2y2_400x400.jpg"
                            width={40}
                            height={40}
                        />
                        gregfromstl.eth
                    </div>
                    <button
                        onClick={() => setPlaying(!playing)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        {playing ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </main>
    );
}

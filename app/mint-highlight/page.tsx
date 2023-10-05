"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Spinner from "@/components/mint-highlight/Spinner";
import SuccessOverlay from "@/components/mint-highlight/SuccessOverlay";

export default function MintHighlight() {
    const [playing, setPlaying] = useState(false);
    const [showPane, setShowPane] = useState(false);
    const videoRef = useRef<any>(null);
    const [mintsRemaining, setMintsRemaining] = useState(5);
    const [isMinting, setIsMinting] = useState(false);
    const [secondsRemaining, setSecondsRemaining] = useState(5);
    const [isMinted, setIsMinted] = useState(false);

    useEffect(() => {
        let countdownInterval: NodeJS.Timeout;
        if (isMinting) {
            countdownInterval = setInterval(() => {
                setSecondsRemaining((prevSeconds) => {
                    if (prevSeconds > 1) {
                        return prevSeconds - 1;
                    } else {
                        setIsMinted(true);
                        setIsMinting(false);
                        return 0;
                    }
                });
            }, 1000);
        }
        return () => {
            clearInterval(countdownInterval);
        };
    }, [isMinting]);

    useEffect(() => {
        if (playing) {
            videoRef.current.play();
            setTimeout(() => {
                setShowPane(true);
            }, 7000);
        } else {
            videoRef.current.pause();
        }
    }, [playing]);

    useEffect(() => {
        if (showPane) {
            setTimeout(() => {
                setMintsRemaining(4);
            }, 2000);
            setTimeout(() => {
                setMintsRemaining(3);
            }, 3000);
        }
    }, [showPane]);

    return (
        <main className="h-screen flex flex-col w-screen mx-auto relative">
            <video ref={videoRef} className="h-full w-full object-cover">
                <source src="/mint-highlight/nba clip.mp4" type="video/mp4" />
            </video>
            <div className="absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-end">
                <div className="flex justify-end p-4">
                    <AnimatePresence>
                        {showPane && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0,
                                    y: 100,
                                    x: 100,
                                }}
                                onClick={() => setIsMinting(true)}
                                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                                exit={{ opacity: 0, scale: 0, y: 100, x: 100 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                key="mint-pane"
                                className="cursor-pointer z-10 relative rounded-xl overflow-hidden p-2 bg-black bg-opacity-50 border"
                            >
                                <video
                                    className="h-[200px] w-[350px] object-cover rounded-lg"
                                    muted
                                    loop
                                    autoPlay
                                >
                                    <source
                                        src="/mint-highlight/highlight.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                                <AnimatePresence>
                                    {!isMinting && isMinted && (
                                        <SuccessOverlay
                                            close={() => setShowPane(false)}
                                        />
                                    )}
                                    {isMinting && (
                                        <motion.div
                                            initial={{
                                                translateY: 50,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                translateY: 0,
                                                opacity: 1,
                                            }}
                                            exit={{
                                                translateY: 50,
                                                opacity: 0,
                                            }}
                                            key="minting"
                                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t group-hover:opacity-0 transition duration-200 from-black to-transparent text-white text-xs p-4"
                                        >
                                            <div className="flex font-bold text-base items-center justify-between">
                                                <span className="flex gap-2 items-center">
                                                    <Spinner /> Minting
                                                </span>
                                                <span>
                                                    {secondsRemaining} sec...
                                                </span>
                                            </div>
                                        </motion.div>
                                    )}

                                    {!isMinting && !isMinted && (
                                        <motion.div
                                            key="mint-this-moment"
                                            initial={{
                                                translateY: 50,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                translateY: 0,
                                                opacity: 1,
                                            }}
                                            exit={{
                                                translateY: 50,
                                                opacity: 0,
                                            }}
                                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t transition duration-200 from-black to-transparent text-white text-xs p-4"
                                        >
                                            <div className="flex font-bold text-base justify-between">
                                                <span>Mint this moment</span>
                                                <span>
                                                    {mintsRemaining} left
                                                </span>
                                            </div>
                                        </motion.div>
                                    )}

                                    {!isMinting && !isMinted && (
                                        <motion.div
                                            key="click-to-mint"
                                            initial={{
                                                opacity: 0,
                                            }}
                                            animate={{
                                                opacity: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                            }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute bottom-0 left-0 right-0 top-0 flex items-center transition duration-200 justify-center bg-gradient-to-t opacity-0 from-black to-transparent text-white text-lg font-bold p-4"
                                        >
                                            <span>Click to mint</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

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
                    <div className="flex items-center space-x-2">
                        <div
                            className={`h-3 w-3 rounded-full ${
                                playing ? "bg-red-500" : "bg-gray-500"
                            }`}
                        ></div>
                        <p>{playing ? "Live" : "Offline"}</p>
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

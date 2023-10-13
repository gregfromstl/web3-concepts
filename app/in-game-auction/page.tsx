"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AuctionPanel from "@/components/in-game-auction/AuctionPanel";

export default function InGameAuction() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef<any>(null);
    const [popupOpen, setPopupOpen] = useState(false);
    const [auctionPanelOpen, setAuctionPanelOpen] = useState(false);

    useEffect(() => {
        if (playing) {
            videoRef.current.play();
            setTimeout(() => {
                setPopupOpen(true);
            }, 3500);
        } else {
            videoRef.current.pause();
        }
    }, [playing]);

    return (
        <main className="h-screen flex flex-col w-screen overflow-hidden mx-auto relative">
            <video ref={videoRef} className="h-full w-full object-cover">
                <source src="/in-game-auction/game-clip.mp4" type="video/mp4" />
            </video>
            <AnimatePresence>
                {auctionPanelOpen && (
                    <AuctionPanel clip="/in-game-auction/highlight.mp4" />
                )}
            </AnimatePresence>
            <div className="absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-end">
                <div className="flex justify-end p-4">
                    <AnimatePresence>
                        {popupOpen && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0,
                                    y: 100,
                                }}
                                onClick={() => {
                                    setPopupOpen(false);
                                    setAuctionPanelOpen(true);
                                }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0, y: 100 }}
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
                                        src="/in-game-auction/highlight.mp4"
                                        type="video/mp4"
                                    />
                                </video>

                                <div className="absolute text-white bottom-0 top-0 text-center flex items-center flex-col justify-center left-0 right-0 bg-gradient-to-t transition duration-200 from-black to-transparent text-xs p-4">
                                    <motion.span
                                        key="what-a-goal"
                                        initial={{
                                            translateY: 10,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            translateY: 0,
                                            opacity: 1,
                                            transition: {
                                                delay: 0.3,
                                            },
                                        }}
                                        exit={{
                                            translateY: 10,
                                            opacity: 0,
                                        }}
                                        className="font-bold font-clash text-xl"
                                    >
                                        What a goal! Want the puck?
                                    </motion.span>
                                    <motion.span
                                        key="auction-live"
                                        initial={{
                                            translateY: 10,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            translateY: 0,
                                            opacity: 1,
                                            transition: {
                                                delay: 0.4,
                                            },
                                        }}
                                        exit={{
                                            translateY: 10,
                                            opacity: 0,
                                        }}
                                        className="animate-pulse font-medium mt-2 text-base font-gray-200"
                                    >
                                        Auction live now
                                    </motion.span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="w-full flex text-white justify-between z-10 items-center bg-gray-800 border-t-2 border-gray-600 space-x-4 p-4">
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

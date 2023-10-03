"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function BuyModal({
    isOpen,
    buy,
}: {
    isOpen: boolean;
    buy: () => void;
}) {
    const [buyTeamOpen, setBuyTeamOpen] = useState(false);
    const [buying, setBuying] = useState(false);

    const startBuy = () => {
        setBuying(true);
        setTimeout(() => {
            setBuying(false);
            buy();
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full left-0 z-20 right-0 top-0 p-8 bottom-0 flex items-center justify-center absolute bg-opacity-25 bg-black"
                />
            )}
            {isOpen && (
                <motion.div
                    key="modal"
                    initial={{ scale: 0, opacity: 0, translateY: -200 }}
                    animate={{ scale: 1, opacity: 1, translateY: 0 }}
                    exit={{ scale: 0, opacity: 0, translateY: -200 }}
                    className="w-full h-full left-0 z-20 right-0 top-0 p-4 bottom-0 flex items-center justify-center absolute"
                >
                    <div className="rounded-xl overflow-hidden bg-white w-full">
                        <div className="flex flex-col p-6 w-full">
                            <div className="font-medium text-lg text-center">
                                Trade Keys
                            </div>
                            <div
                                onClick={() => setBuyTeamOpen(false)}
                                className="flex items-center my-5 justify-between"
                            >
                                <div className="flex gap-2 items-center">
                                    <Image
                                        src="https://pbs.twimg.com/profile_images/1707496920300548096/bGHT-v82_400x400.jpg"
                                        alt=""
                                        className="w-10 h-10 rounded-full border"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <div className="font-medium text-lg">
                                            Omnia
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            You own 1 key
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="text-right text-lg text-[#00BDFF] font-medium">
                                        0.02025 ETH
                                    </div>
                                    <div className="flex gap-1 items-center text-sm text-gray-400">
                                        Key Price
                                        <QuestionMarkCircleIcon className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                            <AnimatePresence>
                                {!buyTeamOpen && (
                                    <motion.div
                                        key="omnia-buttons"
                                        initial={{ height: "auto" }}
                                        animate={{ height: "auto" }}
                                        exit={{ height: 0 }}
                                        className="flex gap-5 flex-col overflow-hidden"
                                    >
                                        <button className="rounded-full bg-[#00BDFF] text-white w-full py-3 text-lg">
                                            Buy a key
                                        </button>
                                        <button className="rounded-full bg-[#FF6DA9] text-white w-full py-3 text-lg">
                                            Sell a key
                                        </button>
                                        <div className="text-center text-gray-400">
                                            Sell Price: 0.0180625 ETH
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div
                            onClick={() => setBuyTeamOpen(true)}
                            className="flex flex-col bg-gray-50 p-6"
                        >
                            <div className="flex justify-between items-center w-full">
                                <div>
                                    <div className="text-xl text-[#00BDFF] font-medium">
                                        0.71 ETH
                                    </div>

                                    <div className="text-gray-500 text-sm">
                                        Buy the PRTC team
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="flex -space-x-6">
                                        <Image
                                            src="https://pbs.twimg.com/profile_images/1567177850322653184/IJIhf8LF_400x400.jpg"
                                            width={40}
                                            height={40}
                                            alt="PRTC"
                                            className="w-10 h-auto rounded-full border"
                                        />
                                        <Image
                                            src="https://pbs.twimg.com/profile_images/1682117940714283008/Jw5R2B4q_400x400.jpg"
                                            width={40}
                                            height={40}
                                            alt="PRTC"
                                            className="w-10 h-auto rounded-full border"
                                        />
                                        <Image
                                            src="https://pbs.twimg.com/profile_images/1590547357074063361/xVZqEFu6_400x400.jpg"
                                            width={40}
                                            height={40}
                                            alt="PRTC"
                                            className="w-10 h-auto rounded-full border"
                                        />
                                        <Image
                                            src="https://pbs.twimg.com/profile_images/1706673392315928577/ZNnEh6Be_400x400.jpg"
                                            width={40}
                                            height={40}
                                            alt="PRTC"
                                            className="w-10 h-auto rounded-full border"
                                        />
                                        <Image
                                            src="/friend-tech-follow-more/prtc.svg"
                                            width={40}
                                            height={40}
                                            alt="PRTC"
                                            className="w-10 h-auto rounded-full border"
                                        />
                                    </div>
                                </div>
                            </div>
                            <AnimatePresence>
                                {buyTeamOpen && (
                                    <motion.div
                                        key="team-buttons"
                                        initial={{ height: 0, marginTop: 0 }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 20,
                                        }}
                                        exit={{ height: 0, marginTop: 0 }}
                                        className="flex gap-5 flex-col overflow-hidden"
                                    >
                                        <button
                                            onClick={startBuy}
                                            className={`rounded-full  justify-center items-center flex gap-2 bg-[#00BDFF] text-white w-full py-3 text-lg ${
                                                buying ? "opacity-50" : ""
                                            }`}
                                        >
                                            {buying ? (
                                                <>
                                                    <Spinner /> Buying 8 keys...
                                                </>
                                            ) : (
                                                "Buy all 8 keys"
                                            )}
                                        </button>
                                        <div className="text-sm text-center text-gray-400">
                                            Purchase all PRTC team members'
                                            keys.
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

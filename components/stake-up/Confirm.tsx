"use client";
import { BellAlertIcon, BellSnoozeIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Confirm({
    close,
    onAccept,
    open,
}: {
    close: () => void;
    onAccept: () => void;
    open: boolean;
}) {
    const [staking, setStaking] = useState(false);

    const stake = () => {
        setStaking(true);
        setTimeout(() => {
            onAccept();
            setStaking(false);
        }, 2100);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    key="confirm-overlay"
                    className="w-screen overflow-hidden absolute max-h-screen max-w-[500px] top-0 left-0 flex items-end right-0 bottom-0 bg-opacity-30 z-20 bg-black"
                />
            )}
            {open && (
                <motion.div
                    initial={{ y: 1000 }}
                    animate={{ y: 50 }}
                    exit={{ y: 1000 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    key="confirm-panel"
                    className="w-screen overflow-hidden absolute max-h-screen max-w-[500px] top-0 left-0 flex items-end right-0 bottom-0 z-30"
                >
                    <div className="bg-white w-full shadow-2xl rounded-t-[2.8rem] border flex flex-col overflow-hidden items-center justify-start text-center via-transparent">
                        <div className="flex flex-col relative gap-6 items-center w-full text-gray-800 p-8 pb-16">
                            <BellSnoozeIcon className="drop-shadow-2xl w-16 h-16 text-[#4285F6]" />
                            <div>
                                <div className="text-2xl">
                                    Stake ETH for this alarm
                                </div>
                                <div className="font-light text-lg">
                                    If you hit snooze, you lose it.
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image
                                    src="/tinder-stake/ethereum.svg"
                                    width={50}
                                    height={50}
                                    alt=""
                                    className={`w-9 h-9`}
                                />
                                <div className="text-5xl text-gray-800">
                                    0.01
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-2 mt-4">
                                <motion.button
                                    onClick={stake}
                                    animate={{
                                        scale: staking ? [1, 1.05, 1] : 1,
                                    }}
                                    transition={{
                                        duration: 2,
                                        times: [0, 0.99, 1],
                                    }}
                                    className="text-white overflow-hidden text-xl uppercase relative font-bold bg-[#4285F6] rounded-full w-full py-4 tracking-wide"
                                >
                                    <div className="relative z-10">Stake</div>
                                    {staking && (
                                        <motion.div
                                            initial={{ x: -300 }}
                                            animate={{ x: 0 }}
                                            transition={{
                                                type: "linear",
                                                duration: 2,
                                            }}
                                            className="bg-black bg-opacity-10 absolute top-0 left-0 right-0 bottom-0"
                                        />
                                    )}
                                </motion.button>
                                <button
                                    onClick={() => close()}
                                    className="opacity-30 font-semibold uppercase py-4 text-xl w-full"
                                >
                                    No thanks
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

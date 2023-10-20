"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Modal({
    close,
    onAccept,
}: {
    close: () => void;
    onAccept: () => void;
}) {
    const [staking, setStaking] = useState(false);

    const stake = () => {
        setStaking(true);
        setTimeout(() => {
            onAccept();
        }, 3100);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            key="confirm-overlay"
            className="w-screen overflow-hidden max-h-screen mx-auto max-w-[500px] top-0 px-6 left-0 flex items-center right-0 bottom-0 bg-opacity-30 z-30 bg-black fixed"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                key="confirm-panel"
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-white w-full relative rounded-2xl font-sans flex flex-col overflow-hidden items-center justify-center text-center"
            >
                <div className="flex flex-col relative gap-6 items-center w-full text-gray-800 p-6">
                    <div className="relative">
                        <Image
                            src="/tinder-min-eth/btc.png"
                            width={100}
                            height={100}
                            alt=""
                        />
                        <div className="w-12 rounded-full overflow-hidden bg-white p-1 h-12 absolute -right-3 -bottom-3">
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                                <Image
                                    fill
                                    src="/tinder-min-eth/saylor.jpeg"
                                    className="object-cover object-center"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold">
                            Michael has set a minimum requirement of 42 BTC
                        </div>
                        <div className="font-light max-w-xs mx-auto mt-2 text-lg">
                            Michael disapproves of your bags. What do you want
                            to do?
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <button
                            onClick={stake}
                            className="overflow-hidden active:scale-95 transition duration-200 relative bg-gradient-to-bl from-[#EC795D] to-[#E84675] text-white rounded-full w-full py-3 font-bold text-lg tracking-wide"
                        >
                            <div className="relative z-10">
                                Buy more Bitcoin
                            </div>
                            {staking && (
                                <motion.div
                                    initial={{ x: -400 }}
                                    animate={{ x: 0 }}
                                    transition={{
                                        ease: "easeOut",
                                        duration: 3,
                                    }}
                                    className="bg-black bg-opacity-10 absolute top-0 left-0 right-0 bottom-0"
                                />
                            )}
                        </button>
                        <button
                            onClick={() => close()}
                            className="rounded-full font-bold text-lg bg-gray-100 text-[#E84675] py-3 w-full"
                        >
                            Accept and move on
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

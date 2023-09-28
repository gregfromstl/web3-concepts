"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Stake({
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
            className="w-screen overflow-hidden max-h-screen max-w-[500px] top-0 px-6 left-0 flex items-end right-0 bottom-0 bg-opacity-30 z-30 bg-black fixed"
        >
            <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 50 }}
                exit={{ y: 1000 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-white w-full rounded-t-2xl flex flex-col overflow-hidden items-center justify-start text-center via-transparent"
            >
                <div className="flex flex-col relative gap-6 items-center w-full text-gray-800 p-8 pb-16">
                    <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#27AAE4] via-[#27AAE4]/5 to-transparent" />
                    <Image
                        src="/tinder-stake/super-like-icon.png"
                        width={50}
                        height={50}
                        alt=""
                        className="drop-shadow-2xl w-16 h-16 border rounded-full"
                    />
                    <div>
                        <div className="text-2xl">Stake ETH to Super Like</div>
                        <div className="font-light text-lg">
                            If he likes you back, he keeps it.
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image
                            src="/tinder-stake/ethereum.svg"
                            width={50}
                            height={50}
                            alt=""
                            className={`w-9 h-9 ${
                                staking ? "animate-bounce" : ""
                            }`}
                        />
                        <div className="text-5xl text-gray-800">0.01</div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <motion.button
                            onClick={stake}
                            animate={{ scale: staking ? [1, 1.15, 1] : 1 }}
                            transition={{ duration: 3, times: [0, 0.99, 1] }}
                            className="text-white overflow-hidden uppercase relative bg-gradient-to-b from-[#3368D8] to-[#4F95F1] rounded-full w-full py-3 font-medium tracking-wide"
                        >
                            <div className="relative z-10">Stake</div>
                            {staking && (
                                <motion.div
                                    initial={{ x: -300 }}
                                    animate={{ x: 0 }}
                                    transition={{ type: "linear", duration: 3 }}
                                    className="bg-black bg-opacity-10 absolute top-0 left-0 right-0 bottom-0"
                                />
                            )}
                        </motion.button>
                        <button
                            onClick={() => close()}
                            className="opacity-30 font-semibold uppercase py-3 w-full"
                        >
                            No thanks
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

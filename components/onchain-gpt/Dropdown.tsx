"use client";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function Badge({
    image,
    text,
    loadedText,
    loadingTime,
}: {
    image: string;
    text: string;
    loadedText?: string;
    loadingTime?: number;
}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, loadingTime || 1000);
    }, []);

    return (
        <div
            className={`flex gap-2 border-[#9B9AA0] border-[1px] border-opacity-50 p-1 text-white rounded-full items-center bg-black ${
                loading ? "animate-pulse" : ""
            }`}
        >
            <img src={image} className="rounded-full w-6 h-6" />
            <div className="text-xs flex gap-1">
                <span>{text}</span>
                {!loading && loadedText && (
                    <motion.div
                        key={`loadedText-${text}`}
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        className="overflow-hidden whitespace-nowrap"
                    >
                        {loadedText}
                    </motion.div>
                )}
            </div>
            <XMarkIcon className="w-4 mr-1 h-4 text-[#9B9AA0]" />
        </div>
    );
}

export default function Dropdown({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}) {
    const [isConnected, setIsConnected] = useState(false);

    return (
        <AnimatePresence>
            {(isOpen || isConnected) && (
                <motion.div
                    key="dropdown"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className={`bg-[#1E1E1E] overflow-hidden absolute top-0 right-0 left-0 rounded-xl flex flex-col`}
                >
                    <div className="flex gap-3 items-start m-5">
                        <div
                            className={`p-2 rounded-lg ${
                                isConnected
                                    ? "bg-[#A070FE] text-white"
                                    : "bg-[#1E1E1E] text-[#9B9AA0]"
                            }`}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.5 12H14.51M1 3V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5L3 5C1.89543 5 1 4.10457 1 3ZM1 3C1 1.89543 1.89543 1 3 1H15M15 12C15 12.2761 14.7761 12.5 14.5 12.5C14.2239 12.5 14 12.2761 14 12C14 11.7239 14.2239 11.5 14.5 11.5C14.7761 11.5 15 11.7239 15 12Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex w-full py-1 items-center justify-between gap-2">
                                <div className="font-semibold text-lg">
                                    gregfromstl.eth
                                </div>
                                <div
                                    onClick={() => setIsConnected(!isConnected)}
                                    className={`transition duration-200 rounded-full text-xs py-1 w-24 flex justify-center font-medium ${
                                        isConnected
                                            ? "text-[#9B9AA0] bg-[#333333]"
                                            : "bg-[#A070FE] font-white"
                                    }`}
                                >
                                    {isConnected ? "Disconnect" : "Connect"}
                                </div>
                            </div>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        key="description"
                                        initial={{
                                            opacity: 0,
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            height: "auto",
                                            marginTop: 8,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        transition={{ delay: 0.5 }}
                                        className={`text-[#9B9AA0] overflow-hidden text-sm`}
                                    >
                                        ChatGPT will tailor your responses based
                                        on your onchain history.
                                    </motion.div>
                                )}
                                {isOpen && isConnected && (
                                    <motion.div
                                        key="apps"
                                        initial={{
                                            opacity: 0,
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            height: "auto",
                                            marginTop: 16,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className="flex flex-wrap gap-x-1.5 gap-y-3"
                                    >
                                        <Badge
                                            image="/onchain-gpt/lens.jpg"
                                            text="Lens"
                                            loadingTime={1000}
                                        />
                                        <Badge
                                            image="/onchain-gpt/mirror.jpeg"
                                            text="Articles"
                                            loadedText=" • 2"
                                            loadingTime={2000}
                                        />
                                        <Badge
                                            image="/onchain-gpt/poap.jpg"
                                            text="POAPs"
                                            loadedText=" • 42"
                                            loadingTime={1500}
                                        />
                                        <Badge
                                            image="/onchain-gpt/farcaster.jpg"
                                            text="Farcaster"
                                            loadingTime={2500}
                                        />
                                        <Badge
                                            image="/onchain-gpt/eth.jpg"
                                            text="NFTs"
                                            loadedText=" • 42"
                                            loadingTime={3000}
                                        />
                                        <Badge
                                            image="/onchain-gpt/eth.jpg"
                                            text="Txns"
                                            loadedText=" • 1,111"
                                            loadingTime={500}
                                        />
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

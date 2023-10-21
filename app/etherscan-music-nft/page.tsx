"use client";
import Image from "next/image";
import {
    Bars3Icon,
    CheckBadgeIcon,
    MagnifyingGlassIcon,
    UserCircleIcon,
    PlayIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion";
import { MdPause } from "react-icons/md";

export default function EtherscanMusicNft() {
    const [connectingWallet, setConnectingWallet] = useState(false);
    const [mediaPlaying, setMediaPlaying] = useState(false);
    const progress = useMotionValue(0);
    const fill = useTransform(progress, [0, 100], [0, 1]);

    useEffect(() => {
        let progressInterval: NodeJS.Timeout;
        if (mediaPlaying) {
            progressInterval = setInterval(() => {
                progress.set(progress.get() + 1);
            }, 500);
        }
        return () => {
            clearInterval(progressInterval);
        };
    }, [mediaPlaying]);

    return (
        <main className="h-screen max-w-[500px] flex flex-col divide-y divide-gray-200 mx-auto relative bg-white">
            <AnimatePresence>
                {(connectingWallet || mediaPlaying) && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.3 } }}
                        exit={{ opacity: 0 }}
                        className="absolute top-0 bottom-0 overflow-hidden left-0 right-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent"
                    >
                        <AnimatePresence>
                            {connectingWallet && (
                                <div className="p-4 pb-8">
                                    <motion.div
                                        key="connect-wallet"
                                        initial={{ y: 200, opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            transition: { delay: 0.3 },
                                        }}
                                        exit={{
                                            scale: 0.8,
                                            opacity: 0,
                                            transition: { delay: 0.4 },
                                        }}
                                    >
                                        <div
                                            onClick={() => {
                                                setConnectingWallet(false);
                                                setMediaPlaying(true);
                                            }}
                                            className="bg-white px-4 py-2 transition duration-200 active:scale-95 text-lg text-center font-bold rounded-full text-[#0D84C0] border-2 border-[#0D84C0]"
                                        >
                                            Connect Wallet
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        key="verify-access"
                                        initial={{ y: 200, opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: { delay: 0.3 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { delay: 0.4 },
                                        }}
                                        className="text-white font-bold text-center text-lg py-4"
                                    >
                                        Verify access to this token's media
                                    </motion.div>
                                </div>
                            )}
                            {mediaPlaying && (
                                <motion.div
                                    key="media-playing"
                                    initial={{ y: 300, opacity: 0 }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        transition: { delay: 0.6 },
                                    }}
                                    exit={{ y: 300, opacity: 0 }}
                                    onClick={() => {
                                        setMediaPlaying(true);
                                        setConnectingWallet(false);
                                    }}
                                    className="bg-gray-100 absolute bottom-8 left-4 right-4 flex items-center p-3 active:scale-95 transition duration-200 text-lg font-bold rounded-full"
                                >
                                    <Image
                                        src="/etherscan-music-nft/album.png"
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="rounded-full overflow-visible shadow-xl"
                                    />
                                    <div className="ml-3 flex flex-col -space-y-1">
                                        <div className="font-semibold text-lg">
                                            8am in Charlotte
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            Drake
                                        </div>
                                    </div>
                                    <div className="absolute right-3">
                                        <div className="flex absolute w-full h-full items-center justify-center text-[#0D84C0] rounded-full">
                                            <MdPause className="w-6 h-6" />
                                        </div>
                                        <svg
                                            id="progress"
                                            width="50"
                                            height="50"
                                            viewBox="0 0 50 50"
                                            className="-rotate-90"
                                        >
                                            <circle
                                                cx="25"
                                                cy="25"
                                                r="20"
                                                pathLength="1"
                                                strokeWidth="4"
                                                fill="transparent"
                                                className="stroke-[#0D84C0] opacity-30"
                                            />
                                            <motion.circle
                                                cx="25"
                                                cy="25"
                                                r="20"
                                                pathLength="1"
                                                strokeWidth="4"
                                                fill="transparent"
                                                className="stroke-[#0D84C0]"
                                                style={{
                                                    pathLength: fill,
                                                }}
                                            />
                                        </svg>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="p-3">
                <div className="bg-gray-50 border-gray-300 border p-2 rounded-lg text-gray-500 flex items-center gap-4">
                    <MagnifyingGlassIcon className="w-6 h-6" />
                    Search by Address Txn Hash
                </div>
            </div>
            <div className="flex gap-2 p-3 items-center justify-between">
                <Image
                    className="h-10 w-auto"
                    src="/etherscan-music-nft/etherscan.png"
                    alt=""
                    width={535}
                    height={123}
                />
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <UserCircleIcon className="w-5 h-5" />
                        Sign In
                    </div>
                    <div className="flex p-1 text-gray-600 border rounded-lg">
                        <Bars3Icon className="w-7 h-7" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-3 gap-1">
                <h1 className="text-3xl font-semibold mt-2">
                    8am in Charlotte (Pre...
                </h1>
                <div className="flex text-[#0D84C0] items-center">
                    <div className="mr-1 relative w-6 h-6 rounded-full overflow-hidden">
                        <Image
                            className="object-cover object-center"
                            src="/etherscan-music-nft/drake.jpg"
                            alt=""
                            fill
                        />
                    </div>
                    <div className="font-semibold mr-1 text-lg">Drake</div>
                    <CheckBadgeIcon className="translate-y-[0.5px] text-gray-500 w-5 h-5" />
                </div>
                <div className="border rounded-xl border-gray-200 p-3 mt-5">
                    <Image
                        src="/etherscan-music-nft/album.png"
                        alt=""
                        width={300}
                        height={300}
                        className="rounded-xl w-full h-auto"
                    />
                </div>
                <div className="flex gap-2">
                    <div
                        onClick={() => setConnectingWallet(true)}
                        className="transition duration-200 flex border active:scale-95 items-center gap-1 border-[#0D84C0] text-[#0D84C0] px-3 py-1 rounded-lg mt-5"
                    >
                        Play Media
                        <PlayIcon className="w-5 h-5" />
                    </div>
                    <div className="flex border items-center gap-1 border-[#0D84C0] text-[#0D84C0] px-3 py-1 rounded-lg mt-5">
                        Chat with Owner
                        <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
                    </div>
                </div>
                <div className="rounded-xl flex flex-col gap-4 border p-4 mt-5">
                    <div className="">
                        <div className="flex text-gray-600 items-center gap-1">
                            Min Price (24H)
                            <QuestionMarkCircleIcon className="w-5 h-5" />
                        </div>
                        N/A
                    </div>
                    <div className="w-full h-[1px] bg-gray-200" />
                    <div className="">
                        <div className="flex text-gray-600 items-center gap-1">
                            Last Sale (Item)
                            <QuestionMarkCircleIcon className="w-5 h-5" />
                        </div>
                        N/A
                    </div>
                    <div className="w-full h-[1px] bg-gray-200" />
                    <div className="">
                        <div className="flex text-gray-600 items-center gap-1">
                            Last Sale (Contract)
                            <QuestionMarkCircleIcon className="w-5 h-5" />
                        </div>
                        0.1 ETH <span className="text-gray-600">($159.74)</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

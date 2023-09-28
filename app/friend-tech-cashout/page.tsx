"use client";
import { Swipe } from "@/components/swipe/Swipe";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function FriendTechCashoutPage() {
    const [showSwipe, setShowSwipe] = useState(false);

    return (
        <main className="h-screen max-w-[500px] mx-auto relative">
            <AnimatePresence>
                <div className="relative">
                    <Image
                        src="/friend-tech-cashout/bg.jpeg"
                        width={1170}
                        height={2418}
                        className="blur"
                        alt="friend.tech background"
                    />
                    <div className="w-full h-full left-0 right-0 top-0 p-4 bottom-0 flex items-center justify-center absolute bg-opacity-25 bg-black">
                        <div className="bg-white -translate-y-10 rounded-xl flex flex-col gap-5 p-6 w-full">
                            <div className="font-medium text-lg text-center">
                                Trade Keys
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                    <Image
                                        src="/friend-tech-cashout/pfp.jpg"
                                        alt=""
                                        className="w-10 h-10 rounded-full border"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <div className="font-medium text-lg">
                                            Racer
                                        </div>
                                        <div className="text-gray-400">
                                            You own 1 key
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-right text-lg">
                                        7.1 ETH
                                    </div>
                                    <div className="flex gap-1 items-center text-gray-400">
                                        Key Price
                                        <QuestionMarkCircleIcon className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>
                            <button className="rounded-full bg-[#00BDFF] text-white w-full py-3 text-lg">
                                Buy a key
                            </button>
                            <button
                                onClick={() => setShowSwipe(true)}
                                className="rounded-full bg-[#FF6DA9] text-white w-full py-3 text-lg"
                            >
                                Sell a key
                            </button>
                            <div className="text-center text-gray-400">
                                Sell Price: 6.9 ETH
                            </div>
                        </div>
                    </div>
                </div>
                {showSwipe && <Swipe />}
            </AnimatePresence>
        </main>
    );
}

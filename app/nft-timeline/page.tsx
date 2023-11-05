"use client";

import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { GrCart } from "react-icons/gr";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa6";

import { AnimatePresence, motion } from "framer-motion";
import Reviews from "@/components/nft-timeline/Reviews";
import Timeline from "@/components/nft-timeline/Timeline";

export default function NftTimeline() {
    const [tab, setTab] = useState<"timeline" | "reviews">("reviews");
    return (
        <main className="overflow-x-hidden max-w-[500px] scrollbar-none mx-auto relative">
            <header className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <IoMdMenu className="w-7 h-7 text-black" />
                    <Image
                        src="/collection-feedback/OpenSea.png"
                        width={1311}
                        height={300}
                        className="h-9 w-auto"
                        alt=""
                    />
                </div>
                <div className="flex items-center gap-2">
                    <div className="p-3 border border-gray-300 rounded-lg">
                        <AiOutlineSearch className="w-5 h-5 text-black" />
                    </div>
                    <div className="p-3 border border-gray-300 rounded-lg">
                        <GrCart className="w-5 h-5 text-black" />
                    </div>
                </div>
            </header>
            <div className="p-4">
                <div className="flex flex-col gap-1">
                    <p className="text-[#2081E2] flex gap-1 items-center">
                        Mutant Ape Yacht Club{" "}
                        <HiOutlineBadgeCheck className="w-4 h-4" />
                    </p>
                    <h1 className="text-4xl font-bold">#22284</h1>
                    <div className="">
                        Owned by <span className="text-[#2081E2]">30e631</span>
                    </div>
                </div>
                <div className="rounded-2xl mt-6 overflow-hidden border">
                    <div className="flex p-3 px-4 border-b text-gray-600 justify-between">
                        <FaEthereum className="w-4 h-4" />
                        <div className="text-xs flex font-semibold items-center gap-1">
                            24
                            <AiOutlineHeart className="w-4 h-4" />
                        </div>
                    </div>

                    <Image
                        src="https://i.seadn.io/gcs/files/d0fb013053149bd7ee74613762e240b5.png?auto=format&dpr=1&w=1000"
                        width={500}
                        height={500}
                        alt=""
                    />
                </div>
                <div className="flex gap-2 w-full justify-stretch mt-4">
                    <div className="bg-[#2081E2] transitio9n duration-200 active:scale-95 text-white w-full font-bold p-3 text-lg rounded-xl flex justify-center items-center">
                        Place bid
                    </div>
                </div>
                <div className="mt-4 min-h-[800px]">
                    <div className="flex gap-2 overflow-hidden border-b relative">
                        <div
                            className="p-4 flex justify-center items-center relative w-full"
                            onClick={() => setTab("reviews")}
                        >
                            <h2
                                className={`text-lg font-bold transition duration-200 ${
                                    tab === "reviews"
                                        ? "opacity-100"
                                        : "opacity-50 hover:opacity-75"
                                }`}
                            >
                                Reviews
                            </h2>
                            <AnimatePresence>
                                {tab === "reviews" && (
                                    <motion.div
                                        key="reviews-tab"
                                        initial={{ y: 12, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 12, opacity: 0 }}
                                        className="absolute h-2 bg-[#2081E2] -bottom-1 left-4 right-4 rounded-full"
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                        <div
                            className="p-4 flex justify-center items-center w-full relative"
                            onClick={() => setTab("timeline")}
                        >
                            <h2
                                className={`text-lg font-bold transition duration-200 ${
                                    tab === "timeline"
                                        ? "opacity-100"
                                        : "opacity-50 hover:opacity-75"
                                }`}
                            >
                                Timeline
                            </h2>
                            <AnimatePresence>
                                {tab === "timeline" && (
                                    <motion.div
                                        key="timeline-tab"
                                        initial={{ y: 12, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 12, opacity: 0 }}
                                        className="absolute h-2 bg-[#2081E2] -bottom-1 left-4 right-4 rounded-full"
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    <AnimatePresence>
                        {tab === "reviews" && <Reviews key="reviews" />}
                        {tab === "timeline" && <Timeline key="timeline" />}
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
}

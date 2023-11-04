"use client";

import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { GrCart } from "react-icons/gr";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa6";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/components/collection-feedback/Modal";

const reviews: {
    [name: string]: {
        review: string;
        soldOn?: string;
        boughtOn: string;
        image: string;
        like: boolean;
    };
} = {
    "Sam Fankman Bried": {
        review: "I love Doodles, I really do, but I had to sell to pay my lawyers. Wasn't enough.",
        soldOn: "December 5, 2022",
        boughtOn: "December 5, 2021",
        image: "https://variety.com/wp-content/uploads/2023/01/FTX-founder-Sam-Bankman-Fried.jpg?w=1000&h=563&crop=1",
        like: true,
    },
    Vitalik: {
        review: "gm",
        boughtOn: "April 4, 2023",
        like: true,
        image: "https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg",
    },
    "Edward Paperhands": {
        review: "I had high hopes for Doodles, but they didn't meet my expectations. I decided to sell mine.",
        soldOn: "May 5, 2023",
        boughtOn: "April 5, 2023",
        like: false,
        image: "https://images-prod.anothermag.com/600/0-0-1500-1000/azure/another-prod/350/0/350191.jpg",
    },
};

function Review({
    name,
    review,
    soldOn,
    boughtOn,
    like,
    image,
}: {
    name: string;
    review: string;
    soldOn?: string;
    boughtOn: string;
    like: boolean;
    image: string;
}) {
    return (
        <div className="flex flex-col gap-1 border p-3 rounded-2xl px-4">
            <div className="flex items-center w-full gap-2">
                <div className="w-10 overflow-hidden h-10 rounded-full bg-gray-300 relative">
                    <Image
                        src={image}
                        fill
                        className="object-cover object-center"
                        alt=""
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between w-full items-center gap-1">
                        <div className="font-bold">{name}</div>
                        {like ? (
                            <FaThumbsUp className="w-4 h-4 text-[#2081E2]" />
                        ) : (
                            <FaThumbsDown className="w-4 h-4 text-red-500" />
                        )}
                    </div>
                    <div className="text-xs text-gray-500">
                        {soldOn ? "Sold on" : "Holder since"}{" "}
                        {boughtOn || soldOn}
                    </div>
                </div>
            </div>
            <div className="mt-2">{review}</div>
        </div>
    );
}

export default function CollectionFeedback() {
    const [showModal, setShowModal] = useState(false);
    const [isSold, setIsSold] = useState(false);

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
                    <p className="text-[#2081E2] flex gap-1 items-center text-sm">
                        Doodles <HiOutlineBadgeCheck className="w-4 h-4" />
                    </p>
                    <h1 className="text-2xl font-bold">Doodles #4143</h1>
                    <div className="text-sm">
                        Owned by <span className="text-[#2081E2]">danii</span>
                    </div>
                </div>
                <div className="rounded-2xl mt-6 overflow-hidden border">
                    <div className="flex p-3 px-4 border-b text-gray-600 justify-between">
                        <FaEthereum className="w-4 h-4" />
                        <div className="text-xs flex items-center gap-1">
                            0<AiOutlineHeart className="w-4 h-4" />
                        </div>
                    </div>
                    <Image
                        className=""
                        src="/collection-feedback/dani.png"
                        width={500}
                        height={500}
                        alt=""
                    />
                </div>
                <div className="flex gap-2 w-full justify-stretch mt-4">
                    <div
                        onClick={() => setShowModal(true)}
                        className="bg-[#2081E2] transitio9n duration-200 active:scale-95 text-white w-full font-bold p-3 text-lg rounded-xl flex justify-center items-center"
                    >
                        Sell
                    </div>
                    <div className="border-2 border-[#2081E2] text-[#2081E2] w-full font-bold p-3 text-lg rounded-xl flex justify-center items-center">
                        List
                    </div>
                </div>
                <AnimatePresence>
                    {showModal && (
                        <Modal
                            onClose={() => {
                                setShowModal(false);
                                setIsSold(true);
                            }}
                        />
                    )}
                </AnimatePresence>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold">Collection reviews</h2>
                    <div className="flex flex-col gap-4 my-4">
                        <AnimatePresence>
                            {isSold && (
                                <motion.div
                                    id="sold"
                                    initial={{ opacity: 0, y: -50, scale: 0.5 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.2, delay: 0.5 }}
                                >
                                    <Review
                                        image="/collection-feedback/dani.png"
                                        name="danii"
                                        review="how can doodles color the world with joy when they can't even color their holders with joy?"
                                        soldOn="November 2, 2023"
                                        boughtOn="December 5, 2021"
                                        like={false}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        {Object.entries(reviews).map(
                            ([
                                name,
                                { review, soldOn, image, boughtOn, like },
                            ]) => (
                                <Review
                                    key={name}
                                    name={name}
                                    review={review}
                                    soldOn={soldOn}
                                    boughtOn={boughtOn}
                                    like={like}
                                    image={image}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

"use client";
import Image from "next/image";
import { MapIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { MdFastfood } from "react-icons/md";
import { FaEthereum, FaGasPump } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

const CATEGORIES = [
    {
        name: "Food",
        icon: <MdFastfood className="w-8 h-8" />,
        nearby: 2,
        color: "bg-green-500",
    },
    {
        name: "Shopping",
        icon: <FaBasketShopping className="w-8 h-8" />,
        nearby: 3,
        color: "bg-orange-500",
    },
    {
        name: "Gas",
        icon: <FaGasPump className="w-8 h-8" />,
        nearby: 4,
        color: "bg-blue-500",
    },
];
const FOOD = [
    {
        name: "In-N-Out",
        image: "/on-chain-maps/innout.webp",
        distance: 0.2,
    },
    {
        name: "McDonald's",
        image: "/on-chain-maps/mcd.jpeg",
        distance: 0.5,
    },
    {
        name: "Taco Bell",
        image: "/on-chain-maps/taco.png",
        distance: 0.7,
    },
];

export default function NearMe({
    onSelect,
    selected,
}: {
    onSelect: (c: string) => void;
    selected: string | undefined;
}) {
    const [isOpened, setIsOpened] = useState(false);
    const [category, setCategory] = useState<undefined | string>();

    return (
        <AnimatePresence>
            {!isOpened && !selected && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.2 }}
                    key="button-menu"
                    className="w-full flex p-4 justify-end z-10 absolute right-0 bottom-0 left-0"
                >
                    <div
                        onClick={() => setIsOpened(true)}
                        className="bg-blue-400 border active:scale-95 rounded-2xl shadow-xl p-4 transition duration-200"
                    >
                        <MapPinIcon className="w-10 h-10 text-white" />
                    </div>
                </motion.div>
            )}
            {isOpened && !selected && !category && (
                <div
                    key="nearby"
                    className="w-full text-gray-900 absolute bottom-0 left-0 right-0 z-10"
                >
                    <motion.div
                        key="nearby"
                        className="relative bg-white z-20 rounded-t-[2.8rem] w-full h-full p-8 pt-10 shadow-xl border pb-24"
                        initial={{
                            opacity: 0,
                            y: 500,
                        }}
                        animate={{
                            opacity: 1,
                            y: 50,
                            transition: { delay: 0.2 },
                        }}
                        exit={{
                            opacity: 0,
                            y: 500,
                        }}
                        transition={{ duration: 0.4, type: "spring" }}
                    >
                        <div className="absolute top-2 mx-auto left-0 right-0 w-16 h-1.5 bg-gray-200 rounded-full" />
                        <div className="flex gap-4 items-center pb-6">
                            <div className="border-4 -rotate-6 border-blue-400 rounded-2xl p-2">
                                <MapPinIcon className="w-10 h-10 text-blue-400" />
                            </div>
                            <div>
                                <div className="text-3xl font-bold">Nearby</div>
                                <div className="text-gray-400">
                                    San Francisco, CA
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {CATEGORIES.map((category, index) => {
                                return (
                                    <motion.div
                                        key={`${index}-category`}
                                        whileTap={{
                                            scale: 0.95,
                                        }}
                                        className={`${category.color} w-full h-24 rounded-2xl text-white flex-col flex items-center justify-center gap-1`}
                                        onClick={() =>
                                            setCategory(category.name)
                                        }
                                    >
                                        {category.icon}
                                        <div className="text-sm font-semibold text-white">
                                            {category.name}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            )}
            {isOpened && !selected && category && (
                <div
                    key="nearby-food"
                    className="w-full text-gray-900 absolute bottom-0 left-0 right-0 z-10"
                >
                    <motion.div
                        key="nearby-food"
                        className="relative bg-white z-20 rounded-t-[2.8rem] w-full h-full p-8 pt-10 shadow-xl border pb-24"
                        initial={{
                            opacity: 0,
                            y: 500,
                        }}
                        animate={{
                            opacity: 1,
                            y: 50,
                            transition: { delay: 0.4 },
                        }}
                        exit={{
                            opacity: 0,
                            y: 500,
                        }}
                        transition={{ duration: 0.4, type: "spring" }}
                    >
                        <div className="absolute top-2 mx-auto left-0 right-0 w-16 h-1.5 bg-gray-200 rounded-full" />
                        <div className="flex gap-4 items-center pb-6">
                            <div className="border-4 -rotate-6 border-blue-400 rounded-2xl p-2">
                                <MapPinIcon className="w-10 h-10 text-blue-400" />
                            </div>
                            <div>
                                <div className="text-3xl font-bold">
                                    {category} Nearby
                                </div>
                                <div className="text-gray-400">
                                    San Francisco, CA
                                </div>
                            </div>
                        </div>
                        {category && (
                            <div className="grid grid-cols-3 gap-2">
                                {FOOD.map((f, index) => {
                                    return (
                                        <motion.div
                                            className=""
                                            key={`${index}-food`}
                                            onClick={() => onSelect(f.name)}
                                        >
                                            <div className="flex items-center flex-col gap-2">
                                                <div className="w-full relative active:scale-95 transition duration-200 border rounded-xl overflow-hidden h-24 bg-gray-100">
                                                    <Image
                                                        src={f.image}
                                                        alt={f.name}
                                                        fill
                                                        className="object-cover object-center"
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-base font-semibold text-gray-900">
                                                        {f.name}
                                                    </div>
                                                    <div className="text-xs text-gray-400">
                                                        {f.distance} miles away
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
            {isOpened && selected && (
                <div
                    key="detail"
                    className="w-full text-gray-900 absolute bottom-0 left-0 right-0 z-10"
                >
                    <motion.div
                        key="detail"
                        className="relative bg-white p-8 border shadow-xl z-20 rounded-t-[2.8rem] w-full h-full pt-10 pb-20"
                        initial={{ opacity: 0, y: 500 }}
                        animate={{
                            opacity: 1,
                            y: 50,
                            transition: {
                                duration: 0.4,
                                type: "spring",
                                delay: 2,
                            },
                        }}
                        exit={{ opacity: 0, y: 500 }}
                    >
                        <div className="absolute top-2 mx-auto left-0 right-0 w-16 h-1.5 bg-gray-200 rounded-full" />
                        <div className="flex gap-4 items-center pb-6">
                            <div className="w-14 -rotate-6 h-14 z-10 rounded-2xl overflow-hidden shadow border flex items-center justify-center bg-gray-100">
                                <Image
                                    src="/on-chain-maps/innout.webp"
                                    fill
                                    className="object-cover object-center"
                                    alt="In N Out logo"
                                />
                            </div>
                            <div>
                                <div className="text-3xl font-bold">
                                    In-N-Out
                                </div>
                                <div className="text-gray-400">
                                    0.2 miles away
                                </div>
                            </div>
                        </div>
                        <div className="w-full relative border rounded-2xl overflow-hidden h-48">
                            <Image
                                src="/on-chain-maps/innout-image.jpg"
                                alt=""
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="grid grid-cols-2 mt-4 gap-6">
                            <div>
                                <div className="text-base font-bold">
                                    Today's Hours
                                </div>
                                <div className="text-gray-500 text-sm">
                                    10:00 AM - 11:00 PM
                                </div>
                            </div>
                            <div>
                                <div className="text-base font-bold">
                                    Address
                                </div>
                                <div className="text-gray-500 text-sm">
                                    333 Jefferson St
                                    <br />
                                    San Francisco, CA 94133
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 justify-start flex items-center gap-1 text-gray-400 font-medium text-sm">
                            <FaEthereum className="w-4 h-4 text-gray-400" />
                            Address & Hours Verified on Ethereum
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

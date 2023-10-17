"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaEthereum } from "react-icons/fa";

export default function Course({
    logo,
    title,
    description,
    category,
    attestations,
}: {
    logo: string;
    title: string;
    category: string;
    attestations: number;
    description?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={`bg-white flex flex-col relative duration-300 transition w-full overflow-hidden rounded-xl border ${
                isOpen ? "shadow-lg" : ""
            }`}
        >
            <div className="absolute rounded-full -translate-y-2 -translate-x-6 w-28 h-28 overflow-hidden">
                <Image
                    src={logo}
                    alt=""
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="flex flex-col py-3 h-24 px-3 justify-center pl-[104px]">
                <p className="text-gray-400 text-xs -translate-x-1">
                    {category}
                </p>
                <h2 className="font-bold h-full whitespace-nowrap truncate">
                    {title}
                </h2>
                <p className="text-gray-500 text-xs flex gap-0.5 -translate-x-3 items-center">
                    <FaEthereum className="w-4 h-auto" />
                    {attestations} attestations on Ethereum
                </p>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={`${title}-course`}
                        initial={{
                            height: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            marginTop: 0,
                        }}
                        animate={{
                            height: "auto",
                            paddingLeft: 12,
                            paddingRight: 12,
                            marginTop: 8,
                        }}
                        exit={{
                            height: 0,
                            paddingLeft: 12,
                            paddingRight: 12,
                            marginTop: 0,
                        }}
                        className=""
                    >
                        <div className="py-3">
                            <div className="flex flex-col gap-2 mb-4 items-center justify-center">
                                <div className="flex -space-x-1.5 overflow-hidden">
                                    <img
                                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <img
                                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <img
                                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <img
                                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </div>
                                <p className="text-gray-400 text-xs text-center max-w-[200px]">
                                    4 people you know have verified 0xsins in
                                    this course
                                </p>
                            </div>
                            <div className="flex space-x-2 w-full justify-stretch">
                                <button
                                    type="button"
                                    className="rounded-lg w-full px-2 py-1 text-sm font-semibold border text-gray-900 shadow-sm bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Attest
                                </button>
                                <button
                                    type="button"
                                    className="rounded-lg w-full bg-[#8D1516] px-2 py-1 border text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    View course
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

"use client";

import Category from "@/components/wallet-categories/Category";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { WalletIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const categories = ["View All", "Tokens", "PFPs", "RWA", "Tickets", "ENS"];
const items = [
    {
        category: "Tokens",
        name: "USDC",
        image: "/wallet-categories/usdc.png",
        number: "4,000",
    },
    {
        category: "Tokens",
        name: "USDT",
        image: "/wallet-categories/usdt.png",
        number: "1,000",
    },
    {
        category: "Tokens",
        name: "KRAUSE",
        image: "/wallet-categories/krause.png",
        number: "10,000",
    },
    {
        category: "Tokens",
        name: "PRTC",
        image: "/wallet-categories/prtc.jpeg",
        number: "12,000",
    },
    {
        category: "Tokens",
        name: "MOG",
        image: "/wallet-categories/mog.webp",
        number: "500,000",
    },
    {
        category: "PFPs",
        name: "CryptoPunk",
        image: "/wallet-categories/punk.avif",
        number: "#1003",
    },
    {
        category: "PFPs",
        name: "Milady",
        image: "/wallet-categories/milady.png",
        number: "#9504",
    },
    {
        category: "PFPs",
        name: "DeGods",
        image: "/wallet-categories/degod.png",
        number: "#1204",
    },
    {
        category: "ENS",
        name: "gregfromstl",
        image: "/wallet-categories/ens.jpeg",
        // number: "#1204",
    },
    {
        category: "RWA",
        name: "Parcel 0",
        image: "/wallet-categories/parcel0.avif",
        number: "#388",
    },
    {
        category: "RWA",
        name: "Parcel 0",
        image: "/wallet-categories/parcel0_2.avif",
        number: "#2114",
    },
    {
        category: "Tickets",
        name: "build_dream",
        image: "/wallet-categories/dream.avif",
        number: "#17",
    },
    {
        category: "Tickets",
        name: "Krause House",
        image: "/wallet-categories/kh.png",
        number: "Upper Deck",
    },
    {
        category: "ENS",
        name: "bewater",
        image: "/wallet-categories/ens.jpeg",
        // number: "#1204",
    },
];

export default function WalletCategoriesPage() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [prevCategory, setPrevCategory] = useState<string | undefined>();

    return (
        <div className="h-screen max-w-[500px] flex flex-col overflow-hidden mx-auto relative">
            <div className="flex justify-between items-center px-8 pt-8">
                <div className="flex items-center gap-3">
                    <Image
                        alt=""
                        className="rounded-full"
                        src="https://pbs.twimg.com/profile_images/1646330655784017921/xBrfH2y2_400x400.jpg"
                        width={40}
                        height={40}
                    />
                    <div className="text-2xl font-bold">gregfromstl</div>
                </div>
                <div>
                    <MagnifyingGlassIcon className="w-8 h-8 text-gray-500" />
                </div>
            </div>
            <div className="w-full py-8 scroll-px-8 overflow-y-hidden scroll-smooth snap-mandatory snap-x scrollbar-none overflow-x-scroll">
                <div className="flex gap-6 px-8">
                    {categories.map((category) => (
                        <div
                            onClick={() => {
                                setPrevCategory(selectedCategory);
                                setSelectedCategory(category);
                            }}
                            key={category}
                            className={`snap-start flex gap-3 transition duration-200 p-2 px-3 rounded-xl min-w-[175px] justify-start items-center ${
                                selectedCategory === category
                                    ? "shadow-lg border bg-white"
                                    : "bg-gray-100 shadow-sm"
                            }`}
                        >
                            <div className="flex -space-x-5">
                                {category === "View All" ? (
                                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                                        <WalletIcon className="text-white w-8 h-8" />
                                    </div>
                                ) : (
                                    items
                                        .filter(
                                            (item) => item.category === category
                                        )
                                        .slice(0, 2)
                                        .map((item) => (
                                            <Image
                                                key={item.name}
                                                src={item.image}
                                                alt=""
                                                width={100}
                                                height={100}
                                                className="w-[20px] min-w-[40px] h-[40px] bg-gray-100 rounded-full border border-white"
                                            />
                                        ))
                                )}
                            </div>
                            <div className="text-lg font-semibold">
                                {category}
                            </div>
                        </div>
                    ))}
                    <div className="snap-start min-w-[100px]" />
                </div>
            </div>
            <div className="h-full overflow-y-scroll p-8">
                <AnimatePresence>
                    {categories.map(
                        (category) =>
                            category === selectedCategory && (
                                <Category
                                    category={selectedCategory}
                                    key={category}
                                    delay={
                                        items.filter(
                                            (i) =>
                                                i.category === prevCategory ||
                                                prevCategory === "View All"
                                        ).length *
                                            0.1 +
                                        0.3
                                    }
                                    items={items.filter(
                                        (item) =>
                                            item.category === category ||
                                            category === "View All"
                                    )}
                                />
                            )
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bid } from "@/types/in-game-auction";
import { FaEthereum } from "react-icons/fa";
import Image from "next/image";

const AllBids: Bid[] = [
    {
        image: "https://i.seadn.io/gcs/files/4ca46eed72542ae3c6d7f6a16270ed90.png?auto=format&dpr=1&w=640",
        address: "0x8765...4321",
        bid: 1.1,
    },
    {
        image: "https://i.seadn.io/gcs/files/2f6fe1303e3ca33c24b8d373a14163c5.png?auto=format&dpr=1&w=640",
        address: "0x5678...1234",
        bid: 1.4,
    },
    {
        image: "https://i.seadn.io/gcs/files/7a356f9f9d53b71d624375b5c6f2331e.png?auto=format&dpr=1&w=640",
        address: "alice.eth",
        bid: 1.5,
    },
    {
        image: "https://i.seadn.io/gcs/files/e5762b6daa944a1317d0cd1024804585.png?auto=format&dpr=1&w=640",
        address: "0x4321...8765",
        bid: 1.3,
    },
    {
        image: "https://i.seadn.io/gcs/files/77dea6cc55902d831460414f87819185.png?auto=format&dpr=1&w=640",
        address: "bob.eth",
        bid: 1.7,
    },
    {
        image: "https://i.seadn.io/gcs/files/bc37c32a096a87545bd0cd04a9d9a380.png?auto=format&dpr=1&w=640",
        address: "charlie.eth",
        bid: 2.0,
    },
    {
        image: "https://i.seadn.io/gcs/files/b75298d7a3a18b127f5f3a1bc3c369c5.png?auto=format&dpr=1&w=640",
        address: "david.eth",
        bid: 2.3,
    },
    {
        image: "https://i.seadn.io/gcs/files/99f5ae0112248d28856da35f3d72b56a.png?auto=format&dpr=1&w=640",
        address: "eve.eth",
        bid: 2.5,
    },
    {
        image: "https://i.seadn.io/gcs/files/4111c71426554c7d74ab8dce825cef7d.png?auto=format&dpr=1&w=640",
        address: "frank.eth",
        bid: 2.7,
    },
];

export default function AuctionPanel({ clip }: { clip: string }) {
    const [bids, setBids] = useState<Bid[]>([AllBids[0]]);
    const [seconds, setSeconds] = useState(57);
    const [userBid, setUserBid] = useState<number | undefined>(undefined);

    useEffect(() => {
        let i = 1;
        const interval = setInterval(() => {
            if (i < AllBids.length) {
                setBids((bids) => {
                    const newBids = [...bids];
                    if (AllBids[i]) newBids.push(AllBids[i]);
                    return newBids;
                });
                i++;
            } else {
                clearInterval(interval);
            }
        }, Math.random() * 1000 + 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        }
    }, [seconds]);

    const submitBid = () => {
        setBids((bids) => [
            ...bids,
            {
                image: "https://pbs.twimg.com/profile_images/1646330655784017921/xBrfH2y2_400x400.jpg",
                address: "gregfromstl.eth",
                bid: userBid!,
            },
        ]);
        setUserBid(0);
    };

    return (
        <motion.div
            initial={{ x: 514 }}
            animate={{ x: 64 }}
            transition={{ delay: 0.4 }}
            className="w-[514px] z-10 max-h-screen pr-20 flex flex-col absolute right-0 top-0 bottom-0 bg-gray-800 border-l-2 border-gray-600 text-white p-6"
        >
            <div className="overflow-hidden border-2 border-gray-600 w-full min-h-[250px] rounded-2xl">
                <video
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src={clip} type="video/mp4" />
                </video>
            </div>
            <div className="mt-4">
                <p className="text-gray-200 text-xs">
                    Rangers @ Sabres 10/12/23
                </p>
                <h2 className="font-clash text-2xl font-semibold">
                    Chris Kreider Goal Puck #1
                </h2>
            </div>
            <div className="mt-8 justify-start flex-1 flex flex-col pb-16">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold font-clash text-xl">
                        Current bids
                    </h3>
                    <p className="font-clash">
                        {seconds < 10
                            ? `00:00:0${seconds}`
                            : `00:00:${seconds}`}
                    </p>
                </div>
                <div className="relative flex flex-col max-h-full flex-1">
                    <div className="absolute top-0 overflow-y-scroll scrollbar-none right-0 bottom-0 left-0">
                        <div className="flex flex-col divide-y divide-gray-600">
                            <AnimatePresence>
                                {bids
                                    .sort((a, b) => b.bid - a.bid)
                                    .map((bid, idx) => (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                translateY: 10,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                translateY: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                translateY: 10,
                                            }}
                                            key={`bid-${idx}`}
                                            className="flex items-center justify-between py-4"
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 overflow-hidden rounded-xl bg-gray-600 relative">
                                                    <Image
                                                        src={bid.image}
                                                        fill
                                                        alt=""
                                                        className="object-cover object-center"
                                                    />
                                                </div>
                                                <p className="text-gray-200 font-clash font-medium text-base">
                                                    {bid.address}
                                                </p>
                                            </div>
                                            <p className="text-white font-clash font-medium text-base">
                                                {bid.bid} ETH
                                            </p>
                                        </motion.div>
                                    ))}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="flex absolute via-gray-800 pt-4 left-0 right-0 bottom-0 gap-2 items-center bg-gradient-to-t from-gray-800 to-transparent">
                        <div className="flex items-center gap-1 h-full">
                            <FaEthereum className="text-white w-8 h-8" />
                            <input
                                type="number"
                                className="bg-gray-700 border-2 w-36 h-full border-gray-600 rounded-2xl text-white px-2 py-3 remove-arrow"
                                placeholder="ETH"
                                value={userBid}
                                onChange={(e) =>
                                    setUserBid(Number(e.target.value))
                                }
                            />
                        </div>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-black z-10 w-full text-lg py-3 px-5 text-white font-clash font-bold rounded-2xl whitespace-nowrap hover:shadow-lg"
                            onClick={submitBid}
                        >
                            Submit Bid
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

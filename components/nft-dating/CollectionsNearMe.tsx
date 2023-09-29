"use client";
import Image from "next/image";
import { MapIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";

const COLLECTIONS = [
    {
        name: "Pudgy Penguins",
        image: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&dpr=1&w=384",
        nearby: 69,
    },
    {
        name: "Miladies",
        image: "https://i.seadn.io/gae/a_frplnavZA9g4vN3SexO5rrtaBX_cBTaJYcgrPtwQIqPhzgzUendQxiwUdr51CGPE2QyPEa1DHnkW1wLrHAv5DgfC3BP-CWpFq6BA?auto=format&dpr=1&w=384",
        nearby: 420,
    },
];

const PENGUINS = [
    {
        name: "Luca Netz",
        age: 25,
        image: "https://i.seadn.io/gcs/files/35a71ed744dc87590e0f916540879196.png?auto=format&dpr=1&w=1000",
    },
    {
        name: "Camol",
        age: 42,
        image: "https://i.seadn.io/gcs/files/3c925d82ccd326e526b0ff342347f70c.png?auto=format&dpr=1&w=1000",
    },
];

export default function CollectionsNearMe({
    onSelectCollection,
    selected,
}: {
    onSelectCollection: (c: string) => void;
    selected: string | undefined;
}) {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="w-full text-white absolute bottom-0 left-0 right-0 z-10">
            <AnimatePresence>
                {!isOpened && !selected && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4 }}
                        key="button-menu"
                        className="w-full flex p-4 justify-end z-10 absolute right-0 bottom-0 left-0"
                    >
                        <div
                            onClick={() => setIsOpened(true)}
                            className="bg-gray-900 rounded-2xl shadow-xl p-4 active:scale-105"
                        >
                            <MapPinIcon className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>
                )}
                {isOpened && !selected && (
                    <motion.div
                        key="nearby-collections"
                        className="relative bg-gray-900 z-20 rounded-t-[2.8rem] w-full h-full p-8 pt-10 pb-24"
                        initial={{ opacity: 0, y: 500 }}
                        animate={{ opacity: 1, y: 50 }}
                        exit={{ opacity: 0, y: 500 }}
                        transition={{ duration: 0.4, type: "spring" }}
                    >
                        <div className="absolute top-2 mx-auto left-0 right-0 w-16 h-1.5 bg-white bg-opacity-40 rounded-full" />
                        <div className="flex gap-4 items-center pb-6">
                            <div className="border-2 -rotate-6 border-white rounded-2xl p-2">
                                <MapPinIcon className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <div className="text-3xl font-bold">Nearby</div>
                                <div className="text-gray-300">
                                    489 singles near you
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {COLLECTIONS.map((collection, index) => {
                                return (
                                    <div
                                        className=""
                                        key={index}
                                        onClick={() =>
                                            onSelectCollection(collection.name)
                                        }
                                    >
                                        <div className="flex items-center flex-col gap-2">
                                            <Image
                                                src={collection.image}
                                                alt={collection.name}
                                                width={100}
                                                height={100}
                                                className="w-full rounded-xl bg-white"
                                            />
                                            <div className="text-center">
                                                <div className="text-base font-semibold text-white">
                                                    {collection.name}
                                                </div>
                                                <div className="text-sm text-gray-300">
                                                    {collection.nearby} nearby
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
                {isOpened && selected && (
                    <motion.div
                        key="nearby-singles"
                        className="relative bg-gray-900 z-20 rounded-t-[2.8rem] w-full h-full p-8 pt-10 pb-24"
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
                        <div className="absolute top-2 mx-auto left-0 right-0 w-16 h-1.5 bg-white bg-opacity-40 rounded-full" />
                        <div className="flex gap-4 items-center pb-6">
                            <div className="p-3 w-14 -rotate-6 h-14 z-10 rounded-2xl shadow-lg flex items-center justify-center bg-[#1A75CE]">
                                <Image
                                    src="/nft-dating/walmart.svg"
                                    width={50}
                                    height={50}
                                    className=""
                                    alt="Walmart logo"
                                />
                            </div>
                            <div>
                                <div className="text-3xl font-bold">
                                    Walmart
                                </div>
                                <div className="text-gray-300">
                                    69 singles near you
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {PENGUINS.map((penguin, index) => {
                                return (
                                    <div className="" key={index}>
                                        <div className="flex items-center flex-col gap-2">
                                            <div className="relative h-44 w-full rounded-2xl overflow-hidden">
                                                <Image
                                                    src={penguin.image}
                                                    alt={penguin.name}
                                                    fill
                                                    className="object-center object-cover"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <div className="text-base flex items-center gap-2 font-semibold text-white">
                                                    {penguin.name},{" "}
                                                    {penguin.age}{" "}
                                                    <CheckBadgeIcon className="w-5 h-5 inline-block text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

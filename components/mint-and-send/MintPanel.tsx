"use client";
import Image from "next/image";
import AdvancedSettings from "./AdvancedSettings";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from "./Spinner";

export default function MintPanel({
    onMinted,
    visible,
}: {
    onMinted: () => void;
    visible: boolean;
}) {
    const [advancedSettingsOpen, setAdvancedSettingsOpen] = useState(false);
    const [minting, setMinting] = useState(false);

    const mint = async () => {
        setMinting(true);
        await new Promise((r) => setTimeout(r, 2000));
        onMinted();
        setMinting(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 right-0 top-0 bottom-0 z-20 bg-black"
                />
            )}
            {visible && (
                <motion.div
                    initial={{ translateY: 700 }}
                    animate={{ translateY: 80 }}
                    exit={{ translateY: 700 }}
                    className="absolute text-white bottom-0 left-0 pb-24 right-0 z-30 bg-gray-950 rounded-t-[2rem]"
                >
                    <div className="bg-gray-900 overflow-hidden h-full rounded-[2rem] p-2 px-6 flex flex-col gap-8 text-center">
                        <div className="w-12 h-1.5 mx-auto bg-white bg-opacity-50 rounded-full" />
                        <motion.div
                            animate={{
                                height: advancedSettingsOpen ? 100 : 270,
                            }}
                            className="relative w-full"
                        >
                            <div className="absolute top-0 right-0 left-0 flex justify-center">
                                <div className="flex-col items-center flex justify-center">
                                    <div className="w-20 h-20 rounded-full bg-[#AFC4FB] relative overflow-hidden">
                                        <Image
                                            src="https://i.seadn.io/gcs/files/9b7b0ced176a90c668c965370c9d26ae.png?auto=format&dpr=1&w=1000"
                                            fill
                                            className="object-center object-cover"
                                            alt=""
                                        />
                                    </div>

                                    {!advancedSettingsOpen && (
                                        <>
                                            <div className="mt-1 text-gray-200 font-medium">
                                                Nakamigos
                                            </div>
                                            <div className="text-lg font-medium">
                                                Mint
                                            </div>
                                        </>
                                    )}
                                </div>
                                <motion.div
                                    animate={{
                                        width: advancedSettingsOpen
                                            ? "100%"
                                            : "0%",
                                    }}
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 py-2 right-0 flex justify-center gap-3">
                                <motion.div
                                    animate={{
                                        width: advancedSettingsOpen
                                            ? "100%"
                                            : "0%",
                                    }}
                                />
                                <div
                                    className={`flex flex-col gap-2 -translate-x-2 w-64 justify-center ${
                                        advancedSettingsOpen
                                            ? "items-end"
                                            : "items-center"
                                    }`}
                                >
                                    <div className="text-5xl font-bold">
                                        $360.22
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="bg-gray-700 flex p-1 rounded-full gap-2 pr-3 items-center">
                                            <div className="bg-gray-800 rounded-full p-1">
                                                <Image
                                                    src="/mint-and-send/ethereum.svg"
                                                    alt=""
                                                    width={25}
                                                    height={25}
                                                    className="w-5 h-5 text-white"
                                                />
                                            </div>
                                            <div className="font-medium white text-lg">
                                                0.215 ETH
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="flex w-full gap-4 py-4">
                            <button
                                className={`bg-gray-700 hover:bg-gray-700 w-full text-gray-200 font-extrabold rounded-full text-xl py-3 ${
                                    minting ? "opacity-50" : ""
                                }`}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={mint}
                                className={`w-full flex items-center justify-center gap-2 font-extrabold bg-[#4285F6] rounded-full text-xl py-3 ${
                                    minting ? "opacity-50" : ""
                                }`}
                            >
                                {minting ? (
                                    <>
                                        <Spinner /> Minting...
                                    </>
                                ) : (
                                    "Mint"
                                )}
                            </button>
                        </div>
                    </div>
                    <AdvancedSettings
                        open={advancedSettingsOpen}
                        toggle={() =>
                            setAdvancedSettingsOpen(!advancedSettingsOpen)
                        }
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

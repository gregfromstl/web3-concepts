"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRive } from "@rive-app/react-canvas";
import { AnimatePresence, motion } from "framer-motion";

export default function Modal() {
    const { rive, RiveComponent } = useRive({
        src: "/metamask-selfie/countdown.riv",
        autoplay: false,
    });
    const [flash, setFlash] = useState(false);
    const [imageTaken, setImageTaken] = useState(false);

    useEffect(() => {
        rive?.play();
        setTimeout(() => {
            setFlash(true);
            setTimeout(() => setFlash(false), 500);
            setTimeout(() => setImageTaken(true), 250);
        }, 3000);
    }, [rive]);

    return (
        <>
            <AnimatePresence>
                {flash && (
                    <motion.div
                        id="flash"
                        className="bg-white opacity-80 fixed z-50 top-0 bottom-0 left-0 right-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                id="modal-bg"
                transition={{ duration: 0.2, delay: 0.2 }}
                className="bg-black/50 fixed z-30 left-0 right-0 bottom-0 top-0"
            />
            <motion.div
                id="modal"
                initial={{ y: 1100 }}
                animate={{ y: 150 }}
                exit={{ y: 1100 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="bg-[#242629] pb-[150px] rounded-t-3xl w-full z-40 flex flex-col bottom-0 absolute p-4 h-[110%] left-0 right-0 border border-gray-600"
            >
                {!imageTaken ? (
                    <div className="w-full h-full items-center flex-col justify-start flex p-12 gap-8">
                        {/* // hiding the rive watermark */}
                        <div className="relative w-72 h-[240px] overflow-hidden">
                            <RiveComponent className="absolute left-0 top-0 right-0 w-72 h-72" />
                        </div>
                        <div className="flex items-center flex-col text-center gap-2">
                            <div className="text-xl">
                                Sending transaction...
                            </div>
                            <div className="text-sm text-gray-500">
                                MetaMask will take a selfie when the transaction
                                completes.
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-full items-center flex-col justify-start flex gap-4">
                        <div className="text-lg font-semibold">
                            Transaction selfie
                        </div>
                        <div className="relative w-full h-96">
                            <Image
                                src="/metamask-selfie/chad.jpg"
                                fill
                                alt=""
                                className="object-cover object-center rounded-xl"
                            />
                        </div>
                        <div className="flex items-center justify-between w-full gap-2">
                            <div className="flex flex-col gap-1">
                                <div className="font-semibold">
                                    Successfully purchased Punk 7458
                                </div>
                                <div className="text-sm underline text-gray-500">
                                    Transaction: 0x2ef8...2c82
                                </div>
                            </div>
                            <Image
                                src="https://cryptopunks.app/cryptopunks/cryptopunk7458.png"
                                alt=""
                                width={200}
                                height={200}
                                className="rounded-lg w-16 h-16"
                            />
                        </div>
                    </div>
                )}
            </motion.div>
        </>
    );
}

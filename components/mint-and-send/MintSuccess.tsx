"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRive } from "@rive-app/react-canvas";

export default function MintSuccess() {
    const { rive, RiveComponent } = useRive({
        src: "/mint-and-send/success.riv",
        autoplay: false,
    });

    useEffect(() => {
        rive?.play();
    }, [rive]);

    return (
        <div className="flex flex-col items-center text-center bg-white p-6 justify-between w-full absolute left-0 right-0 top-0 bottom-0 z-10">
            <div />
            <div>
                <motion.div
                    className="font-bold text-lg mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.2, delay: 1 }}
                >
                    Mint Successful
                </motion.div>
                <div className="w-48 h-48 relative">
                    <Image
                        src="https://i.seadn.io/gcs/files/9b7b0ced176a90c668c965370c9d26ae.png?auto=format&dpr=1&w=1000"
                        fill
                        className="object-center rounded-xl object-cover"
                        alt=""
                    />
                    <RiveComponent className="w-24 h-24 absolute -right-8 -bottom-8 mt-2 border-transparent border" />
                </div>
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                >
                    <div className="text-5xl font-extrabold">$360.22</div>
                    <div className="opacity-50 mt-1">
                        Purchased for 0.215 ETH
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, translateY: 10 }}
                animate={{
                    opacity: 1,
                    translateY: 0,
                }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="flex gap-2 text-lg"
            >
                <div className="opacity-50">Transferred to</div>
                <div className="font-semibold flex gap-2 justify-center items-center">
                    <div>vault.eth</div>
                </div>
            </motion.div>
        </div>
    );
}

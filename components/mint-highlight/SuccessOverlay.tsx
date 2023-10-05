"use client";
import { useEffect } from "react";
import { useRive, EventType } from "@rive-app/react-canvas";
import { motion } from "framer-motion";

export default function SuccessOverlay({ close }: { close: () => void }) {
    const { rive, RiveComponent } = useRive({
        src: "/mint-highlight/success.riv",
        autoplay: false,
    });

    useEffect(() => {
        rive?.play();
        rive?.on(EventType.Stop, () => {
            setTimeout(() => {
                close();
            }, 1000);
        });
    }, [rive]);

    return (
        <motion.div
            initial={{
                translateY: 50,
                opacity: 0,
            }}
            animate={{
                translateY: 0,
                opacity: 1,
            }}
            exit={{
                translateY: 50,
                opacity: 0,
            }}
            key="minted"
            className="flex gap-0 flex-col text-lg justify-center font-bold absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 text-white items-center"
        >
            <RiveComponent className="w-24 h-24" />
            Minted
        </motion.div>
    );
}

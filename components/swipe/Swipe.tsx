"use client";

import { ChevronUpIcon } from "@heroicons/react/20/solid";
import SwipePanel from "./SwipePanel";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SwipeSuccess from "./SwipeSuccess";

export function Swipe() {
    const [hasSwiped, setHasSwiped] = useState(false);

    const onSwipe = () => {
        setHasSwiped(true);
    };

    return (
        <motion.div
            className="w-full h-full left-0 right-0 top-0 bottom-0 bg-white absolute z-10"
            initial={{ y: 1000, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex relative flex-col h-full justify-center items-center">
                <AnimatePresence>
                    {hasSwiped && <SwipeSuccess />}

                    {!hasSwiped && (
                        <div className="h-full w-full" key={1}>
                            <motion.div
                                className="h-5/6 z-10 relative"
                                initial={{ y: -500, opacity: 0 }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: { delay: 0.5, duration: 0.5 },
                                }}
                                exit={{ y: -1000, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <SwipePanel onSwipeUp={onSwipe} />
                            </motion.div>
                            <motion.div
                                className="flex flex-col h-1/6 justify-center items-center"
                                initial={{ opacity: 0, translateY: 10 }}
                                exit={{ opacity: 0, translateY: 10 }}
                                animate={{
                                    opacity: 1,
                                    translateY: 0,
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <ChevronUpIcon className="h-6 w-6" />
                                Swipe up to sell
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

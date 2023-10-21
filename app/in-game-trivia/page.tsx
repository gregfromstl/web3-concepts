"use client";
import {
    ChatBubbleLeftEllipsisIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import { BiBasketball, BiHomeAlt2 } from "react-icons/bi";
import { PiLockers, PiTelevisionSimple } from "react-icons/pi";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PlayerCard from "@/components/in-game-trivia/PlayerCard";

export default function InGameTrivia() {
    const [timeRemaining, setTimeRemaining] = useState(694);
    const [questionTimeRemaining, setQuestionTimeRemaining] = useState(15);
    const [triviaActive, setTriviaActive] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [tokens, setTokens] = useState(512);

    useEffect(() => {
        setTimeout(() => {
            setTriviaActive(true);
        }, 5000);
    }, []);

    useEffect(() => {
        let timer: any = null;
        if (!triviaActive) {
            timer = setInterval(() => {
                setTimeRemaining((timeRemaining) => timeRemaining - 1);
            }, 1000);
        }
        return () => timer && clearInterval(timer);
    }, [triviaActive]);

    useEffect(() => {
        if (triviaActive) {
            const questionTimer = setInterval(() => {
                setQuestionTimeRemaining(
                    (questionTimeRemaining) => questionTimeRemaining - 1
                );
            }, 1000);
            return () => clearInterval(questionTimer);
        }
    }, [triviaActive]);

    useEffect(() => {
        if (answered) {
            setTimeout(() => {
                setTriviaActive(false);
                setTokens(tokens + 10);
            }, 1000);
        }
    }, [answered]);

    return (
        <main className="h-screen overflow-hidden max-w-[500px] mx-auto flex flex-col bg-gray-900 relative">
            <header className="shadow-lg flex items-center justify-between px-4 py-2 bg-gray-800">
                <div className="flex items-center gap-4 text-3xl font-bold text-white">
                    <Image
                        src="/in-game-trivia/lakers.svg"
                        width={60}
                        height={60}
                        alt=""
                    />
                    42
                </div>
                <div className="">
                    <div className="text-white font-semibold items-center gap-1 text-lg flex">
                        <span className="opacity-50">Q2</span>
                        <span className="">
                            {Math.floor(timeRemaining / 60)}:
                            {timeRemaining % 60 < 10 ? "0" : ""}
                            {timeRemaining % 60}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-3xl font-bold text-white">
                    43
                    <Image
                        src="/in-game-trivia/nuggets.svg"
                        width={50}
                        height={50}
                        alt=""
                    />
                </div>
            </header>
            <div className="flex relative flex-col p-3 items-center justify-center h-full overflow-hidden">
                <div className="text-center h-20 w-full relative flex items-end justify-center">
                    <AnimatePresence>
                        <motion.div
                            className="text-6xl font-bold text-white absolute top-0 left-0 right-0 mx-auto"
                            key={tokens}
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                        >
                            {tokens}
                        </motion.div>
                    </AnimatePresence>
                    <div className="text-white/50 text-base uppercase">
                        Tokens earned
                    </div>
                </div>
                <AnimatePresence>
                    {triviaActive && (
                        <motion.div
                            key="trivia"
                            initial={{ height: 0, marginTop: 0 }}
                            animate={{
                                height: 500,
                                marginTop: 20,
                                transition: { delay: 0.5 },
                            }}
                            exit={{
                                height: 0,
                                marginTop: 0,
                                transition: { delay: 0.7 },
                            }}
                            className="w-full"
                        >
                            <motion.div
                                key="question"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { delay: 1 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { delay: 0.1 },
                                }}
                                className="text-white mb-3 mx-auto flex flex-col -space-y-1 text-center"
                            >
                                <div className="opacity-50 text-sm uppercase">
                                    Prove you&apos;re watching
                                </div>
                                <div className="text-2xl font-bold">
                                    Which player scored last?
                                </div>
                            </motion.div>
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    key="lebron"
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 0.7 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 25,
                                        transition: { delay: 0.3 },
                                    }}
                                    className=""
                                >
                                    <PlayerCard
                                        headshot="/in-game-trivia/james.png"
                                        name="LeBron James"
                                        team="Los Angeles Lakers"
                                        logo="/in-game-trivia/lakers.svg"
                                        isEliminated={answered}
                                    />
                                </motion.div>
                                <motion.div
                                    key="reaves"
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 0.8 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 25,
                                        transition: { delay: 0.2 },
                                    }}
                                    className=""
                                >
                                    <PlayerCard
                                        headshot="/in-game-trivia/reaves.png"
                                        name="Austin Reaves"
                                        team="Los Angeles Lakers"
                                        logo="/in-game-trivia/lakers.svg"
                                        isEliminated={answered}
                                    />
                                </motion.div>
                                <motion.div
                                    key="murray"
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 0.9 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 25,
                                        transition: { delay: 0.1 },
                                    }}
                                    className=""
                                >
                                    <PlayerCard
                                        headshot="/in-game-trivia/murray.png"
                                        name="Jamal Murray"
                                        team="Denver Nuggets"
                                        logo="/in-game-trivia/nuggets.svg"
                                        onSelect={() => setAnswered(true)}
                                        isCorrect={answered}
                                    />
                                </motion.div>
                                <motion.div
                                    key="mpj"
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 1 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 25,
                                        transition: { delay: 0 },
                                    }}
                                    className=""
                                >
                                    <PlayerCard
                                        headshot="/in-game-trivia/porter.png"
                                        name="Michael Porter Jr."
                                        team="Denver Nuggets"
                                        logo="/in-game-trivia/nuggets.svg"
                                        isEliminated={answered}
                                    />
                                </motion.div>
                            </div>
                            <motion.div
                                key="timer"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { delay: 1 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { delay: 0.1 },
                                }}
                                className="text-white mx-auto flex flex-col -space-y-1 text-center mt-3"
                            >
                                <div className="text-2xl font-bold">
                                    {questionTimeRemaining} seconds
                                </div>
                                <div className="opacity-50 text-sm uppercase">
                                    Remaining
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                    {!triviaActive && (
                        <motion.div
                            key="waiting"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 1 },
                            }}
                            exit={{ opacity: 0, y: 50 }}
                            className="text-white/50 p-6 absolute bottom-0 text-center flex flex-col items-center"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.2, 1],
                                    transition: {
                                        loop: Infinity,
                                        repeat: Infinity,
                                        ease: "linear",
                                        duration: 3,
                                    },
                                }}
                            >
                                <BiBasketball className="w-12 h-12" />
                            </motion.div>
                            <div className="max-w-xs mt-2">
                                Game is in progress, earn more tokens during the
                                next timeout.
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="flex bg-gray-800 pb-6 divide-x divide-gray-700 justify-center py-3 px-4 shadow-lg text-white">
                <div className="px-6">
                    <ChatBubbleLeftEllipsisIcon className="w-8 h-8 text-gray-600" />
                </div>
                <div className="px-6">
                    <PiLockers className="w-8 h-8 text-gray-600" />
                </div>
                <div className="px-6">
                    <BiHomeAlt2 className="w-8 h-8 text-gray-600" />
                </div>
                <div className="px-6">
                    <PiTelevisionSimple className="w-8 h-8 text-white shadow-lg" />
                </div>
                <div className="px-6">
                    <UserIcon className="w-8 h-8 text-gray-600" />
                </div>
            </div>
        </main>
    );
}

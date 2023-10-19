"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaEthereum } from "react-icons/fa";

export default function WikipediaPage() {
    const [highlightedText, setHighlightedText] = useState<
        undefined | string
    >();
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleHighlight = () => {
            const selectedText = window.getSelection()?.toString();
            setHighlightedText(selectedText);
        };
        handleHighlight();

        const touchSupported = "ontouchstart" in window;
        const event = touchSupported ? "touchend" : "mouseup";

        window.addEventListener(event, handleHighlight);

        return () => {
            window.removeEventListener(event, handleHighlight);
        };
    }, []);

    return (
        <div className="max-w-[500px] mx-auto relative">
            <header className="justify-between bg-[#F6F6F6] border-b p-4 flex items-center">
                <div className="flex flex-col gap-1.5">
                    <div className="bg-black rounded-full w-8 h-[3px]" />
                    <div className="bg-black rounded-full w-6 h-[3px]" />
                </div>
                <Image
                    className="w-12"
                    src="/wikipedia/w.png"
                    width={100}
                    height={100}
                    alt=""
                />
                <div className="w-10 h-10 translate-y-0.5 relative">
                    <div className="bg-[#F6F6F6] rounded-full w-4 flex items-center justify-center h-4 p-1 absolute -top-1 -right-1">
                        <div className="bg-[#4065C5] absolute opacity-25 animate-ping rounded-full w-full h-full" />
                        <div className="bg-[#4065C5] rounded-full w-full relative z-10 h-full" />
                    </div>
                    <Image
                        className="rounded-full h-full w-full"
                        src="/wikipedia/headshot.jpg"
                        width={100}
                        height={100}
                        alt=""
                    />
                </div>
            </header>
            <main className="p-2">
                <Image
                    className=""
                    src="/wikipedia/page-header.png"
                    width={1002}
                    height={346}
                    alt=""
                />
                <div className="p-2 mt-2 flex max-h-60 overflow-hidden flex-col gap-4">
                    <p>
                        A <b>non-fungible token (NFT)</b> is a unique identifier
                        that is recorded on a{" "}
                        <span className="text-[#4065C5]">blockchain</span>, and
                        is used to certify ownership and authenticity. NFTs were
                        finally declared dead in 2023.
                    </p>
                    <p>
                        Proponents claim that NFTs provide a public certificate
                        of authenticity or proof of ownership, but the legal
                        rights conveyed by an NFT can be uncertain. The
                        ownership of an NFT as defined by the blockchain has no
                        inherent legal meaning and does not necessarily grant
                        copyright, intellectual property rights, or other legal
                        rights over its associated digital file. An NFT does not
                        restrict the sharing or copying of its associated
                        digital file and does not prevent the creation of NFTs
                        that reference identical files.
                    </p>
                </div>
                <AnimatePresence>
                    {(highlightedText || isExpanded) && (
                        <motion.div
                            initial={{ bottom: -100 }}
                            animate={{ bottom: 20 }}
                            key="popup"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="bg-black absolute left-3 right-3 p-2.5 rounded-[2rem] overflow-hidden items-center shadow"
                        >
                            <div className="flex gap-3">
                                <div className="bg-[#333] rounded-full p-2 text-[#999]">
                                    <FaEthereum className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <div className="text-white text-[13px]">
                                        Added Sep 30, 2023 by{" "}
                                        <b>RollingStone.eth</b>
                                    </div>
                                    <div className="text-[11px] text-[#777]">
                                        Author Reputation:{" "}
                                        <span className="text-green-500">
                                            Good
                                        </span>{" "}
                                        • TxHash <u>0x123...4567</u>
                                    </div>
                                </div>
                            </div>
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        key="expanded"
                                        initial={{
                                            marginTop: 0,
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            marginTop: 16,
                                            height: "auto",
                                            opacity: 1,
                                        }}
                                        exit={{
                                            marginTop: 0,
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        className="bg-[#333] rounded-lg"
                                    >
                                        <div className="w-full h-48 relative overflow-hidden rounded-lg">
                                            <Image
                                                src="/wikipedia/nfts-are-dead.webp"
                                                fill
                                                alt=""
                                                className="object-cover object-center"
                                            />
                                            <div className="h-full bg-gradient-to-t relative z-10 from-black to-transparent w-full p-2 flex items-end">
                                                <div className="text-white font-medium">
                                                    Source: Your NFTs Are
                                                    Actually — Finally — Totally
                                                    Worthless
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}

"use client";
import Chat from "@/components/onchain-gpt/Chat";
import Dropdown from "@/components/onchain-gpt/Dropdown";
import {
    BoltIcon,
    ChevronDownIcon,
    EllipsisHorizontalIcon,
    SparklesIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

export default function OnChainGPTPage() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);

    return (
        <main className="bg-black text-white flex gap-4 flex-col p-4 h-screen max-w-[500px] overflow-hidden mx-auto relative">
            <div className="flex gap-2">
                <div className="bg-[#1E1E1E] w-full flex rounded-xl p-1 text-sm">
                    <div className="w-full text-[#9B9AA0] flex justify-center gap-1 items-center py-3">
                        <BoltIcon className="w-5 h-5" />
                        GPT-3.5
                    </div>
                    <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full text-white flex gap-1 rounded-xl bg-black justify-center items-center py-3"
                    >
                        <SparklesIcon className="w-5 text-[#A070FE] h-5" />
                        GPT-4
                        <ChevronDownIcon
                            className={`transition duration-200 text-[#9B9AA0] w-5 h-5 ${
                                isDropdownOpen ? "rotate-180" : ""
                            }`}
                        />
                    </div>
                </div>
                <div className="bg-[#1E1E1E] rounded-xl p-4">
                    <EllipsisHorizontalIcon className="w-5 h-5" />
                </div>
            </div>
            <div className="relative">
                <Dropdown
                    isOpen={isDropdownOpen}
                    setIsOpen={setIsDropdownOpen}
                />
            </div>
            <div className="h-full pb-6">
                <Chat />
            </div>
        </main>
    );
}

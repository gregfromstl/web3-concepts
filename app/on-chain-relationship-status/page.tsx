"use client";
import Dropdown from "@/components/on-chain-relationship-status/Dropdown";
import { TrashIcon } from "@heroicons/react/24/outline";
import { FaEthereum } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import BreakupDetails from "@/components/on-chain-relationship-status/BreakupDetails";

export default function OnChainRelationshipStatus() {
    const [status, setStatus] = useState<number>(1);
    const [interestedIn, setInterestedIn] = useState<number>(0);
    const [chain, setChain] = useState<number>(0);
    const [panelOpen, setPanelOpen] = useState<boolean>(false);

    return (
        <main
            className="max-w-[500px] min-h-screen flex flex-col gap-4 mx-auto relative
    bg-gray-50 p-4"
        >
            <div className="border rounded-3xl overflow-hidden w-full">
                <div className="bg-gradient-to-br h-28 from-[#8696F5] to-[#67B9EB]" />
                <div className="bg-white relative p-6 pt-16 pb-8">
                    <div className="bg-gray-300 absolute left-6 border-2 overflow-hidden border-white -top-12 rounded-full w-24 h-24">
                        <Image
                            className="object-center object-cover"
                            fill
                            alt=""
                            src="/on-chain-relationship-status/caroline.jpg"
                        />
                    </div>
                    <h1 className="font-bold text-3xl">caroline.eth</h1>
                </div>
            </div>
            <div className="border rounded-3xl overflow-visible w-full bg-white p-6">
                <div className="">
                    <h3 className="font-semibold text-lg">
                        Set relationship status
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">
                        Select how you want to appear on dApps (dating apps)
                    </p>
                </div>
                <div className="mt-2 flex flex-col">
                    <div className="z-30">
                        <Dropdown
                            options={[
                                { content: <p>Single</p>, idx: 0 },
                                { content: <p>In a relationship</p>, idx: 1 },
                                { content: <p>It's complicated</p>, idx: 2 },
                            ]}
                            selected={status}
                            setSelected={(n) => {
                                setStatus(n);
                                setPanelOpen(true);
                            }}
                        />
                    </div>
                    <h5 className="mt-4 font-medium text-gray-500 text-base">
                        Interested in
                    </h5>
                    <div className="mt-2 flex flex-col gap-3">
                        <div className="items-center z-20 w-full flex gap-3">
                            <Dropdown
                                options={[
                                    { content: <p>Men and Women</p>, idx: 0 },
                                    { content: <p>Men</p>, idx: 1 },
                                    { content: <p>Women</p>, idx: 2 },
                                    { content: <p>Anything</p>, idx: 3 },
                                ]}
                                selected={interestedIn}
                                setSelected={setInterestedIn}
                            />
                            <div className="bg-white rounded-md border flex items-center justify-center w-12 h-10">
                                <TrashIcon className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                        <div className="items-center w-full z-10 flex gap-3">
                            <Dropdown
                                options={[
                                    {
                                        content: (
                                            <div className="flex gap-1 items-center">
                                                <FaEthereum className="text-gray-400 w-5 h-5" />{" "}
                                                ETH{" "}
                                                <div className="text-gray-400 ml-2">
                                                    L1 users only
                                                </div>
                                            </div>
                                        ),
                                        idx: 0,
                                    },
                                ]}
                                selected={chain}
                                setSelected={setChain}
                            />
                            <div className="bg-white rounded-md border flex items-center justify-center w-12 h-10">
                                <TrashIcon className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border rounded-3xl overflow-visible w-full bg-white p-6">
                <div>
                    <h3 className="font-semibold text-lg">About me</h3>
                    <p className="text-gray-400 text-sm mt-1">
                        I enjoy $20M bonuses, committing fraud, and selling out
                        co-conspirators for a reduced sentence.
                    </p>
                </div>
            </div>
            <BreakupDetails
                isOpened={panelOpen}
                close={() => setPanelOpen(false)}
            />
        </main>
    );
}

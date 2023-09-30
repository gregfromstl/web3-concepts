"use client";
import MintPanel from "@/components/mint-and-send/MintPanel";
import MintSuccess from "@/components/mint-and-send/MintSuccess";
import Image from "next/image";
import { useState } from "react";

export default function MintAndSendPage() {
    const [minted, setMinted] = useState(false);
    const [minting, setMinting] = useState(false);
    return (
        <main className="h-screen max-w-[500px] overflow-hidden mx-auto relative">
            <div className="p-8 flex flex-col justify-center h-full">
                <div className="w-full h-80 bg-[#AFC4FB] overflow-hidden rounded-xl relative">
                    <Image
                        src="https://i.seadn.io/gcs/files/9b7b0ced176a90c668c965370c9d26ae.png?auto=format&dpr=1&w=1000"
                        fill
                        className="object-center object-cover"
                        alt=""
                    />
                </div>
                <div className="flex w-full gap-4 py-4">
                    <button
                        className={`w-full text-[#4285F6] border-2 border-[#4285F6] font-extrabold rounded-full text-xl py-3 ${
                            minting ? "opacity-50" : ""
                        }`}
                    >
                        Share
                    </button>
                    <button
                        onClick={() => setMinting(true)}
                        className={`w-full text-white flex items-center justify-center gap-2 font-extrabold bg-[#4285F6] rounded-full text-xl py-3`}
                    >
                        Mint
                    </button>
                </div>
            </div>
            {minted && <MintSuccess />}
            <MintPanel
                onMinted={() => {
                    setMinting(false);
                    setMinted(true);
                }}
                visible={minting}
            />
        </main>
    );
}

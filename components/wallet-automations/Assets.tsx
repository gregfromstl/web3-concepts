"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Asset } from "@/types/wallet-automations";

export default function Assets({ assets }: { assets: Asset[] }) {
    return (
        <div className="grid scrollbar-none grid-cols-3 items-start justify-start gap-4">
            {assets.map((item, i) => (
                <motion.div
                    key={`${item.name}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: i * 0.1,
                        },
                    }}
                    exit={{
                        opacity: 0,
                        y: 10,
                        transition: {
                            delay: (assets.length - i - 1) * 0.1,
                        },
                    }}
                    className="flex flex-col gap-2 items-center"
                >
                    <Image
                        src={item.image}
                        alt=""
                        width={300}
                        height={300}
                        className="w-full h-auto bg-gray-100 rounded-2xl border border-white"
                    />
                    <div className="flex text-center flex-col items-center">
                        <div className="text-base font-bold">{item.name}</div>
                        {item.amount && (
                            <div className="text-gray-500 text-sm">
                                {item.amount}
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

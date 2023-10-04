"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Category({
    items,
    category,
    delay = 0,
}: {
    items: any[];
    category: string;
    delay?: number;
}) {
    return (
        <div className="grid scrollbar-none grid-cols-3 items-start justify-start gap-4">
            {items.map((item, i) => (
                <motion.div
                    key={`${item.name}-${item.number}-${category}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: i * 0.1 + delay,
                        },
                    }}
                    exit={{
                        opacity: 0,
                        y: 10,
                        transition: {
                            delay: (items.length - i - 1) * 0.1,
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
                        <div className="text-gray-500 text-sm">
                            {item.number}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

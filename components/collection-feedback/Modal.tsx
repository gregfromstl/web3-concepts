"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";

export default function Modal({ onClose }: { onClose: () => void }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                id="modal-bg"
                transition={{ duration: 0.2, delay: 0.2 }}
                className="bg-black/20 fixed z-40 left-0 right-0 bottom-0 top-0"
            />
            <motion.div
                id="modal"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="fixed left-0 p-4 right-0 z-50 bottom-0 top-0 flex justify-center items-center"
            >
                <div className="bg-white rounded-2xl w-full flex flex-col divide-y divide-gray-100">
                    <div className="flex items-center p-4 justify-between">
                        <div className="text-lg font-bold">Sell</div>
                        <IoCloseSharp className="w-6 h-6" />
                    </div>
                    <div className="flex gap-4 p-4 py-6 items-center">
                        <Image
                            src="/collection-feedback/dani.png"
                            width={500}
                            height={500}
                            alt=""
                            className="h-20 rounded-lg w-auto"
                        />
                        <div className="flex flex-col">
                            <div className="text-lg font-semibold">
                                Doodles #4143
                            </div>
                            <div className="text-gray-500">Doodles</div>
                        </div>
                    </div>
                    <div className="flex p-4 py-6 font-semibold text-lg justify-between">
                        <div>Sell price</div>
                        <div>0.99 WETH</div>
                    </div>
                    <div className="flex p-4 flex-col gap-1">
                        <div className="font-semibold text-md">
                            Leave a review
                        </div>
                        <textarea className="border rounded-xl text-lg p-2 px-4 min-h-32" />
                    </div>
                    <div className="p-4">
                        <div
                            onClick={onClose}
                            className="bg-[#D64F49] transitio9n duration-200 active:scale-95 text-white w-full font-bold p-3 text-lg rounded-xl flex justify-center items-center"
                        >
                            Floor it and GTFO
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

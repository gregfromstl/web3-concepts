import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function ImageCarousel({ images }: { images: string[] }) {
    return (
        <div>
            <div className="w-full bg-gray-200 h-72 relative">
                <div className="absolute top-4 right-4 rounded-full p-2 bg-white z-10 shadow-lg">
                    <ArrowsPointingOutIcon className="w-6 h-6 text-[#0DABCF]" />
                </div>
                <Image
                    src={images[0]}
                    fill
                    alt=""
                    className="object-cover object-center"
                />
            </div>
            <div className="flex justify-between max-w-[200px] mx-auto py-2 mt-2 items-center">
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div className="w-5 h-5 bg-[#0DABCF] flex items-center justify-center rounded-full">
                    <div className="w-1 h-1 bg-white rounded-full" />
                </div>
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
            </div>
        </div>
    );
}

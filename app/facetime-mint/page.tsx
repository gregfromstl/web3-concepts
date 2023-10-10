import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import HoldToMint from "@/components/facetime-mint/HoldToMint";

export default function Page() {
    return (
        <div className="h-screen max-w-[500px]  mx-auto overflow-hidden relative">
            <HoldToMint />
            <div className="absolute flex flex-col gap-4 bg-gradient-to-b from-black to-transparent top-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex gap-3.5 items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden relative">
                            <Image
                                src="/facetime-mint/face.jpg"
                                alt=""
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="flex flex-col -space-y-1">
                            <div className="text-white font-semibold text-lg">
                                Joe
                            </div>
                            <div className="text-gray-400">FaceTime Video</div>
                        </div>
                    </div>
                    <InformationCircleIcon className="w-7 h-7 text-gray-400" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex bg-white rounded-full justify-center w-12 h-12 items-center">
                        <Image
                            src="/facetime-mint/speaker.png"
                            width={95}
                            height={72.5}
                            alt=""
                            className="w-7 h-auto"
                        />
                    </div>
                    <div className="flex bg-white rounded-full justify-center w-12 h-12 items-center">
                        <Image
                            src="/facetime-mint/mic.png"
                            width={49}
                            height={79}
                            alt=""
                            className="w-4 h-auto"
                        />
                    </div>
                    <div className="flex bg-gray-800/50 text-white rounded-full justify-center w-12 h-12 items-center">
                        􀍎
                    </div>
                    <div className="flex bg-gray-800/50 rounded-full justify-center w-12 h-12 items-center">
                        <Image
                            src="/facetime-mint/share.png"
                            width={105.79}
                            height={67.2}
                            alt=""
                            className="w-7 translate-x-0.5 h-auto"
                        />
                    </div>
                    <div className="flex bg-[#EB5545] rounded-full justify-center w-12 h-12 items-center">
                        <Image
                            src="/facetime-mint/close.png"
                            width={61}
                            height={61}
                            alt=""
                            className="w-5 h-auto"
                        />
                    </div>
                </div>
            </div>
            <video
                className="h-full w-full object-cover"
                webkit-playsinline="true"
                playsInline
                preload="auto"
                autoPlay
                muted
            >
                <source src="/facetime-mint/facetime.mp4" type="video/mp4" />
            </video>
            <div className="flex w-full absolute bottom-6 left-0 right-0 p-4">
                <div className="w-14 h-14 border-4 rounded-full border-white p-0.5">
                    <div className="w-full h-full rounded-full bg-white" />
                </div>
            </div>
        </div>
    );
}

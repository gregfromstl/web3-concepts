"use client";
import Image from "next/image";

export default function VerifiedMedia() {
    return (
        <main className="h-screen max-w-[500px] p-8 overflow-hidden mx-auto relative bg-black">
            <div className="flex flex-col divide-y divide-gray-700">
                <div className="flex gap-4 items-start">
                    <Image
                        className="rounded-full w-12 h-12"
                        src="https://pbs.twimg.com/profile_images/1646330655784017921/xBrfH2y2_400x400.jpg"
                        alt=""
                        width={48}
                        height={48}
                    />
                    <div className="flex flex-col min-h-[100px] py-3">
                        <div className="text-gray-600 text-xl font-medium">
                            What is hapenning?!
                        </div>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">
                                    PNG, JPG, GIF up to 10MB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex justify-between items-center">
                    <Image
                        className="h-8 w-auto"
                        src="/verified-media/twitter-toolbar.png"
                        alt=""
                        width={489}
                        height={59}
                    />
                    <div className="bg-[#209BEC] px-5 py-1.5 rounded-full text-white font-bold">
                        Post
                    </div>
                </div>
            </div>
        </main>
    );
}

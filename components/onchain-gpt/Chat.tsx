// app/chat.tsx -- client component
"use client";

import Image from "next/image";
import { useChat } from "ai/react";

export default function MyComponent() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: "/onchain-gpt/api",
    });

    return (
        <div className="h-full flex flex-col w-full justify-end">
            <div className="flex h-full flex-col justify-end gap-2 py-4 overflow-y-scroll">
                {messages.map((m, index) => (
                    <div key={index} className="flex gap-2">
                        <div className="text-[#9B9AA0] font-medium py-2">
                            {m.role === "user" ? "User" : "AI"}
                        </div>
                        <div className="bg-[#1E1E1E] rounded-lg p-2">
                            {m.content}
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-1">
                <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Message"
                    className="bg-transparent border focus:ring-offset-0 placeholder-gray-700 border-gray-700 rounded-full w-full px-3 focus:ring-0 active:ring-0 h-full"
                />

                <div className="w-10 flex justify-end">
                    <button
                        type="submit"
                        className="bg-[#A070FE] flex items-center justify-center w-8 h-8 rounded-full"
                    >
                        <Image
                            src="/onchain-gpt/arrow.svg"
                            width={20}
                            height={20}
                            alt=""
                            className="w-3 h-auto"
                        />
                    </button>
                </div>
            </form>
        </div>
    );
}

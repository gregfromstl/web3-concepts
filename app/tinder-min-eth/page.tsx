import ProfileStack from "@/components/tinder-stake/ProfileStack";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function TinerStakePage() {
    return (
        <main className="h-screen p-2 pb-24 max-w-[500px] mx-auto relative">
            <div className="flex p-4 justify-between items-center">
                <Image
                    src="/tinder-min-eth/vitalik.jpg"
                    width={50}
                    height={50}
                    alt=""
                    className="rounded-full w-10 h-10"
                />
                <Image
                    src="/tinder-min-eth/logo.svg"
                    width={50}
                    height={50}
                    className="w-8 h-8"
                    alt="Tinder logo"
                />
                <AdjustmentsHorizontalIcon className="w-8 h-8" />
            </div>
            <ProfileStack />
        </main>
    );
}

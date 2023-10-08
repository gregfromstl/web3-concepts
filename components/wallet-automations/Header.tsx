import Image from "next/image";
import { Wallet } from "@/types/wallet-automations";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header({ wallet }: { wallet: Wallet }) {
    return (
        <div className="flex bg-white justify-between items-center px-8 pt-8">
            <div className="flex items-center gap-3">
                <Image
                    alt=""
                    className="rounded-full"
                    src={wallet.image}
                    width={40}
                    height={40}
                />
                <div className="text-2xl font-bold">
                    {wallet.ens || wallet.address}
                </div>
            </div>
            <div>
                <MagnifyingGlassIcon className="w-8 h-8 text-gray-500" />
            </div>
        </div>
    );
}

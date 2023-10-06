import { ArrowLeftIcon, ShareIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function Header({
    make,
    model,
}: {
    make: string;
    model: string;
}) {
    return (
        <div className="bg-[#00609D] flex text-white items-center py-4 px-4 justify-between">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
            <div className="text-center absolute left-0 right-0">
                <div className="text-xs font-light">{make}</div>
                <div className="text-sm mt-1 font-semibold">{model}</div>
            </div>
            <div className="flex items-center gap-4">
                <ShareIcon className="w-8 h-8 text-white" />
                <HeartIcon className="w-8 h-8 text-white" />
            </div>
        </div>
    );
}

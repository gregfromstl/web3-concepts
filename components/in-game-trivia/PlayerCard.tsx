import Image from "next/image";

export default function PlayerCard({
    headshot,
    name,
    team,
    logo,
    isCorrect,
    isEliminated,
    onSelect,
}: {
    headshot: string;
    name: string;
    team: string;
    logo: string;
    isCorrect?: boolean;
    isEliminated?: boolean;
    onSelect?: () => void;
}) {
    return (
        <div
            onClick={onSelect}
            className={`border active:scale-95 duration-200 transition shadow relative overflow-hidden border-gray-800 rounded-md ${
                isCorrect ? "border-green-500 shadow-xl scale-105" : ""
            } ${isEliminated ? "opacity-25" : ""}`}
        >
            <div className="">
                <Image
                    className="-translate-x-6 relative z-10"
                    src={headshot}
                    width={200}
                    height={200}
                    alt=""
                />
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt=""
                    className="absolute -right-4 -top-4 h-28 w-auto opacity-25"
                />
            </div>
            <div className="text-white px-2 py-1 flex flex-col -space-y-1 text-center bg-gray-800">
                <div>{name}</div>
                <div className="text-xs opacity-25">{team}</div>
            </div>
        </div>
    );
}

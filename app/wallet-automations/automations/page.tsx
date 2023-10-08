import Image from "next/image";
import { Automation } from "@/types/wallet-automations";
import AutomationRow from "@/components/wallet-automations/AutomationRow";

const initialAutomations: Automation[] = [
    {
        id: 1,
        type: "Stake",
        name: "Stake new KRAUSE",
        asset: {
            category: "Tokens",
            name: "KRAUSE",
            image: "/wallet-categories/krause.png",
            amount: "100%",
        },
    },
    {
        id: 2,
        type: "Burn",
        name: "Stake new KRAUSE",
        asset: {
            category: "Tokens",
            name: "PRTC",
            image: "/wallet-categories/prtc.jpeg",
            amount: "25%",
        },
    },
    {
        id: 3,
        type: "Stake",
        name: "Stake some PRTC",
        asset: {
            category: "Tokens",
            name: "PRTC",
            image: "/wallet-categories/prtc.jpeg",
            amount: "75%",
        },
    },
    {
        id: 4,
        type: "Transfer",
        name: "Estimated taxes",
        asset: {
            category: "Tokens",
            name: "USDC",
            image: "/wallet-categories/usdc.png",
            amount: "35%",
        },
    },
];

export default function AutomationsPage() {
    const automationCategories: { [key: string]: Automation[] } = {};
    initialAutomations.forEach((automation) => {
        if (automationCategories[automation.asset.name]) {
            automationCategories[automation.asset.name].push(automation);
        } else {
            automationCategories[automation.asset.name] = [automation];
        }
    });

    return (
        <div className="flex flex-col gap-8">
            {Object.keys(automationCategories).map((category, i) => (
                <div key={category}>
                    <div className="bg-blue-500 px-8 py-4 text-white text-sm font-semibold">
                        <div className="flex text-xl items-center gap-3">
                            <Image
                                src={
                                    automationCategories[category][0].asset
                                        .image
                                }
                                alt=""
                                width={100}
                                height={100}
                                className="rounded-full w-8 h-8 border"
                            />
                            {category}
                        </div>
                    </div>
                    <div className="flex flex-col divide-y divide-gray-200">
                        {automationCategories[category].map((automation, j) => (
                            <AutomationRow
                                key={j}
                                initialAutomation={automation}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

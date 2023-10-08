import { Nunito } from "next/font/google";
import Header from "@/components/wallet-automations/Header";
import Tabs from "@/components/wallet-automations/Tabs";
import { WalletIcon, BoltIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";

const nunito = Nunito({ subsets: ["latin"] });

export default function WalletAutomationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className={nunito.className}>
            <div className="max-h-screen overflow-y-scroll max-w-[500px] mx-auto relative">
                <div className="sticky bg-white top-0 z-10">
                    <Header
                        wallet={{
                            address: "0x1234",
                            ens: "gregfromstl.eth",
                            image: "https://pbs.twimg.com/profile_images/1646330655784017921/xBrfH2y2_400x400.jpg",
                        }}
                    />
                    <Tabs
                        tabs={[
                            {
                                id: 1,
                                label: "Assets",
                                icon: <WalletIcon className="w-6 h-6" />,
                                link: "/wallet-automations/assets",
                            },
                            {
                                id: 2,
                                icon: <BoltIcon className="w-6 h-6" />,
                                label: "Automations",
                                link: "/wallet-automations/automations",
                            },
                            {
                                id: 3,
                                label: "Settings",
                                icon: <Cog6ToothIcon className="w-6 h-6" />,
                                link: "/wallet-automations/settings",
                            },
                        ]}
                    />
                </div>
                <div className="relative h-full">{children}</div>
            </div>
        </main>
    );
}

import Assets from "@/components/wallet-automations/Assets";

const assets = [
    {
        category: "Tokens",
        name: "USDC",
        image: "/wallet-categories/usdc.png",
        amount: "4,000",
    },
    {
        category: "Tokens",
        name: "USDT",
        image: "/wallet-categories/usdt.png",
        amount: "1,000",
    },
    {
        category: "Tokens",
        name: "KRAUSE",
        image: "/wallet-categories/krause.png",
        amount: "10,000",
    },
    {
        category: "Tokens",
        name: "PRTC",
        image: "/wallet-categories/prtc.jpeg",
        amount: "12,000",
    },
    {
        category: "Tokens",
        name: "MOG",
        image: "/wallet-categories/mog.webp",
        amount: "500,000",
    },
    {
        category: "PFPs",
        name: "CryptoPunk",
        image: "/wallet-categories/punk.avif",
    },
    {
        category: "PFPs",
        name: "Milady",
        image: "/wallet-categories/milady.png",
    },
    {
        category: "PFPs",
        name: "DeGods",
        image: "/wallet-categories/degod.png",
        amount: "#1204",
    },
    {
        category: "ENS",
        name: "gregfromstl",
        image: "/wallet-categories/ens.jpeg",
    },
    {
        category: "RWA",
        name: "Parcel 0",
        image: "/wallet-categories/parcel0.avif",
    },
    {
        category: "RWA",
        name: "Parcel 0",
        image: "/wallet-categories/parcel0_2.avif",
    },
    {
        category: "Tickets",
        name: "build_dream",
        image: "/wallet-categories/dream.avif",
    },
    {
        category: "Tickets",
        name: "Krause House",
        image: "/wallet-categories/kh.png",
    },
    {
        category: "ENS",
        name: "bewater",
        image: "/wallet-categories/ens.jpeg",
    },
];

export default function AssetsPage() {
    return (
        <div className="w-full px-8">
            <Assets assets={assets} />
        </div>
    );
}

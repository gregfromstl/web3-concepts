import { Listing } from "@/types/onchain-car-history";
import ImageCarousel from "./ImageCarousel";
import History from "./History";

const formatUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

export default function Listing({ listing }: { listing: Listing }) {
    return (
        <div className="bg-[#F5F9FC]">
            <div className="bg-white flex p-4 justify-between">
                <div className="max-w-[150px]">
                    <h1 className="font-[#163553] text-lg font-semibold uppercase">
                        {listing.car.year} {listing.car.make}{" "}
                        {listing.car.model}
                    </h1>
                    <p className="text-gray-400 text-xs">{listing.car.type}</p>
                </div>
                <div className="flex flex-col items-end">
                    <h2 className="text-[#1C9FD3] flex items-center text-2xl">
                        <span className="text-base">$</span>
                        {formatUSD.format(listing.asking).replace("$", "")}
                    </h2>
                    <p className="text-gray-400 text-xs">
                        {listing.car.mileage / 1000}k miles
                    </p>
                </div>
            </div>
            <ImageCarousel images={listing.images} />
            <div className="mt-4">
                <History history={listing.history} />
            </div>
        </div>
    );
}

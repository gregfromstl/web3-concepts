import Header from "@/components/onchain-car-history/Header";
import ListingScreen from "@/components/onchain-car-history/Listing";
import { Listing } from "@/types/onchain-car-history";

const listing: Listing = {
    id: "1",
    car: {
        model: "Camry",
        make: "Toyota",
        year: 2021,
        type: "SE Sedan 4D",
        mileage: 27000,
    },
    asking: 26990,
    images: ["/onchain-car-history/camry.webp"],
    history: [
        {
            title: "Regular Maintenance",
            date: "2023-02-01",
            id: "1",
            description: "Oil change, tire rotation, and inspection",
            hash: "0x1234",
            icon: "/onchain-car-history/car.png",
            location: "Joe's Auto Shop",
        },
        {
            title: "Regular Repairs",
            date: "2022-08-09",
            id: "2",
            description: "Replace brakes and rotors",
            hash: "0x1234",
            icon: "/onchain-car-history/engine.png",
            location: "Toyota Dealership",
        },
        {
            title: "Major Accident",
            date: "2022-01-01",
            id: "3",
            description:
                "Significant collision with telephone pole. Replaced front bumper and hood.",
            hash: "0x1234",
            icon: "/onchain-car-history/warning.png",
            location: "Toyota Dealership",
        },
        {
            title: "Regular Maintenance",
            date: "2021-02-01",
            id: "4",
            icon: "/onchain-car-history/car.png",
            description: "Oil change, tire rotation, and inspection",
            hash: "0x1234",
        },
        {
            title: "Car Purchased",
            date: "2020-12-01",
            id: "5",
            description: "Purchased from Toyota Dealership",
            icon: "/onchain-car-history/key.png",
            hash: "0x1234",
        },
    ],
};

export default function OnChainCarHistoryy() {
    return (
        <div className="h-screen max-w-[500px] mx-auto relative">
            <Header make={listing.car.make} model={listing.car.model} />
            <ListingScreen listing={listing} />
        </div>
    );
}

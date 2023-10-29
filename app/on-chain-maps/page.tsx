"use client";
import Script from "next/script";
import "mapbox-gl/dist/mapbox-gl.css";

import Map from "@/components/on-chain-maps/Map";
import NearMe from "@/components/on-chain-maps/NearMe";
import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

export default function OnChainMaps() {
    const [selectedLocation, setSelectedLocation] = useState<
        string | undefined
    >(undefined);
    const [customCoordinates, setCustomCoordinates] = useState<{
        lng: number;
        lat: number;
        zoom: number;
    } | null>(null);

    useEffect(() => {
        if (selectedLocation) {
            setCustomCoordinates({ lng: -122.4169, lat: 37.7957, zoom: 14 });
        }
    }, [selectedLocation]);

    return (
        <main className="h-screen max-w-[500px] overflow-hidden mx-auto relative">
            <div className="absolute top-0 items-center z-10 p-4 right-0 left-0 flex justify-between text-3xl font-bold">
                <div>
                    {selectedLocation && (
                        <ChevronLeftIcon className="w-8 h-8" />
                    )}
                </div>
                <div>{selectedLocation && <div className="w-8" />}</div>
            </div>
            <Script src="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js" />
            <Map location={customCoordinates} />
            <NearMe
                onSelect={(c: string) => setSelectedLocation(c)}
                selected={selectedLocation}
            />
        </main>
    );
}

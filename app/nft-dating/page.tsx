"use client";
import Script from "next/script";
import "mapbox-gl/dist/mapbox-gl.css";

import Map from "@/components/nft-dating/Map";
import CollectionsNearMe from "@/components/nft-dating/CollectionsNearMe";
import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

export default function NFTDatingPage() {
    const [selectedCollection, setSelectedCollection] = useState<
        string | undefined
    >(undefined);
    const [customCoordinates, setCustomCoordinates] = useState<{
        lng: number;
        lat: number;
        zoom: number;
    } | null>(null);

    useEffect(() => {
        if (selectedCollection) {
            setCustomCoordinates({ lng: -122.17785, lat: 37.71493, zoom: 15 });
        }
    }, [selectedCollection]);

    return (
        <main className="h-screen max-w-[500px] overflow-hidden mx-auto relative">
            <div className="absolute top-0 items-center z-10 p-4 right-0 left-0 flex justify-between text-3xl font-bold">
                <div>
                    {selectedCollection && (
                        <ChevronLeftIcon className="w-8 h-8" />
                    )}
                </div>
                {selectedCollection || "Explore"}
                <div>{selectedCollection && <div className="w-8" />}</div>
            </div>
            <Script src="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js" />
            <Map location={customCoordinates} />
            <CollectionsNearMe
                onSelectCollection={(c: string) => setSelectedCollection(c)}
                selected={selectedCollection}
            />
        </main>
    );
}

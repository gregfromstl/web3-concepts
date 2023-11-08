"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { AnimatePresence, motion } from "framer-motion";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

export default function Map() {
    const mapContainer = useRef<any>(null);
    const map = useRef<any>(null);

    const [lng, setLng] = useState(-122.4258);
    const [lat, setLat] = useState(37.7412);
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/gregfromstl/cln4nq0li006201ps13ix55zk",
            center: [lng, lat],
            zoom: zoom,
        });
        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    }, [map]);

    return (
        <div className="absolute top-0 -bottom-12 left-0 right-0">
            <div className="relative w-full h-full">
                <AnimatePresence>
                    {/* {location && (
                        <div className="absolute left-0 right-0 mx-auto w-36 flex items-center top-40">
                            <motion.div
                                key="innout"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: 1.2 }}
                                className="bg-[#F6C44B] relative z-20 border-2 border-white text-center rounded-2xl text-2xl p-3 shadow-2xl font-bold"
                            >
                                In-N-Out
                            </motion.div>
                            <motion.div
                                initial={{ rotate: 0, opacity: 0, y: 0 }}
                                animate={{ rotate: 10, opacity: 1, y: -50 }}
                                transition={{ duration: 0.2, delay: 1.4 }}
                                key="innout-logo"
                                className="overflow-hidden w-16 h-16 z-10 rounded-2xl flex items-center justify-center shadow-xl bg-white absolute right-11"
                            >
                                <Image
                                    fill
                                    src="/on-chain-maps/innout.webp"
                                    className=""
                                    alt="In-N-Out logo"
                                />
                            </motion.div>
                        </div>
                    )} */}
                </AnimatePresence>
                <div
                    ref={mapContainer}
                    className="map-container h-full w-full"
                />
            </div>
        </div>
    );
}

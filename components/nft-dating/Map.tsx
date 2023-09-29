"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { AnimatePresence, motion } from "framer-motion";

mapboxgl.accessToken =
    "pk.eyJ1IjoiZ3JlZ2Zyb21zdGwiLCJhIjoiY2xuNG45cWxhMDFrczJpbXA1MG1wd3AxaiJ9.hM24NR8lqQq_Zmy12S3F7Q";

export default function Map({
    location,
}: {
    location: {
        lng: number;
        lat: number;
        zoom: number;
    } | null;
}) {
    const mapContainer = useRef<any>(null);
    const map = useRef<any>(null);

    const [lng, setLng] = useState(-122.38746);
    const [lat, setLat] = useState(37.76701);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (!location) return;
        map.current?.flyTo({
            center: [location.lng, location.lat],
            zoom: location.zoom,
            speed: 3,
        });
    }, [location]);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/gregfromstl/cln4nybg5006401r72fzydxaj",
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
                    {location && (
                        <div className="absolute left-0 right-0 mx-auto w-32 flex items-center top-64">
                            <motion.div
                                key="walmart"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: 1.2 }}
                                className="bg-[#F6C44B] relative z-20 border-2 border-white text-center rounded-2xl text-2xl p-3 shadow-2xl font-bold"
                            >
                                Walmart
                            </motion.div>
                            <motion.div
                                initial={{ rotate: 0, opacity: 0, y: 0 }}
                                animate={{ rotate: 20, opacity: 1, y: -50 }}
                                transition={{ duration: 0.2, delay: 1.4 }}
                                key="walmart-logo"
                                className="p-3 w-14 h-14 z-10 rounded-2xl flex items-center justify-center shadow-lg bg-[#1A75CE] absolute right-2"
                            >
                                <Image
                                    src="/nft-dating/walmart.svg"
                                    width={50}
                                    height={50}
                                    className=""
                                    alt="Walmart logo"
                                />
                            </motion.div>
                            <motion.div
                                key="69"
                                initial={{ rotate: -30, opacity: 0, y: -80 }}
                                animate={{ rotate: -15, opacity: 1, y: -50 }}
                                transition={{ duration: 0.2, delay: 1.6 }}
                                className="p-3 w-14 h-14 text-white flex items-center justify-center rounded-2xl shadow-lg z-30 bg-black text-2xl font-semibold absolute left-3"
                            >
                                69
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
                <div
                    ref={mapContainer}
                    className="map-container h-full w-full"
                />
            </div>
        </div>
    );
}

"use client";
import Script from "next/script";
import "mapbox-gl/dist/mapbox-gl.css";

import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Map from "@/components/decentralized-delivery/Map";
import Feed from "@/components/decentralized-delivery/Feed";

export default function DecentralizedDelivery() {
    return (
        <main className="h-screen max-w-[500px] overflow-hidden mx-auto relative p-4">
            <Script src="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js" />
            <div className="relative shadow w-full h-[350px] rounded-2xl overflow-hidden">
                <Map />
            </div>
            <Feed />
        </main>
    );
}

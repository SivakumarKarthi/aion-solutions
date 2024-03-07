"use client";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function Map() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <div>
      <LoadScript googleMapsApiKey={key}>
        <GoogleMap />
      </LoadScript>
    </div>
  );
}

"use client";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function Map(props: any) {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <div>
      <LoadScript googleMapsApiKey={key}>
        <GoogleMap
          center={props.center}
          zoom={props.zoom}
          mapContainerStyle={props.style}
        />
      </LoadScript>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Map, { Source, Layer } from "@vis.gl/react-maplibre"; // ✅ Correct for newer versions
import "mapbox-gl/dist/mapbox-gl.css";

const DashboardStation = () => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/get-ndvi?date=2024-03-23", {
            method: "GET",
            headers: {
                "Accept": "image/png"
            }
        }) // Backend API
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.blob();
            })
            .then((blob) => {
                const url = URL.createObjectURL(blob);
                setImageUrl(url);
            })
            .catch((error) => console.error("Error fetching NDVI:", error));
    }, []);

    return (
        <Map
            mapboxAccessToken="pk.eyJ1IjoiYXJhdmluZG1pcmFzIiwiYSI6ImNtOGNwcnFvbjA1bXQya3NiYzJzY2thcnQifQ.6U5_4s3cggHazNzl8lnJ-g"
            initialViewState={{
                longitude: 76.9500,
                latitude: 10.3000,
                zoom: 10
            }}
            style={{ width: "100vw", height: "100vh" }}
            mapStyle="https://api.mapbox.com/styles/v1/aravindmiras/cm8o31r8v003301shft5w8nzr.html?title=false&access_token=pk.eyJ1IjoiYXJhdmluZG1pcmFzIiwiYSI6ImNtOGNwcnFvbjA1bXQya3NiYzJzY2thcnQifQ.6U5_4s3cggHazNzl8lnJ-g&zoomwheel=false#2/38/-34"
        >
            {imageUrl && (
                <Source
                    id="ndvi-layer"
                    type="image"
                    url={imageUrl}
                    coordinates={[
                        [76.9000, 10.3500], // NW
                        [77.0000, 10.3500], // NE
                        [77.0000, 10.2500], // SE
                        [76.9000, 10.2500]  // SW
                    ]}
                />
            )}
        </Map>
    );
};

export default DashboardStation;

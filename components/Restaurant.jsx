'use client';

import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';


export default function GoogleMaps() {
    const [location, setLocation] = useState();
    useEffect(() => {
        // Get user's location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setLocation({ latitude, longitude });
            },
            (error) => {
                console.error('Error getting location:', error);
            }
            );
        }
    }, []);
    const mapRef = React.useRef(null);

    
    useEffect(() => {
        const initializeMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
                version: 'quartely',
            });
            const { Map } = await loader.importLibrary('maps');
            
            console.log(location);
            const locationInMap = {
                lat: location?.latitude,
                lng: location?.longitude,
            };

            // MARKER
            const { Marker } = (await loader.importLibrary(
                'marker'
            ));

            const options = {
                center: locationInMap,
                zoom: 15,
                mapId: 'NEXT_MAPS_TUTS',
            };

            const map = new Map(mapRef.current, options);

            // add the marker in the map
            const marker = new Marker({
                map: map,
                position: locationInMap,
            });

            
        };

        if(location) {
            initializeMap();
        }
    }, [location]);
    {!location && <div>Loading...</div>}
    return <div className="h-[600px]" ref={mapRef} />;
}
import React, { useEffect, useState } from 'react';
import GeoRasterLayer from 'georaster-layer-for-leaflet';
import parse_georaster from 'georaster';
import L, { CRS } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function DashboardMap({ geotiffFile }: { geotiffFile: string }) {
  useEffect(() => {
    const map = L.map('mapid', {
      crs: CRS.Simple
    });

    fetch(geotiffFile)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        console.log('ONE');
        parse_georaster(arrayBuffer).then((georaster: any) => {
          console.log('georaster:', georaster);

          var layer = new GeoRasterLayer({
            georaster: georaster,
            opacity: 1,
            resolution: 128
          });
          layer.addTo(map);

          map.fitBounds(layer.getBounds());
        });
      });

    return () => {
      map.remove();
    };
  }, [geotiffFile]);

  return <div id="mapid" style={{ width: '100%', height: '100%' }} />;
}

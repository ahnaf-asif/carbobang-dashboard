import React, { useEffect, useState } from 'react';
import GeoRasterLayer from 'georaster-layer-for-leaflet';
import parse_georaster from 'georaster';
import L, { CRS } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function DashboardMap({
  geotiffFile
}: {
  geotiffFile: { label: string; file: string; button: string; text: string };
}) {
  useEffect(() => {
    const map = L.map('mapid', {
      crs: CRS.Simple
    }).setZoom(0);

    fetch(geotiffFile.file)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        parse_georaster(arrayBuffer).then((georaster: any) => {
          var layer = new GeoRasterLayer({
            georaster: georaster,
            opacity: 1,
            resolution: 128
          });
          layer.addTo(map);

          const originalBounds = layer.getBounds();

          // Define the padding ratio (adjust as needed)
          const paddingRatio = 0.5; // 50% extra space

          const paddedBounds = originalBounds.pad(paddingRatio);

          map.fitBounds(paddedBounds);
        });
      });

    return () => {
      map.remove();
    };
  }, [geotiffFile]);

  return <div id="mapid" style={{ width: '100%', height: '100%' }} />;
}

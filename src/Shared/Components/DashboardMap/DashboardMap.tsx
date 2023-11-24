import React, { useEffect, useState } from 'react';
import GeoRasterLayer from 'georaster-layer-for-leaflet';
import parse_georaster from 'georaster';
import L, { CRS } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Loading from '../Loading/Loading';
import { Stack } from '@mantine/core';

export default function DashboardMap({
  geotiffFile
}: {
  geotiffFile: { label: string; file: string; button: string; text: string };
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const map = L.map('mapid', {
      crs: CRS.Simple
    }).setZoom(0);

    fetch(geotiffFile.file)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        try {
          parse_georaster &&
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
              setLoading(false);
            });
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      });

    return () => {
      map.remove();
    };
  }, [geotiffFile]);

  return (
    <>
      {loading && (
        <Stack align="center" justify="center" style={{ height: '500px', width: '800px' }}>
          <Loading />
        </Stack>
      )}
      <div id="mapid" style={{ width: '100%', height: '100%', opacity: loading ? '0' : '1' }} />
    </>
  );
}

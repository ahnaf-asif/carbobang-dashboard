import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { Html, useProgress } from '@react-three/drei';
import { Environment, OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { DDSLoader } from 'three-stdlib';
import { Suspense } from 'react';

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export default function Hero3DModel() {
  const [colorMap, normalMap, roughnessMap, metalnessMap] = useLoader(TextureLoader, [
    'model.jpg',
    'model.jpg',
    'model.jpg',
    'model.jpg'
  ]);
  const materials = useLoader(MTLLoader, 'model.mtl');
  const obj = useLoader(OBJLoader, 'model.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.2} />
        <directionalLight />
        <primitive
          object={obj}
          scale={0.5}
          map={colorMap}
          rotation={[2, 2, 0]}
        />
        <meshStandardMaterial map={colorMap} />
        <OrbitControls />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}

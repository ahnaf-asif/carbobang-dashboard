import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { DDSLoader } from 'three-stdlib';
import { Suspense } from 'react';

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

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
    <Canvas camera={{ position: [0, 0, 4], fov: 100 }}>
      <Suspense>
        <ambientLight intensity={0.2} />
        <directionalLight />
        <primitive object={obj} scale={0.1} map={colorMap} />
        <meshStandardMaterial map={colorMap} />
        <OrbitControls enableZoom={true} enablePan={false} maxZoom={0.2} zoom0={0.1} />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}

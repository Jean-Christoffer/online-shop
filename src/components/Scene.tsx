// @ts-nocheck
"use client"
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useFBX, useTexture, useProgress, Html } from "@react-three/drei";
import gsap from "gsap";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const Box = ({ modelPath, texturePaths,direction }) => {
  let fbx = useFBX(modelPath);
  const textures = useTexture(texturePaths);

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [scale, setScale] = useState(window.innerWidth <= 600 ? 0.017 : 0.011);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth <= 600 ? 0.017 : 0.011);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fbx.traverse((child) => {
      if (child.isMesh) {
        child.material.map = textures.map;
        child.material.displacementMap = textures.displacementMap;
        child.material.normalMap = textures.normalMap;
        child.material.roughnessMap = textures.roughnessMap;
        child.material.aoMap = textures.aoMap;
        child.material.needsUpdate = true;
      }
    });
  }, [fbx, textures]);

  const meshRef = useRef();
  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.rotation, {
        y: `${direction}=360`,
        duration: 1000,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <primitive
        object={fbx}
        scale={active ? scale + 0.002 : scale}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        ref={meshRef}
      />
    </Suspense>
  );
};

export default function Scene({ modelPath, texturePaths,direction }) {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <ambientLight intensity={0.3} color={"#ff0099"} />
      <spotLight position={[8, 7, 10]} angle={0.15} penumbra={1} decay={0} intensity={1.5} />

      <Box modelPath={modelPath} texturePaths={texturePaths} direction={direction} />
    </Canvas>
  );
}

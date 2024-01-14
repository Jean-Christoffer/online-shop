"use client";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, } from "@react-three/fiber";
import { useFBX, useTexture,useProgress,Html} from "@react-three/drei";
import { useEffect } from "react";
import gsap from "gsap";

export default function Scene() {
  const Box = () => {

    const textures  = useTexture({
        map: 'BTC_Albedo.png',
        heightMap: 'BTC_Height.png',
        normalMap: 'BTC_Normal.png',
        roughnessMap: 'BTC_Roughness.png',
        aoMap: 'BTC_AO.png',
      })
    let fbx = useFBX("./BTC_model.fbx");

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const [scale, setScale] = useState(window.innerWidth <= 600 ? 0.017 : 0.011);
    function Loader()   {
      const {  progress } = useProgress()
      return <Html center>{progress} % loaded</Html>
    }
    useEffect(() => {
      const handleResize = () => {
        setScale(window.innerWidth <= 600 ? 0.017 : 0.011);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
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
          y: "-=360",
          duration: 1000,
          ease: "none",
          repeat: -1,
        });
      }
    }, []);
    return (
      <>
        <Suspense fallback={<Loader />}>
        <primitive
        
          object={fbx}
          scale={active ? scale + 0.002 : scale}
          onClick={(event) => setActive(!active)}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
          ref={meshRef}
        />
        </Suspense>
      </>
    );
  };

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
 
      <ambientLight intensity={0.3} color={"#ff0099"} />
        <spotLight
        position={[8, 7, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={1.5}
        />
        <Box />

    </Canvas>
  );
}

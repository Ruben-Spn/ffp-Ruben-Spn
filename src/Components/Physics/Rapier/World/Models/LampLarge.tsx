/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 lampLarge.glb -t 
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder040: THREE.Mesh;
    Cylinder040_1: THREE.Mesh;
  };
  materials: {
    ["Material.080"]: THREE.MeshStandardMaterial;
    ["Material.084"]: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/Models/lampLarge.glb`
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.7, 1, 5.5]}
        rotation={[0, Math.PI / 8, 0]}
        scale={[0.421, 1, 0.421]}
      >
        <mesh
          geometry={nodes.Cylinder040.geometry}
          material={materials["Material.080"]}
        />
        <mesh
          geometry={nodes.Cylinder040_1.geometry}
          material={materials["Material.084"]}
        />
        <pointLight
          position={[0, 2.5, 0]}
          intensity={1}
          distance={100}
          decay={2}
          color={0xffeedd}
        />
      </group>
    </group>
  );
}

useGLTF.preload(`${process.env.PUBLIC_URL}/Models/lampLarge.glb`);

export { Model as LampLarge };

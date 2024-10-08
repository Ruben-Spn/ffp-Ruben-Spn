/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 monitor2.glb -t 
*/

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import {
  cursorActiveHandler,
  cursorInactiveHandler,
} from "Components/UserInterface/CursorOverlay";

type GLTFResult = GLTF & {
  nodes: {
    Cube042: THREE.Mesh;
    Cube042_1: THREE.Mesh;
    Cube042_2: THREE.Mesh;
    Cube042_3: THREE.Mesh;
  };
  materials: {
    ["PC BLACK.001"]: THREE.MeshStandardMaterial;
    ["PC buttons black.001"]: THREE.MeshStandardMaterial;
    ["PC buttons white.001"]: THREE.MeshStandardMaterial;
    ["wallpaper-2"]: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/Models/monitor2.glb`
  ) as GLTFResult;
  const [isOn, setIsOn] = useState("");
  window.addEventListener("storage", () => {
    setIsOn(window.localStorage.getItem("Pc") || "");
  });
  return (
    <group
      {...props}
      dispose={null}
      onPointerEnter={cursorActiveHandler}
      onPointerLeave={cursorInactiveHandler}
      onPointerOut={cursorInactiveHandler}
      onPointerOver={cursorActiveHandler}
      onClick={() => {
        if (isOn === "on") {
          window.open("https://github.com/Ruben-Spn?tab=repositories");
        }
      }}
    >
      <group
        position={[-4.5, 1.9, 5.5]}
        rotation={[0, Math.PI / 2.5, 0]}
        scale={2.5}
      >
        <mesh
          geometry={nodes.Cube042.geometry}
          material={materials["PC BLACK.001"]}
        />
        <mesh
          geometry={nodes.Cube042_1.geometry}
          material={materials["PC buttons black.001"]}
        />
        <mesh
          geometry={nodes.Cube042_2.geometry}
          material={materials["PC buttons white.001"]}
        />
        <mesh
          geometry={nodes.Cube042_3.geometry}
          material={materials[isOn === "on" ? "wallpaper-2" : "PC BLACK.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(`${process.env.PUBLIC_URL}/Models/monitor2.glb`);

export { Model as Monitor2 };

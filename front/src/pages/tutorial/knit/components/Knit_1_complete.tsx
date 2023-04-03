/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 knit_1_complete.glb -t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_8: THREE.Mesh
    niddle: THREE.Mesh
    niddle001: THREE.Mesh
    topring: THREE.Mesh
    bottomring: THREE.Mesh
    topring001: THREE.Mesh
    bottomring001: THREE.Mesh
    topring002: THREE.Mesh
    bottomring002: THREE.Mesh
    topring003: THREE.Mesh
    bottomring003: THREE.Mesh
    topring004: THREE.Mesh
    bottomring004: THREE.Mesh
    topring005: THREE.Mesh
    bottomring005: THREE.Mesh
    topring006: THREE.Mesh
    bottomring006: THREE.Mesh
    topring007: THREE.Mesh
    bottomring007: THREE.Mesh
    topring008: THREE.Mesh
    bottomring008: THREE.Mesh
    topring009: THREE.Mesh
    bottomring009: THREE.Mesh
    topring010: THREE.Mesh
    bottomring010: THREE.Mesh
    topring011: THREE.Mesh
    bottomring011: THREE.Mesh
    topring012: THREE.Mesh
    bottomring012: THREE.Mesh
    topring013: THREE.Mesh
    bottomring013: THREE.Mesh
    topring014: THREE.Mesh
    bottomring014: THREE.Mesh
    topring015: THREE.Mesh
    bottomring015: THREE.Mesh
  }
  materials: {
    blinn2: THREE.MeshStandardMaterial
    niddle1: THREE.MeshStandardMaterial
    knit_fabric: THREE.MeshStandardMaterial
  }
}

export function Knit_1_complete(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/knit/knit_1_complete.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[-5.36, -1.82, 2.62]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_8.geometry} material={materials.blinn2} scale={0.01} />
      </group>
      <mesh geometry={nodes.niddle.geometry} material={materials.niddle1} position={[-1.87, 0.07, 2.95]} rotation={[0.24, -0.17, -2.06]} scale={[-0.1, -1.81, -0.1]} />
      <mesh geometry={nodes.niddle001.geometry} material={materials.niddle1} position={[-3.72, -0.29, 2.05]} rotation={[0.23, -0.88, 2.5]} scale={[-0.1, -1.81, -0.1]} />
      <mesh geometry={nodes.topring.geometry} material={materials.knit_fabric} position={[4.25, 2.77, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring.geometry} material={materials.knit_fabric} position={[-4.34, 3.43, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring001.geometry} material={materials.knit_fabric} position={[4.16, 2.81, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring001.geometry} material={materials.knit_fabric} position={[-4.42, 3.48, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring002.geometry} material={materials.knit_fabric} position={[4.07, 2.86, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring002.geometry} material={materials.knit_fabric} position={[-4.51, 3.53, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring003.geometry} material={materials.knit_fabric} position={[3.99, 2.91, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring003.geometry} material={materials.knit_fabric} position={[-4.59, 3.57, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring004.geometry} material={materials.knit_fabric} position={[3.89, 2.96, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring004.geometry} material={materials.knit_fabric} position={[-4.69, 3.62, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring005.geometry} material={materials.knit_fabric} position={[3.81, 3, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring005.geometry} material={materials.knit_fabric} position={[-4.77, 3.67, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring006.geometry} material={materials.knit_fabric} position={[3.72, 3.05, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring006.geometry} material={materials.knit_fabric} position={[-4.86, 3.71, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring007.geometry} material={materials.knit_fabric} position={[3.64, 3.1, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring007.geometry} material={materials.knit_fabric} position={[-4.95, 3.76, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring008.geometry} material={materials.knit_fabric} position={[3.54, 3.15, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring008.geometry} material={materials.knit_fabric} position={[-5.04, 3.81, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring009.geometry} material={materials.knit_fabric} position={[3.45, 3.2, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring009.geometry} material={materials.knit_fabric} position={[-5.13, 3.86, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring010.geometry} material={materials.knit_fabric} position={[3.36, 3.24, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring010.geometry} material={materials.knit_fabric} position={[-5.22, 3.91, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring011.geometry} material={materials.knit_fabric} position={[3.28, 3.29, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring011.geometry} material={materials.knit_fabric} position={[-5.3, 3.95, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring012.geometry} material={materials.knit_fabric} position={[3.19, 3.34, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring012.geometry} material={materials.knit_fabric} position={[-5.4, 4, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring013.geometry} material={materials.knit_fabric} position={[3.1, 3.38, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring013.geometry} material={materials.knit_fabric} position={[-5.48, 4.05, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring014.geometry} material={materials.knit_fabric} position={[3.01, 3.43, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring014.geometry} material={materials.knit_fabric} position={[-5.57, 4.1, 4.03]} rotation={[0, 0, -0.49]} scale={0.23} />
      <mesh geometry={nodes.topring015.geometry} material={materials.knit_fabric} position={[2.93, 3.48, 0.07]} rotation={[0, 0, -0.49]} />
      <mesh geometry={nodes.bottomring015.geometry} material={materials.knit_fabric} position={[-5.66, 4.13, 4.02]} rotation={[0, 0, -0.49]} scale={0.23} />
    </group>
  )
}

useGLTF.preload('/knit_1_complete.glb')

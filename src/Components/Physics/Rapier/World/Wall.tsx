import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const PhysicsRapierWorldWall = () => {
  //plane params
  const height = 5;
  const width = 15;
  const offset = 7.5;

  return (
    <group name="Walls">
      <RigidBody>
        <Plane
          args={[width, height]}
          rotation={[0, 0, 0]}
          position={[0, height / 2, -offset + 1.5]}
          receiveShadow
        >
          <meshStandardMaterial color="#FAF9F6" />
        </Plane>
        <Plane
          args={[width, height]}
          rotation={[0, Math.PI / 2, 0]}
          position={[-offset, height / 2, 0]}
          receiveShadow
        >
          <meshStandardMaterial color="#FAF9F6" />
        </Plane>
        <Plane
          args={[width, height]}
          rotation={[0, Math.PI, 0]}
          position={[0, height / 2, offset - 1.5]}
          receiveShadow
        >
          <meshStandardMaterial color="#FAF9F6" />
        </Plane>
        <Plane
          args={[width, height]}
          rotation={[0, -Math.PI / 2, 0]}
          position={[offset, height / 2, 0]}
          receiveShadow
        >
          <meshStandardMaterial color="#FAF9F6" />
        </Plane>
      </RigidBody>
    </group>
  );
};

export { PhysicsRapierWorldWall as Wall };

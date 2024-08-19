import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const PhysicsRapierWorldCeiling = () => {
  return (
    <group name="Ceiling">
      <RigidBody>
        <Plane
          args={[15, 15]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 5, 0]}
        >
          <meshStandardMaterial color="grey" />
        </Plane>
      </RigidBody>
    </group>
  );
};

export { PhysicsRapierWorldCeiling as Ceiling };

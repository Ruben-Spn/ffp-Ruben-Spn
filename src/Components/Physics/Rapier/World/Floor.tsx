import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const PhysicsRapierWorldFloor = () => {
  return (
    <group name="Floor">
      <RigidBody>
        <Plane args={[15, 12]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="grey" />
        </Plane>
      </RigidBody>
    </group>
  );
};

export { PhysicsRapierWorldFloor as Floor };

import { GroupProps } from "@react-three/fiber";

import { Lighting as LightingDemo } from "Components/Lighting/Demo";
import { Lighting as LightingStudio } from "Components/Lighting/Studio";
import { Lighting as LightingThreePoint } from "Components/Lighting/ThreePoint";
import { Lighting as LightingThreePointVolumetric } from "Components/Lighting/ThreePointVolumetric";
import { useLeva } from "Hooks/Leva/Lighting";

const LIGHTING = {
  "Three Point Volumetric": <LightingThreePointVolumetric />,
} as const;

/**
 * Lighting.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Lighting = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { lighting } = useLeva(LIGHTING);

  return (
    <group name="Lighting" {...props}>
      {/* {lighting} */}
      {/* Soft, warm ambient light */}
      <ambientLight intensity={0.5} color={0xffeedd} />
      <LightingThreePointVolumetric />
      {/* <LightingStudio /> */}
      {/* <LightingThreePoint /> */}
      {/* <LightingDemo /> */}
    </group>
  );
};

export { Lighting };

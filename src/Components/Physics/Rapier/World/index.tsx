import { Floor } from "Components/Physics/Rapier/World/Floor";
import { Player } from "Components/Physics/Rapier/World/Player";
import { Wall } from "./Wall";
import { Ceiling } from "./Ceiling";
import { Door } from "./Models/Deur";
import { Bookshelf } from "./Models/Bookshelf";
import { Monitor1 } from "./Models/Mointor1";
import { LampLarge } from "./Models/LampLarge";
import { LampSmall } from "./Models/LampSmall";

import { Heating } from "./Models/Heatingunit";
import { Can } from "./Models/Can";
import { Chair } from "./Models/Chair";
import { Desk } from "./Models/Desk";
import { Clock } from "./Models/Clock";
import { Monitor2 } from "./Models/Monitor2";
import { Pc } from "./Models/Pc";
import { Boombox } from "./Models/Boombox";
import { Flag } from "./Models/Flag";
import { Bed } from "./Models/Bed";

import { WindowRoom } from "./Models/Window";
import { RecordRed } from "./Models/Record-red";
import { RecordBlue } from "./Models/Record-blue";
import { RecordGreen } from "./Models/Record-green";

import { Note } from "./Models/Note";
import { Credits } from "./Models/Credits";

const PhysicsRapierWorld = () => {
  return (
    <group name="Rapier World">
      <Floor />
      <Wall />
      <Ceiling />
      <Player />
      <Door />
      <Bookshelf />
      <LampLarge />
      <LampSmall />

      <Heating />
      <Can />
      <Chair />

      <Desk />
      <LampLarge />
      <LampSmall />
      <Clock />
      <Monitor2 />
      <Monitor1 />
      <Pc />
      <Boombox />
      <Flag />
      <Bed />
      <WindowRoom />
      <RecordRed />
      <RecordBlue />
      <RecordGreen />
      <Credits />
      <Note />
    </group>
  );
};

export { PhysicsRapierWorld as World };

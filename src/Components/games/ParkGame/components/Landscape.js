import React from "react";
import Tile from "./Tile";
import {
  grass,
  road,
  roadGrassUp,
  roadGrassDown,
  water,
  waterGrassUp,
  waterGrassDown,
} from "../images";
import { WORLD_SIZE, TILE_ASPECT_RATIO } from "../constants";

const yOffset = ((100 / WORLD_SIZE) * TILE_ASPECT_RATIO) / 1.795;

const tiles = [];
for (let i = WORLD_SIZE; i > 0; i--) {
  switch (i) {
    case 4:
    case 3:
    case 7:
    case 8:
      tiles.push(Array(WORLD_SIZE).fill("water"));
      break;
    default:
      tiles.push(Array(WORLD_SIZE).fill("grass"));
      break;
  }
}
export default function Landscape() {
  return (
    <div>
      {tiles.map((row, y) => {
        let yBase;
        switch (y) {
          case 1:
            yBase = yOffset * (1 / 0.675) * y;
            break;
          case 2:
            yBase = yOffset * (1 / 0.806) * y;
            break;
          case 5:
            yBase = yOffset * (1 / 0.912) * y;
            break;
          case 6:
            yBase = yOffset * (1 / 0.926) * y;
            break;
          default:
            yBase = yOffset * y;
        }
        const xBase = 50 - (100 / 18) * y;
        return row.map((tile, x) => {
          const z = x + 100;
          const yAbs = yBase + yOffset * x;
          const xAbs = xBase + (100 / 18) * x;
          let src;
          switch (tile) {
            case "road":
              src = road;
              break;
            case "water":
              src = water;
              break;
            case "roadGrassDown":
              src = roadGrassDown;
              break;
            case "roadGrassUp":
              src = roadGrassUp;
              break;
            case "waterGrassDown":
              src = waterGrassDown;
              break;
            case "waterGrassUp":
              src = waterGrassUp;
              break;
            default:
              src = grass;
              break;
          }
          return (
            <Tile
              key={`${x}${y}`}
              src={src}
              x_position={xAbs}
              y_position={yAbs}
              z_position={z}
            />
          );
        });
      })}
    </div>
  );
}

// import React from "react";
// import {
//   grass,
//   road,
//   roadGrassAbove,
//   roadGrassBelow,
//   water,
//   waterGrassAbove,
//   waterGrassBelow,
// } from "../images";
// import { WORLD_SIZE, TILE_ASPECT_RATIO } from "../constant";
// import Tile from "./Tile";

// const yOffset = ((100 / WORLD_SIZE) * TILE_ASPECT_RATIO) / 2.7;
// const tiles = [];
// for (let i = WORLD_SIZE; i > 0; i--) {
//   if (i === 1 || i === 6 || i === 9) {
//     tiles.push(Array(WORLD_SIZE).fill("grass"));
//   } else if (i === 2) {
//     tiles.push(Array(WORLD_SIZE).fill("roadGrassBelow"));
//   } else if (i === 3 || i === 4) {
//     tiles.push(Array(WORLD_SIZE).fill("road"));
//   } else if (i === 5) {
//     tiles.push(Array(WORLD_SIZE).fill("roadGrassAbove"));
//   } else if (i === 7) {
//     tiles.push(Array(WORLD_SIZE).fill("waterGrassBelow"));
//   } else if (i === 8) {
//     tiles.push(Array(WORLD_SIZE).fill("waterGrassAbove"));
//   }
// }

// function Landscape() {
//   return (
//     <>
//       {tiles.map((row, y) => {
//         const yBase = y === 2 ? yOffset * (1 / 0.81) * y : yOffset * y;
//         const xBase = 50 - (100 / 18) * y;
//         return row.map((tile, x) => {
//           const z = x + 100;
//           const xAbs = xBase + (50 / 9) * x;
//           const yAbs = yBase + yOffset * x;
//           let src;
//           if (tile === "grass") {
//             src = grass;
//           } else if (tile === "road") {
//             src = road;
//           } else if (tile === "water") {
//             src = water;
//           } else if (tile === "roadGrassAbove") {
//             src = roadGrassAbove;
//           } else if (tile === "roadGrassBelow") {
//             src = roadGrassBelow;
//           } else if (tile === "waterGrassAbove") {
//             src = waterGrassAbove;
//           } else if (tile === "waterGrassBelow") {
//             src = waterGrassBelow;
//           }

//           return (
//             <Tile
//               key={`${x}${y}`}
//               src={src}
//               x_position={xAbs}
//               y_position={yAbs}
//               z_position={z}
//             />
//           );
//         });
//       })}
//     </>
//   );
// }

// export default React.memo(Landscape);

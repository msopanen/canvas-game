import { Point } from "../types";

export const getRandomInt = (min: number, max: number) =>
  Math.max(min, Math.floor(Math.random() * max));

export const isCollision = (
  cx: number,
  cy: number,
  rad: number,
  points: Point[],
) => {
  // Algorithm to compares radius of the circle with distance of its
  // center from given points
  const rad_x_2 = rad * rad;
  for (const p of points) {
    if ((p.x - cx) * (p.x - cx) + (p.y - cy) * (p.y - cy) <= rad_x_2) {
      return true;
    }
  }
  return false;
};

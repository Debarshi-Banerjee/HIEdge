// These are some helper methods for drawing the round corners
// The name indicates the direction of the path. "bottomLeftCorner" goes
// from bottom to the left and "leftBottomCorner" goes from left to the bottom.
// We have to consider the direction of the paths because of the animated lines.
const bottomLeftCorner = (x: number, y: number, size: number): string =>
  `L ${x},${y - size}Q ${x},${y} ${x + size},${y}`;
const leftBottomCorner = (x: number, y: number, size: number): string =>
  `L ${x },${y+size}Q ${x},${y} ${x-size},${y}`;
const bottomRightCorner = (x: number, y: number, size: number): string =>
  `L ${x},${y - size}Q ${x},${y} ${x - size},${y}`;
const rightBottomCorner = (x: number, y: number, size: number): string =>
  `L ${x},${y+size}Q ${x},${y} ${x+size},${y}`;
const leftTopCorner = (x: number, y: number, size: number): string => `L ${x + size},${y}Q ${x},${y} ${x},${y + size}`;
const topLeftCorner = (x: number, y: number, size: number): string => `L ${x-size},${y}Q ${x},${y} ${x},${y-size}`;
const topRightCorner = (x: number, y: number, size: number): string => `L ${x+size},${y}Q ${x},${y} ${x},${y-size}`;
const rightTopCorner = (x: number, y: number, size: number): string => `L ${x - size},${y}Q ${x},${y} ${x},${y + size}`;

export interface GetCenterParams {
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
}

interface GetHIEdgePathParams {
  sourceX: number;
  sourceY: number;
  sourcePosition?: Position;
  targetX: number;
  targetY: number;
  targetPosition?: Position;
  borderRadius?: number;
}

export function getHIEdgePath({
  sourceX,
  sourceY,
  targetX,
  targetY,
  borderRadius = 5,
}: GetHIEdgePathParams): string {
  const [centerX, centerY, offsetX, offsetY] = getCenter({ sourceX, sourceY, targetX, targetY });
  const cornerWidth = Math.min(borderRadius, Math.abs(targetX - sourceX));
  const cornerHeight = Math.min(borderRadius, Math.abs(targetY - sourceY));
  const cornerSize = Math.min(cornerWidth, cornerHeight, offsetX, offsetY);

  let firstCornerPath = null;
  let secondCornerPath = null;

  if (sourceX <= targetX) {
    firstCornerPath =
      sourceY <= targetY ? bottomLeftCorner(sourceX, centerY, cornerSize) : topLeftCorner(centerX, sourceY, cornerSize);
    secondCornerPath =
      sourceY <= targetY ? rightTopCorner(targetX, centerY, cornerSize) : rightBottomCorner(centerX,targetY, cornerSize);
  } else {
    firstCornerPath =
      sourceY < targetY ? bottomRightCorner(sourceX, centerY, cornerSize) : topRightCorner(centerX, sourceY, cornerSize);
    secondCornerPath =
      sourceY < targetY ? leftTopCorner(targetX, centerY, cornerSize) : leftBottomCorner(centerX, targetY, cornerSize);
  }

  return `M ${sourceX},${sourceY}${firstCornerPath}${secondCornerPath}L ${targetX},${targetY}`;
}

export const getCenter = ({
    sourceX,
    sourceY,
    targetX,
    targetY,
}: GetCenterParams): [number, number, number, number] => {
    const xOffset = Math.abs(targetX - sourceX) / 2;
    const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;

    const yOffset = Math.abs(targetY - sourceY) / 2;
    const centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;

    return [centerX, centerY, xOffset, yOffset];
};
export type Coordinate = {
  x: number;
  y: number;
};

export type Ball = {
  radius: number;
  weight: number;
};

export type Cloth = {};

export type Table = {
  // Should this be a function of the position??
  cloth: Cloth;
  pockets: Coordinate[];
};

export type Cue = {};

/** Should this be in another file? */
export type CueHit = {
  velocity: Coordinate;
  hitPoint: Coordinate;
};

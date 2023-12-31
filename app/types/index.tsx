import { Dispatch, SetStateAction } from 'react';

export type StateType = {
  asteroids: Array<AsteroidType>;
  setAsteroids: Dispatch<SetStateAction<AsteroidType[]>>;
  measure: DistanceType;
  setMeasure: Dispatch<SetStateAction<DistanceType>>;
  cart: Array<number>;
  setCart: Dispatch<SetStateAction<number[]>>;
};
export type DistanceType = 'kilometers' | 'lunar';
export type ApproachType = {
  close_approach_date: string;
  close_approach_date_full: string;
  miss_distance: {
    lunar: string;
    kilometers: string;
  };
  relative_velocity: {
    kilometers_per_second: string;
  };
  orbiting_body: string;
};
export type AsteroidType = {
  id: number;
  name: string;
  estimated_diameter: {
    meters: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: Array<ApproachType>;
};

export type NearEarthType = {
  [key: string]: AsteroidType[];
};

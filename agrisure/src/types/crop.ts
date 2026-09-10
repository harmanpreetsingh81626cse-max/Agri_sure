export interface Variety {
  id: string;
  name: string;
  duration: string;
  yield: string;
  sowingMonths: string[];
  harvestMonths: string[];
}

export interface Disease {
  id: string;
  name: string;
  cause: string;
  symptoms: string;
  prevention: string;
  management: string;
}

export interface Weather {
  temperature: string;
  rainfall: string;
  humidity: string;
}

export interface Crop {
  id: string;
  name: string;
  description: string;
  suitableSoils: string[];
  weather: Weather;
  varieties: Variety[];
  diseases: Disease[];
}

export interface Soil {
  id: string;
  name: string;
  description: string;
  suitableCrops: string[];
}
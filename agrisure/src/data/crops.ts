import type { Crop } from "../types/crop";

const crops: Crop[] = [
  {
    id: "wheat",
    name: "Wheat",
    description:
      "Wheat is an important rabi cereal crop widely cultivated for food production.",

    suitableSoils: [
      "Loamy Soil",
      "Alluvial Soil",
      "Clay Loam Soil"
    ],

    weather: {
      temperature: "20-25°C",
      rainfall: "50-75 cm",
      humidity: "50-60%"
    },

    varieties: [
      {
        id: "hd-2967",
        name: "HD 2967",
        duration: "140-150 days",
        yield: "18-22 quintals per acre",
        sowingMonths: ["October", "November"],
        harvestMonths: ["March", "April"]
      },
      {
        id: "pbw-343",
        name: "PBW 343",
        duration: "145-155 days",
        yield: "18-22 quintals per acre",
        sowingMonths: ["October", "November"],
        harvestMonths: ["March", "April"]
      }
    ],

    diseases: [
      {
        id: "wheat-rust",
        name: "Wheat Rust",
        cause: "Fungal infection",
        symptoms: "Rust-colored spots or pustules on leaves and stems.",
        prevention: "Use resistant varieties and maintain proper field management.",
        management: "Follow recommended disease-management practices."
      }
    ]
  },

  {
    id: "rice",
    name: "Rice",
    description:
      "Rice is an important cereal crop generally grown in warm conditions with adequate water availability.",

    suitableSoils: [
      "Clay Soil",
      "Clay Loam Soil",
      "Alluvial Soil"
    ],

    weather: {
      temperature: "20-35°C",
      rainfall: "100-200 cm",
      humidity: "70-80%"
    },

    varieties: [
      {
        id: "pusa-44",
        name: "Pusa 44",
        duration: "140-150 days",
        yield: "25-30 quintals per acre",
        sowingMonths: ["June", "July"],
        harvestMonths: ["October", "November"]
      },
      {
        id: "pr-126",
        name: "PR 126",
        duration: "120-125 days",
        yield: "22-25 quintals per acre",
        sowingMonths: ["June", "July"],
        harvestMonths: ["September", "October"]
      }
    ],

    diseases: [
      {
        id: "rice-blast",
        name: "Rice Blast",
        cause: "Fungal infection",
        symptoms: "Spindle-shaped lesions may appear on leaves.",
        prevention: "Use healthy seed and recommended crop-management practices.",
        management: "Follow recommended disease-management practices."
      }
    ]
  },

  {
    id: "maize",
    name: "Maize",
    description:
      "Maize is a versatile cereal crop used for food, animal feed and industrial purposes.",

    suitableSoils: [
      "Loamy Soil",
      "Sandy Loam Soil",
      "Alluvial Soil"
    ],

    weather: {
      temperature: "21-30°C",
      rainfall: "50-100 cm",
      humidity: "50-70%"
    },

    varieties: [
      {
        id: "pmh-1",
        name: "PMH 1",
        duration: "95-100 days",
        yield: "25-30 quintals per acre",
        sowingMonths: ["June", "July"],
        harvestMonths: ["September", "October"]
      },
      {
        id: "pmh-3",
        name: "PMH 3",
        duration: "90-95 days",
        yield: "24-28 quintals per acre",
        sowingMonths: ["June", "July"],
        harvestMonths: ["September", "October"]
      }
    ],

    diseases: [
      {
        id: "maize-leaf-blight",
        name: "Maize Leaf Blight",
        cause: "Fungal infection",
        symptoms: "Long lesions may appear on maize leaves.",
        prevention: "Use healthy seed and maintain proper field sanitation.",
        management: "Follow recommended disease-management practices."
      }
    ]
  }
];

export { crops };
export default crops;
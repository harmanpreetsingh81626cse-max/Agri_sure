import type { Fertilizer } from "../types/crop";

const fertilizers: Fertilizer[] = [
  {
    id: "urea",
    name: "Urea",
    image: "/images/fertilizers/urea.jpg",
    type: "Nitrogen Fertilizer",
    nutrients: "Nitrogen",
    description:
      "A nitrogen fertilizer used to support vegetative growth and correct nitrogen deficiency.",
    suitableCrops: [
      "Wheat",
      "Rice",
      "Maize",
      "Cotton"
    ]
  },

  {
    id: "dap",
    name: "DAP",
    image: "/images/fertilizers/dap.jpg",
    type: "Phosphorus Fertilizer",
    nutrients: "Nitrogen and Phosphorus",
    description:
      "Provides nitrogen and phosphorus and can support root development and early crop growth.",
    suitableCrops: [
      "Wheat",
      "Rice",
      "Maize",
      "Chickpea"
    ]
  },

  {
    id: "mop",
    name: "MOP",
    image: "/images/fertilizers/mop.jpg",
    type: "Potassium Fertilizer",
    nutrients: "Potassium",
    description:
      "A potassium fertilizer used to supply potassium where a crop requires it.",
    suitableCrops: [
      "Rice",
      "Potato",
      "Sugarcane",
      "Maize"
    ]
  },

  {
    id: "ssp",
    name: "SSP",
    image: "/images/fertilizers/ssp.jpg",
    type: "Phosphorus Fertilizer",
    nutrients: "Phosphorus, Sulphur and Calcium",
    description:
      "A phosphorus-containing fertilizer that also supplies sulphur and calcium.",
    suitableCrops: [
      "Wheat",
      "Mustard",
      "Groundnut",
      "Chickpea"
    ]
  },

  {
    id: "zinc-sulphate",
    name: "Zinc Sulphate",
    image: "/images/fertilizers/zinc-sulphate.jpg",
    type: "Micronutrient Fertilizer",
    nutrients: "Zinc",
    description:
      "Used to supply zinc where zinc deficiency has been identified.",
    suitableCrops: [
      "Rice",
      "Wheat",
      "Maize"
    ]
  },

  {
    id: "sulphur",
    name: "Sulphur",
    image: "/images/fertilizers/sulphur.jpg",
    type: "Secondary Nutrient",
    nutrients: "Sulphur",
    description:
      "Supplies sulphur where soil or plant testing indicates a requirement.",
    suitableCrops: [
      "Mustard",
      "Groundnut",
      "Chickpea"
    ]
  },

  {
    id: "npk",
    name: "NPK",
    image: "/images/fertilizers/npk.jpg",
    type: "Compound Fertilizer",
    nutrients: "Nitrogen, Phosphorus and Potassium",
    description:
      "A compound fertilizer supplying major plant nutrients in a combined formulation.",
    suitableCrops: [
      "Wheat",
      "Rice",
      "Maize",
      "Potato",
      "Tomato"
    ]
  },

  {
    id: "fym",
    name: "Farmyard Manure",
    image: "/images/fertilizers/fym.jpg",
    type: "Organic Fertilizer",
    nutrients: "Organic Matter and Multiple Nutrients",
    description:
      "Organic manure that contributes nutrients and organic matter to agricultural soil.",
    suitableCrops: [
      "Wheat",
      "Rice",
      "Maize",
      "Potato",
      "Vegetables"
    ]
  },

  {
    id: "vermicompost",
    name: "Vermicompost",
    image: "/images/fertilizers/vermicompost.jpg",
    type: "Organic Fertilizer",
    nutrients: "Organic Matter and Nutrients",
    description:
      "An organic material produced through decomposition using earthworms.",
    suitableCrops: [
      "Tomato",
      "Potato",
      "Chilli",
      "Pea",
      "Vegetables"
    ]
  },

  {
    id: "neem-coated-urea",
    name: "Neem-Coated Urea",
    image: "/images/fertilizers/neem-coated-urea.jpg",
    type: "Nitrogen Fertilizer",
    nutrients: "Nitrogen",
    description:
      "Neem-coated urea supplies nitrogen and is commonly used in crop nutrient management.",
    suitableCrops: [
      "Wheat",
      "Rice",
      "Maize",
      "Sugarcane"
    ]
  },

  {
    id: "biofertilizer",
    name: "Biofertilizer",
    image: "/images/fertilizers/biofertilizer.jpg",
    type: "Biological Fertilizer",
    nutrients: "Beneficial Microorganisms",
    description:
      "Contains beneficial microorganisms that can contribute to nutrient availability and soil biological activity.",
    suitableCrops: [
      "Chickpea",
      "Groundnut",
      "Soybean",
      "Pea"
    ]
  }
];

export { fertilizers };
export default fertilizers;
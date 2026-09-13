import type { Crop } from "../types/crop";

const crops: Crop[] = [
  {
    id: "wheat",
    name: "Wheat",
    image: "/images/crops/wheat.jpg",
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
      },
      {
        id: "hd-3086",
        name: "HD 3086",
        duration: "140-150 days",
        yield: "18-23 quintals per acre",
        sowingMonths: ["October", "November"],
        harvestMonths: ["March", "April"]
      }
    ],

    diseases: [
      {
        id: "wheat-rust",
        name: "Wheat Rust",
        image: "/images/diseases/wheat-rust.jpg",
        cause: "Fungal infection",
        symptoms:
          "Rust-colored spots or pustules may appear on leaves and stems.",
        prevention:
          "Use suitable resistant varieties and maintain proper crop management.",
        management:
          "Follow recommended disease-management practices and local agricultural advice.",
        fertilizerIds: ["zinc-sulphate"]
      },
      {
        id: "wheat-powdery-mildew",
        name: "Powdery Mildew",
        image: "/images/diseases/wheat-powdery-mildew.jpg",
        cause: "Fungal infection",
        symptoms:
          "White powder-like growth may appear on leaves and plant surfaces.",
        prevention:
          "Maintain suitable crop spacing and avoid excessive nitrogen application.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["urea"]
      }
    ]
  },

  {
    id: "rice",
    name: "Rice",
    image: "/images/crops/rice.jpg",
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
      },
      {
        id: "pr-121",
        name: "PR 121",
        duration: "140-145 days",
        yield: "24-28 quintals per acre",
        sowingMonths: ["June", "July"],
        harvestMonths: ["October", "November"]
      }
    ],

    diseases: [
      {
        id: "rice-blast",
        name: "Rice Blast",
        image: "/images/diseases/rice-blast.jpg",
        cause: "Fungal infection",
        symptoms:
          "Spindle-shaped lesions may develop on leaves and other plant parts.",
        prevention:
          "Use healthy seed and recommended crop-management practices.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["urea", "zinc-sulphate"]
      },
      {
        id: "rice-bacterial-leaf-blight",
        name: "Bacterial Leaf Blight",
        image: "/images/diseases/rice-bacterial-leaf-blight.jpg",
        cause: "Bacterial infection",
        symptoms:
          "Water-soaked lesions and yellowing may develop along leaf margins.",
        prevention:
          "Use healthy planting material and maintain balanced nutrient management.",
        management:
          "Follow recommended crop and disease-management practices.",
        fertilizerIds: ["zinc-sulphate"]
      }
    ]
  },

  {
    id: "maize",
    name: "Maize",
    image: "/images/crops/maize.jpg",
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
      },
      {
        id: "dhan-109",
        name: "DHM 109",
        duration: "95-105 days",
        yield: "25-30 quintals per acre",
        sowingMonths: ["June", "July"],
        harvestMonths: ["September", "October"]
      }
    ],

    diseases: [
      {
        id: "maize-leaf-blight",
        name: "Maize Leaf Blight",
        image: "/images/diseases/maize-leaf-blight.jpg",
        cause: "Fungal infection",
        symptoms:
          "Long lesions may appear on maize leaves.",
        prevention:
          "Use healthy seed and maintain proper field sanitation.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["urea", "zinc-sulphate"]
      },
      {
        id: "maize-downy-mildew",
        name: "Maize Downy Mildew",
        image: "/images/diseases/maize-downy-mildew.jpg",
        cause: "Fungal-like pathogen",
        symptoms:
          "Pale streaks and abnormal leaf growth may occur.",
        prevention:
          "Use suitable varieties and healthy planting material.",
        management:
          "Follow recommended local disease-management practices.",
        fertilizerIds: ["zinc-sulphate"]
      }
    ]
  },

  {
    id: "cotton",
    name: "Cotton",
    image: "/images/crops/cotton.jpg",
    description:
      "Cotton is an important fibre crop cultivated in warm regions.",

    suitableSoils: [
      "Black Soil",
      "Loamy Soil",
      "Alluvial Soil"
    ],

    weather: {
      temperature: "21-30°C",
      rainfall: "50-100 cm",
      humidity: "50-70%"
    },

    varieties: [
      {
        id: "cotton-bt-1",
        name: "Bt Cotton",
        duration: "160-180 days",
        yield: "8-12 quintals per acre",
        sowingMonths: ["April", "May", "June"],
        harvestMonths: ["October", "November", "December"]
      },
      {
        id: "cotton-hybrid",
        name: "Cotton Hybrid",
        duration: "160-180 days",
        yield: "8-12 quintals per acre",
        sowingMonths: ["April", "May", "June"],
        harvestMonths: ["October", "November", "December"]
      }
    ],

    diseases: [
      {
        id: "cotton-bacterial-blight",
        name: "Cotton Bacterial Blight",
        image: "/images/diseases/cotton-bacterial-blight.jpg",
        cause: "Bacterial infection",
        symptoms:
          "Water-soaked lesions may develop on leaves and plant parts.",
        prevention:
          "Use healthy seed and maintain proper field sanitation.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["zinc-sulphate"]
      },
      {
        id: "cotton-root-rot",
        name: "Cotton Root Rot",
        image: "/images/diseases/cotton-root-rot.jpg",
        cause: "Soil-borne fungal infection",
        symptoms:
          "Affected plants may show wilting and poor growth.",
        prevention:
          "Maintain appropriate soil and field management.",
        management:
          "Follow recommended local disease-management practices.",
        fertilizerIds: ["ssp"]
      }
    ]
  },

  {
    id: "potato",
    name: "Potato",
    image: "/images/crops/potato.jpg",
    description:
      "Potato is an important tuber crop commonly grown during the cool season.",

    suitableSoils: [
      "Sandy Loam Soil",
      "Loamy Soil",
      "Alluvial Soil"
    ],

    weather: {
      temperature: "15-25°C",
      rainfall: "50-75 cm",
      humidity: "60-80%"
    },

    varieties: [
      {
        id: "kufri-jyoti",
        name: "Kufri Jyoti",
        duration: "90-110 days",
        yield: "80-100 quintals per acre",
        sowingMonths: ["October", "November"],
        harvestMonths: ["January", "February"]
      },
      {
        id: "kufri-pukhraj",
        name: "Kufri Pukhraj",
        duration: "80-100 days",
        yield: "90-110 quintals per acre",
        sowingMonths: ["October", "November"],
        harvestMonths: ["January", "February"]
      }
    ],

    diseases: [
      {
        id: "potato-late-blight",
        name: "Potato Late Blight",
        image: "/images/diseases/potato-late-blight.jpg",
        cause: "Oomycete pathogen",
        symptoms:
          "Dark lesions may develop on leaves and other plant parts.",
        prevention:
          "Use healthy seed and monitor crop conditions.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["npk"]
      },
      {
        id: "potato-early-blight",
        name: "Potato Early Blight",
        image: "/images/diseases/potato-early-blight.jpg",
        cause: "Fungal infection",
        symptoms:
          "Dark spots and concentric lesions may appear on leaves.",
        prevention:
          "Maintain field sanitation and balanced crop nutrition.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["npk"]
      }
    ]
  },

  {
    id: "tomato",
    name: "Tomato",
    image: "/images/crops/tomato.jpg",
    description:
      "Tomato is an important vegetable crop grown in many agricultural regions.",

    suitableSoils: [
      "Loamy Soil",
      "Sandy Loam Soil",
      "Alluvial Soil"
    ],

    weather: {
      temperature: "20-30°C",
      rainfall: "60-100 cm",
      humidity: "60-70%"
    },

    varieties: [
      {
        id: "pusa-ruby",
        name: "Pusa Ruby",
        duration: "120-140 days",
        yield: "80-100 quintals per acre",
        sowingMonths: ["June", "July", "September"],
        harvestMonths: ["August", "September", "November"]
      },
      {
        id: "ark-vikas",
        name: "Arka Vikas",
        duration: "120-140 days",
        yield: "80-100 quintals per acre",
        sowingMonths: ["June", "July", "September"],
        harvestMonths: ["August", "September", "November"]
      }
    ],

    diseases: [
      {
        id: "tomato-early-blight",
        name: "Tomato Early Blight",
        image: "/images/diseases/tomato-early-blight.jpg",
        cause: "Fungal infection",
        symptoms:
          "Brown spots with concentric rings may appear on leaves.",
        prevention:
          "Maintain field sanitation and avoid prolonged leaf wetness.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["npk"]
      },
      {
        id: "tomato-bacterial-wilt",
        name: "Tomato Bacterial Wilt",
        image: "/images/diseases/tomato-bacterial-wilt.jpg",
        cause: "Bacterial infection",
        symptoms:
          "Plants may wilt rapidly while leaves initially remain green.",
        prevention:
          "Use healthy planting material and suitable crop rotation.",
        management:
          "Follow recommended local disease-management practices.",
        fertilizerIds: ["fym"]
      }
    ]
  },

  {
    id: "chickpea",
    name: "Chickpea",
    image: "/images/crops/chickpea.jpg",
    description:
      "Chickpea is an important pulse crop commonly grown during the rabi season.",

    suitableSoils: [
      "Loamy Soil",
      "Sandy Loam Soil",
      "Black Soil"
    ],

    weather: {
      temperature: "20-25°C",
      rainfall: "40-60 cm",
      humidity: "40-60%"
    },

    varieties: [
      {
        id: "pusa-372",
        name: "Pusa 372",
        duration: "130-150 days",
        yield: "7-10 quintals per acre",
        sowingMonths: ["October", "November"],
        harvestMonths: ["February", "March"]
      },
      {
        id: "gng-1969",
        name: "GNG 1969",
        duration: "130-145 days",
        yield: "7-10 quintals per acre",
        sowingMonths: ["October", "November"],
        harvestMonths: ["February", "March"]
      }
    ],

    diseases: [
      {
        id: "chickpea-fusarium-wilt",
        name: "Chickpea Fusarium Wilt",
        image: "/images/diseases/chickpea-fusarium-wilt.jpg",
        cause: "Soil-borne fungal infection",
        symptoms:
          "Plants may show wilting and yellowing.",
        prevention:
          "Use healthy seed and suitable crop rotation.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["dap", "biofertilizer"]
      },
      {
        id: "chickpea-ascochyta-blight",
        name: "Ascochyta Blight",
        image: "/images/diseases/chickpea-ascochyta-blight.jpg",
        cause: "Fungal infection",
        symptoms:
          "Spots and lesions may develop on leaves, stems and pods.",
        prevention:
          "Use healthy seed and suitable varieties.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["ssp"]
      }
    ]
  },

  {
    id: "mustard",
    name: "Mustard",
    image: "/images/crops/mustard.jpg",
    description:
      "Mustard is an important oilseed crop commonly grown during the rabi season.",

    suitableSoils: [
      "Loamy Soil",
      "Alluvial Soil",
      "Sandy Loam Soil"
    ],

    weather: {
      temperature: "10-25°C",
      rainfall: "35-45 cm",
      humidity: "50-70%"
    },

    varieties: [
      {
        id: "pusa-bold",
        name: "Pusa Bold",
        duration: "135-150 days",
        yield: "6-8 quintals per acre",
        sowingMonths: ["October", "November"],
        harvestMonths: ["February", "March"]
      },
      {
        id: "pusa-jai-kisan",
        name: "Pusa Jai Kisan",
        duration: "135-150 days",
        yield: "6-8 quintals per acre",
        sowingMonths: ["October", "November"],
        harvestMonths: ["February", "March"]
      }
    ],

    diseases: [
      {
        id: "mustard-alternaria-blight",
        name: "Mustard Alternaria Blight",
        image: "/images/diseases/mustard-alternaria-blight.jpg",
        cause: "Fungal infection",
        symptoms:
          "Dark circular spots may appear on leaves and other plant parts.",
        prevention:
          "Use healthy seed and maintain suitable crop management.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["sulphur"]
      },
      {
        id: "mustard-white-rust",
        name: "Mustard White Rust",
        image: "/images/diseases/mustard-white-rust.jpg",
        cause: "Fungal infection",
        symptoms:
          "White pustules may develop on affected plant parts.",
        prevention:
          "Use healthy planting material and maintain field sanitation.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["sulphur"]
      }
    ]
  },

  {
    id: "groundnut",
    name: "Groundnut",
    image: "/images/crops/groundnut.jpg",
    description:
      "Groundnut is an important oilseed and food crop grown in warm conditions.",

    suitableSoils: [
      "Sandy Loam Soil",
      "Loamy Soil",
      "Red Soil"
    ],

    weather: {
      temperature: "25-30°C",
      rainfall: "50-100 cm",
      humidity: "60-70%"
    },

    varieties: [
      {
        id: "gg-20",
        name: "GG 20",
        duration: "110-125 days",
        yield: "8-12 quintals per acre",
        sowingMonths: ["June", "July"],
        harvestMonths: ["September", "October"]
      },
      {
        id: "tg-37a",
        name: "TG 37A",
        duration: "110-125 days",
        yield: "8-12 quintals per acre",
        sowingMonths: ["June", "July"],
        harvestMonths: ["September", "October"]
      }
    ],

    diseases: [
      {
        id: "groundnut-leaf-spot",
        name: "Groundnut Leaf Spot",
        image: "/images/diseases/groundnut-leaf-spot.jpg",
        cause: "Fungal infection",
        symptoms:
          "Spots may develop on leaves and lead to premature leaf fall.",
        prevention:
          "Use healthy seed and maintain suitable field management.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["sulphur"]
      },
      {
        id: "groundnut-rust",
        name: "Groundnut Rust",
        image: "/images/diseases/groundnut-rust.jpg",
        cause: "Fungal infection",
        symptoms:
          "Rust-colored pustules may appear on leaves.",
        prevention:
          "Maintain proper field management and use healthy planting material.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["sulphur"]
      }
    ]
  },

  {
    id: "sugarcane",
    name: "Sugarcane",
    image: "/images/crops/sugarcane.jpg",
    description:
      "Sugarcane is a major commercial crop used primarily for sugar production.",

    suitableSoils: [
      "Loamy Soil",
      "Alluvial Soil",
      "Clay Loam Soil"
    ],

    weather: {
      temperature: "20-35°C",
      rainfall: "75-150 cm",
      humidity: "60-80%"
    },

    varieties: [
      {
        id: "co-0238",
        name: "Co 0238",
        duration: "10-12 months",
        yield: "300-400 quintals per acre",
        sowingMonths: ["February", "March", "October"],
        harvestMonths: ["January", "February", "March"]
      },
      {
        id: "coj-64",
        name: "CoJ 64",
        duration: "10-12 months",
        yield: "280-380 quintals per acre",
        sowingMonths: ["February", "March", "October"],
        harvestMonths: ["January", "February", "March"]
      }
    ],

    diseases: [
      {
        id: "sugarcane-red-rot",
        name: "Sugarcane Red Rot",
        image: "/images/diseases/sugarcane-red-rot.jpg",
        cause: "Fungal infection",
        symptoms:
          "Internal stalk tissue may show reddish discoloration.",
        prevention:
          "Use healthy planting material and suitable varieties.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["npk"]
      },
      {
        id: "sugarcane-smut",
        name: "Sugarcane Smut",
        image: "/images/diseases/sugarcane-smut.jpg",
        cause: "Fungal infection",
        symptoms:
          "A characteristic whip-like structure may develop from affected shoots.",
        prevention:
          "Use healthy planting material and suitable varieties.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["urea"]
      }
    ]
  },

  {
    id: "onion",
    name: "Onion",
    image: "/images/crops/onion.jpg",
    description:
      "Onion is an important bulb vegetable crop used widely in food preparation.",

    suitableSoils: [
      "Loamy Soil",
      "Sandy Loam Soil",
      "Alluvial Soil"
    ],

    weather: {
      temperature: "15-25°C",
      rainfall: "65-75 cm",
      humidity: "60-70%"
    },

    varieties: [
      {
        id: "n-53",
        name: "N-53",
        duration: "120-150 days",
        yield: "80-100 quintals per acre",
        sowingMonths: ["June", "July", "October", "November"],
        harvestMonths: ["September", "October", "February", "March"]
      },
      {
        id: "agrifound-dark-red",
        name: "Agrifound Dark Red",
        duration: "120-150 days",
        yield: "80-100 quintals per acre",
        sowingMonths: ["June", "July", "October", "November"],
        harvestMonths: ["September", "October", "February", "March"]
      }
    ],

    diseases: [
      {
        id: "onion-purple-blotch",
        name: "Onion Purple Blotch",
        image: "/images/diseases/onion-purple-blotch.jpg",
        cause: "Fungal infection",
        symptoms:
          "Purple or brown lesions may develop on leaves.",
        prevention:
          "Maintain suitable field sanitation and crop spacing.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["npk"]
      },
      {
        id: "onion-stemphylium-blight",
        name: "Stemphylium Blight",
        image: "/images/diseases/onion-stemphylium-blight.jpg",
        cause: "Fungal infection",
        symptoms:
          "Brown to dark lesions may develop on onion leaves.",
        prevention:
          "Maintain appropriate crop management and field sanitation.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["sulphur"]
      }
    ]
  },

  {
    id: "pea",
    name: "Pea",
    image: "/images/crops/pea.jpg",
    description:
      "Pea is a cool-season pulse and vegetable crop commonly grown during winter.",

    suitableSoils: [
      "Loamy Soil",
      "Sandy Loam Soil",
      "Alluvial Soil"
    ],

    weather: {
      temperature: "10-25°C",
      rainfall: "40-60 cm",
      humidity: "50-70%"
    },

    varieties: [
      {
        id: "arun",
        name: "Arun",
        duration: "60-80 days",
        yield: "30-50 quintals per acre",
        sowingMonths: ["October", "November"],
        harvestMonths: ["December", "January", "February"]
      },
      {
        id: "azad-p-1",
        name: "Azad P-1",
        duration: "60-80 days",
        yield: "30-50 quintals per acre",
        sowingMonths: ["October", "November"],
        harvestMonths: ["December", "January", "February"]
      }
    ],

    diseases: [
      {
        id: "pea-powdery-mildew",
        name: "Pea Powdery Mildew",
        image: "/images/diseases/pea-powdery-mildew.jpg",
        cause: "Fungal infection",
        symptoms:
          "White powder-like growth may appear on leaves and stems.",
        prevention:
          "Maintain suitable spacing and field management.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["sulphur"]
      },
      {
        id: "pea-wilt",
        name: "Pea Wilt",
        image: "/images/diseases/pea-wilt.jpg",
        cause: "Soil-borne fungal infection",
        symptoms:
          "Plants may show yellowing, wilting and reduced growth.",
        prevention:
          "Use healthy seed and suitable crop rotation.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["fym", "biofertilizer"]
      }
    ]
  },

  {
    id: "chilli",
    name: "Chilli",
    image: "/images/crops/chilli.jpg",
    description:
      "Chilli is an important vegetable and spice crop grown in warm conditions.",

    suitableSoils: [
      "Loamy Soil",
      "Sandy Loam Soil",
      "Alluvial Soil"
    ],

    weather: {
      temperature: "20-30°C",
      rainfall: "60-100 cm",
      humidity: "60-70%"
    },

    varieties: [
      {
        id: "pusa-jwala",
        name: "Pusa Jwala",
        duration: "150-180 days",
        yield: "25-35 quintals per acre",
        sowingMonths: ["June", "July", "September"],
        harvestMonths: ["September", "October", "December"]
      },
      {
        id: "pant-c-1",
        name: "Pant C-1",
        duration: "150-180 days",
        yield: "25-35 quintals per acre",
        sowingMonths: ["June", "July", "September"],
        harvestMonths: ["September", "October", "December"]
      }
    ],

    diseases: [
      {
        id: "chilli-dieback",
        name: "Chilli Dieback",
        image: "/images/diseases/chilli-dieback.jpg",
        cause: "Fungal infection",
        symptoms:
          "Shoot tips may dry and affected branches may die back.",
        prevention:
          "Use healthy planting material and maintain proper field management.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["npk"]
      },
      {
        id: "chilli-leaf-curl",
        name: "Chilli Leaf Curl",
        image: "/images/diseases/chilli-leaf-curl.jpg",
        cause: "Viral disease commonly associated with insect vectors",
        symptoms:
          "Leaves may curl, become distorted and show reduced growth.",
        prevention:
          "Use healthy planting material and manage insect vectors.",
        management:
          "Follow recommended crop and pest-management practices.",
        fertilizerIds: ["zinc-sulphate"]
      }
    ]
  },

  {
    id: "soybean",
    name: "Soybean",
    image: "/images/crops/soybean.jpg",
    description:
      "Soybean is an important oilseed and protein-rich crop grown during warm seasons.",

    suitableSoils: [
      "Loamy Soil",
      "Clay Loam Soil",
      "Black Soil"
    ],

    weather: {
      temperature: "20-30°C",
      rainfall: "60-100 cm",
      humidity: "60-75%"
    },

    varieties: [
      {
        id: "js-335",
        name: "JS 335",
        duration: "90-110 days",
        yield: "8-12 quintals per acre",
        sowingMonths: ["June", "July"],
        harvestMonths: ["September", "October"]
      },
      {
        id: "js-9560",
        name: "JS 9560",
        duration: "90-110 days",
        yield: "8-12 quintals per acre",
        sowingMonths: ["June", "July"],
        harvestMonths: ["September", "October"]
      }
    ],

    diseases: [
      {
        id: "soybean-rust",
        name: "Soybean Rust",
        image: "/images/diseases/soybean-rust.jpg",
        cause: "Fungal infection",
        symptoms:
          "Small lesions and rust-colored structures may appear on leaves.",
        prevention:
          "Use healthy seed and suitable varieties.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["sulphur"]
      },
      {
        id: "soybean-charcoal-rot",
        name: "Soybean Charcoal Rot",
        image: "/images/diseases/soybean-charcoal-rot.jpg",
        cause: "Soil-borne fungal infection",
        symptoms:
          "Plants may wilt and show reduced growth under stressful conditions.",
        prevention:
          "Maintain suitable soil moisture and crop management.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["fym", "biofertilizer"]
      }
    ]
  },

  {
    id: "finger-millet",
    name: "Finger Millet",
    image: "/images/crops/finger-millet.jpg",
    description:
      "Finger millet is a nutritious cereal crop that can be grown in a range of environments.",

    suitableSoils: [
      "Red Soil",
      "Loamy Soil",
      "Sandy Loam Soil"
    ],

    weather: {
      temperature: "20-30°C",
      rainfall: "50-100 cm",
      humidity: "50-70%"
    },

    varieties: [
      {
        id: "gpu-28",
        name: "GPU 28",
        duration: "110-120 days",
        yield: "8-12 quintals per acre",
        sowingMonths: ["June", "July"],
        harvestMonths: ["September", "October"]
      },
      {
        id: "vl-149",
        name: "VL 149",
        duration: "110-120 days",
        yield: "8-12 quintals per acre",
        sowingMonths: ["June", "July"],
        harvestMonths: ["September", "October"]
      }
    ],

    diseases: [
      {
        id: "finger-millet-blast",
        name: "Finger Millet Blast",
        image: "/images/diseases/finger-millet-blast.jpg",
        cause: "Fungal infection",
        symptoms:
          "Spindle-shaped lesions may develop on leaves and other plant parts.",
        prevention:
          "Use healthy seed and suitable crop-management practices.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["urea", "zinc-sulphate"]
      },
      {
        id: "finger-millet-blight",
        name: "Finger Millet Leaf Blight",
        image: "/images/diseases/finger-millet-blight.jpg",
        cause: "Fungal infection",
        symptoms:
          "Leaf lesions may develop and affected foliage may dry.",
        prevention:
          "Maintain suitable field sanitation and crop management.",
        management:
          "Follow recommended disease-management practices.",
        fertilizerIds: ["npk"]
      }
    ]
  }
];

export { crops };
export default crops;
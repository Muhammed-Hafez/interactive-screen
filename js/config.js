// Configuration for interactive body points and product data
const bodyPoints = [
  {
    id: "brain",
    x: 50, // percentage of parent container width
    y: 16, // percentage of parent container height
    labelOffsetX: 70,
    labelOffsetY: -20,
    title: "Neuro-Health Portfolio",
    productImage: "assets/medicine-brain.jpg",
    benefits: [
      {
        title: "Enhanced Cognitive Function",
        description:
          "Improves memory, focus, and overall cognitive performance through advanced neural pathway support.",
      },
      {
        title: "Stress Reduction",
        description:
          "Balances neurotransmitters to reduce stress and promote mental clarity and emotional well-being.",
      },
      {
        title: "Sleep Quality Improvement",
        description:
          "Regulates sleep cycles for deeper, more restorative sleep and improved daily functioning.",
      },
      {
        title: "Neuroprotective Effects",
        description:
          "Protects neural cells from oxidative stress and age-related deterioration.",
      },
    ],
  },
  {
    id: "heart",
    x: 50,
    y: 35,
    labelOffsetX: -80,
    labelOffsetY: -10,
    title: "Cardio Health Portfolio",
    productImage: "assets/medicine-heart.jpg",
    benefits: [
      {
        title: "Blood Pressure Regulation",
        description:
          "Helps maintain healthy blood pressure levels through vasodilation and improved circulation.",
      },
      {
        title: "Cholesterol Management",
        description:
          "Supports healthy lipid profiles by reducing LDL and increasing HDL cholesterol levels.",
      },
      {
        title: "Heart Rhythm Stability",
        description:
          "Promotes regular cardiac rhythms and electrical conductivity for optimal heart function.",
      },
      {
        title: "Vascular Health",
        description:
          "Strengthens blood vessel integrity and elasticity, reducing risk of cardiovascular issues.",
      },
    ],
  },
  {
    id: "digestive",
    x: 50,
    y: 50,
    labelOffsetX: 80,
    labelOffsetY: 0,
    title: "Digestive Health Portfolio",
    productImage: "assets/medicine-digestive.jpg",
    benefits: [
      {
        title: "Gut Microbiome Balance",
        description:
          "Restores and maintains healthy gut flora for optimal digestive function and immune support.",
      },
      {
        title: "Reduced Inflammation",
        description:
          "Soothes and reduces inflammation in the digestive tract for increased comfort and function.",
      },
      {
        title: "Enhanced Nutrient Absorption",
        description:
          "Improves the body's ability to absorb essential nutrients from food and supplements.",
      },
      {
        title: "Digestive Comfort",
        description:
          "Alleviates common digestive discomforts such as bloating, gas, and irregular motility.",
      },
    ],
  },
  {
    id: "joint",
    x: 70,
    y: 45,
    labelOffsetX: 60,
    labelOffsetY: 20,
    title: "Joint & Mobility Portfolio",
    productImage: "assets/medicine-joint.jpg",
    benefits: [
      {
        title: "Joint Pain Relief",
        description:
          "Reduces discomfort and pain in joints through anti-inflammatory and analgesic properties.",
      },
      {
        title: "Cartilage Regeneration",
        description:
          "Supports the body's natural processes for rebuilding and maintaining healthy cartilage.",
      },
      {
        title: "Improved Mobility",
        description:
          "Enhances range of motion and flexibility for easier, more comfortable movement.",
      },
      {
        title: "Structural Support",
        description:
          "Strengthens connective tissues around joints for better stability and function.",
      },
    ],
  },
  {
    id: "spine",
    x: 50,
    y: 45,
    labelOffsetX: -80,
    labelOffsetY: 20,
    title: "Spine & Posture Portfolio",
    productImage: "assets/medicine-spine.jpg",
    benefits: [
      {
        title: "Spinal Alignment",
        description:
          "Supports proper spinal curvature and alignment for overall skeletal health.",
      },
      {
        title: "Disc Health",
        description:
          "Maintains intervertebral disc hydration and resilience to prevent deterioration.",
      },
      {
        title: "Nerve Function",
        description:
          "Protects and supports healthy nerve function throughout the spinal column.",
      },
      {
        title: "Muscle Tension Relief",
        description:
          "Relaxes surrounding muscles to reduce strain and improve overall comfort.",
      },
    ],
  },
];

// Placeholder image URLs - in a real implementation, you would use actual image URLs
const placeholderImages = {
  "assets/body-image.jpg": "human.jpg",
  "assets/medicine-brain.jpg":
    "https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg",
  "assets/medicine-heart.jpg":
    "https://images.pexels.com/photos/3683081/pexels-photo-3683081.jpeg",
  "assets/medicine-digestive.jpg":
    "https://images.pexels.com/photos/3683035/pexels-photo-3683035.jpeg",
  "assets/medicine-joint.jpg":
    "https://images.pexels.com/photos/3683075/pexels-photo-3683075.jpeg",
  "assets/medicine-spine.jpg":
    "https://images.pexels.com/photos/3683103/pexels-photo-3683103.jpeg",
};

const bicycleType = ["Mountain", "Road", "Hybrid", "BMX", "Electric"];
export const bicycleTypeOptions = bicycleType?.map((brand) => ({
  label: brand,
  value: brand,
}));

const bicycleColor = [
  "Red",
  "Blue",
  "Black",
  "White",
  "Green",
  "Yellow",
  "Gray",
];
export const bicycleColorOptions = bicycleColor?.map((color) => ({
  label: color,
  value: color,
}));

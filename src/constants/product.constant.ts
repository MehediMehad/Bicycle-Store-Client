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

const bicycleBrand = [
  "Giant",
  "Trek",
  "Specialized",
  "Cannondale",
  "Scott",
  "Bianchi",
  "Merida",
  "Duranta",
  "Veloce",
  "Prince",
  "Phoenix",
  "Hero",
  "Atlas",
  "Avon",
];

export const bicycleBrandOptions = bicycleBrand?.map((brand) => ({
  label: brand,
  value: brand,
}));

const bicycleAvailability = ["Pre-Order", "In Stock"];

export const bicycleAvailabilityOptions = bicycleAvailability?.map((brand) => ({
  label: brand,
  value: brand,
}));

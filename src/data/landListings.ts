export type LandListing = {
  slug: string;
  name: string;
  size: string;
  price: string;
  location: string;
  feature?: string;
  images: readonly [string, string];
  pinUrl: string | null;
};

const propertyPhotos = Array.from(
  {length: 26},
  (_, index) => `/images/property%20land/property%20(${index + 1}).jpeg`,
);

for (let index = propertyPhotos.length - 1; index > 0; index--) {
  const randomIndex = Math.floor(Math.random() * (index + 1));
  [propertyPhotos[index], propertyPhotos[randomIndex]] = [
    propertyPhotos[randomIndex],
    propertyPhotos[index],
  ];
}

const listingDetails = [
  {
    slug: "sissa-ngongolo",
    name: "Sissa Ngongolo",
    size: "50 x 100 ft",
    price: "38m",
    location: "Ngongolo",
    pinUrl: null,
  },
  {
    slug: "sissa-buswa-gated-community-50x100",
    name: "Sissa Buswa Gated Community",
    size: "50 x 100 ft",
    price: "50m",
    location: "Buswa",
    feature: "Lake view",
    pinUrl: null,
  },
  {
    slug: "sissa-buswa-gated-community-100x100",
    name: "Sissa Buswa Gated Community",
    size: "100 x 100 ft",
    price: "100m",
    location: "Buswa",
    feature: "Lake view",
    pinUrl: null,
  },
  {
    slug: "sissa-near-the-road",
    name: "Sissa Near the Road",
    size: "50 x 100 ft",
    price: "45m",
    location: "Sissa",
    pinUrl: null,
  },
  {
    slug: "sissa-ssekiwunga-ackright",
    name: "Sissa Ssekiwunga Ackright",
    size: "50 x 100 ft",
    price: "85m",
    location: "Ackright",
    feature: "Near Ebony Villas",
    pinUrl: null,
  },
  {
    slug: "sissa-hill-view",
    name: "Sissa Hill View",
    size: "30 decimals",
    price: "200m",
    location: "Overlooking Ackright",
    pinUrl: null,
  },
  {
    slug: "ackright-kinyarwanda",
    name: "Ackright Kinyarwanda",
    size: "20 decimals",
    price: "180m",
    location: "Kinyarwanda",
    pinUrl: null,
  },
  {
    slug: "ackright-temple",
    name: "Ackright Temple",
    size: "50 x 100 ft",
    price: "120m",
    location: "Ackright",
    pinUrl: null,
  },
  {
    slug: "centre-ackright-kigaga",
    name: "Centre Ackright Kigaga",
    size: "20 decimals",
    price: "350m",
    location: "Kigaga",
    pinUrl: null,
  },
  {
    slug: "wamala-ziru-entebbe-road",
    name: "Wamala-Ziru Entebbe Road",
    size: "50 x 100 ft",
    price: "65m",
    location: "Wamala-Ziru, Entebbe Road",
    pinUrl: null,
  },
  {
    slug: "bugiri-kawuku-entebbe-road",
    name: "Bugiri Kawuku Entebbe Road",
    size: "18 decimals",
    price: "150m",
    location: "Kawuku, Entebbe Road",
    feature: "Lake view",
    pinUrl: null,
  },
  {
    slug: "bwerenga-bukasa-lakefront",
    name: "Bwerenga Bukasa Lakefront Land",
    size: "50 x 100 ft",
    price: "85m",
    location: "Bukasa, Bwerenga",
    feature: "Lakefront",
    pinUrl: null,
  },
];

export const landListings: LandListing[] = listingDetails.map((listing, index) => {
  const firstPhotoIndex = index * 2;
  return {
    ...listing,
    images: [
      propertyPhotos[firstPhotoIndex],
      propertyPhotos[firstPhotoIndex + 1],
    ],
  };
});

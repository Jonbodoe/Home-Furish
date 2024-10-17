import couch from "./../../assets/images/couch.png";

// Priority Levels
export const LOW = "Low";
export const MEDIUM = "Medium";
export const HIGH = "High";

export const brandsList = [
  {
    id: "ikea",
    name: "Ikea",
  },
  {
    id: "wayfair",
    name: "Wayfair",
  },
  {
    id: "west-elm",
    name: "West Elm",
  },
  {
    id: "target",
    name: "Target",
  },
  {
    id: "facebook-marketplace",
    name: "Facebook Marketplace",
  },
];

export const EDIT_MODE = "EDIT";
export const ADD_PRODUCT_MODE = "ADD_PRODUCT_MODE";

export const priorityList = [
  {
    id: LOW,
    name: LOW,
  },
  {
    id: MEDIUM,
    name: MEDIUM,
  },
  {
    id: HIGH,
    name: HIGH,
  },
];

export const ONLINE = "Online";
export const IN_PERSON = "In-Person";
export const ONLINE_AND_IN_PERSON = "Online / In-Persion";

export const locationList = [
  {
    id: ONLINE,
    name: ONLINE,
  },
  {
    id: IN_PERSON,
    name: IN_PERSON,
  },
  {
    id: ONLINE_AND_IN_PERSON,
    name: ONLINE_AND_IN_PERSON,
  },
];

// Room Space
export const LIVING_AND_DINING_ROOM = "Living / Dining Room";
export const CLOSET_ROOM = "Closet Room";
export const KITCHEN = "Kitchen";
export const MAIN_BED_ROOM = "Main Bed Room";
export const BASEMENT = "Basement";
export const PATIO = "Patio";
export const BACKYARD = "Backyard";

export const roomList = [
  {
    id: LIVING_AND_DINING_ROOM,
    name: LIVING_AND_DINING_ROOM,
  },
  {
    id: CLOSET_ROOM,
    name: CLOSET_ROOM,
  },
  {
    id: KITCHEN,
    name: KITCHEN,
  },
  {
    id: MAIN_BED_ROOM,
    name: MAIN_BED_ROOM,
  },
  {
    id: BASEMENT,
    name: BASEMENT,
  },
  {
    id: BACKYARD,
    name: BACKYARD,
  },
  {
    id: PATIO,
    name: PATIO,
  },
];

// TODO: Remove once no longer need
// Fake Data Array
export const dataArray = [
  {
    id: 0,
    name: "LINANÄS",
    image: couch,
    priority: LOW,
    furnitureType: "Couch",
    roomSpace: MAIN_BED_ROOM,
    colorWay: "#313131",
    brand: "Ikea",
    total: 350,
    hyperlink:
      "https://www.ikea.com/us/en/p/linanaes-sofa-vissle-dark-gray-80512247/",
    purchaseLocation: ONLINE_AND_IN_PERSON,
    quantity: 1,
  },
  {
    id: 1,
    name: "LINANÄS",
    image: couch,
    priority: LOW,
    furnitureType: "Couch",
    roomSpace: MAIN_BED_ROOM,
    colorWay: "#313131",
    brand: "Ikea",
    total: 350,
    hyperlink:
      "https://www.ikea.com/us/en/p/linanaes-sofa-vissle-dark-gray-80512247/",
    purchaseLocation: ONLINE_AND_IN_PERSON,
    quantity: 1,
  },
  {
    id: 3,
    name: "LINANÄS",
    image: couch,
    priority: LOW,
    furnitureType: "Couch",
    roomSpace: MAIN_BED_ROOM,
    colorWay: "#313131",
    brand: "Ikea",
    total: 350,
    hyperlink:
      "https://www.ikea.com/us/en/p/linanaes-sofa-vissle-dark-gray-80512247/",
    purchaseLocation: ONLINE_AND_IN_PERSON,
    quantity: 1,
  },
  {
    id: 4,
    name: "LINANÄS",
    image: couch,
    priority: LOW,
    furnitureType: "Couch",
    roomSpace: MAIN_BED_ROOM,
    colorWay: "#313131",
    brand: "Ikea",
    total: 350,
    hyperlink:
      "https://www.ikea.com/us/en/p/linanaes-sofa-vissle-dark-gray-80512247/",
    purchaseLocation: ONLINE_AND_IN_PERSON,
    quantity: 1,
  },
  {
    id: 5,
    name: "LINANÄS",
    image: couch,
    priority: LOW,
    furnitureType: "Couch",
    roomSpace: MAIN_BED_ROOM,
    colorWay: "#313131",
    brand: "Ikea",
    total: 350,
    hyperlink:
      "https://www.ikea.com/us/en/p/linanaes-sofa-vissle-dark-gray-80512247/",
    purchaseLocation: ONLINE_AND_IN_PERSON,
    quantity: 1,
  },
];

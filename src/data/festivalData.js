import {
  FaBagShopping,
  FaCampground,
  FaDrum,
  FaFire,
  FaHandsPraying,
  FaLandmark,
  FaLeaf,
  FaMasksTheater,
  FaMountainSun,
  FaMusic,
  FaPalette,
  FaPeopleGroup,
  FaPersonHiking,
  FaPersonWalkingLuggage,
  FaWater,
} from "react-icons/fa6";

export const festivalZones = [
  {
    id: "north",
    label: "North",
  },
  {
    id: "south",
    label: "South",
  },
  {
    id: "east",
    label: "East",
  },
  {
    id: "west",
    label: "West",
  },
  {
    id: "central",
    label: "Central",
  },
];

export const festivals = [
  {
    id: 1,
    title: "Kumbh Mela",
    zone: "north",
    category: "Religious",
    location: "Prayagraj, Uttar Pradesh",
    date: "13 Jan - 26 Feb",
    image: "/images/festivals/kumbh-mela.jpg",
    badgeClass: "orange",
    categoryIcon: FaLandmark,
    description:
      "Experience one of India's largest spiritual gatherings where millions of devotees come together at the sacred confluence of rivers.",
    features: [
      {
        id: 1,
        title: "Holy Bath",
        icon: FaWater,
      },
      {
        id: 2,
        title: "Spiritual Rituals",
        icon: FaHandsPraying,
      },
      {
        id: 3,
        title: "Grand Gathering",
        icon: FaPeopleGroup,
      },
    ],
    slug: "kumbh-mela",
  },
  {
    id: 2,
    title: "Pushkar Fair",
    zone: "north",
    category: "Fairs & Mela",
    location: "Pushkar, Rajasthan",
    date: "10 - 19 Nov",
    image: "/images/festivals/pushkar-fair.jpg",
    badgeClass: "blue",
    categoryIcon: FaCampground,
    description:
      "Experience the vibrant culture of Rajasthan through colourful markets, camel races, folk performances and traditional celebrations.",
    features: [
      {
        id: 1,
        title: "Camel Races",
        icon: FaPersonWalkingLuggage,
      },
      {
        id: 2,
        title: "Folk Music",
        icon: FaMusic,
      },
      {
        id: 3,
        title: "Handicrafts",
        icon: FaBagShopping,
      },
    ],
    slug: "pushkar-fair",
  },
  {
    id: 3,
    title: "Ladakh Festival",
    zone: "north",
    category: "Cultural",
    location: "Amritsar, Punjab",
    date: "13 Apr",
    image: "/images/festivals/baisakhi.jpg",
    badgeClass: "green",
    categoryIcon: FaMasksTheater,
    description:
      "Discover Punjab at its energetic best with Bhangra, colourful traditional dress, harvest celebrations and joyful community gatherings.",
    features: [
      {
        id: 1,
        title: "Bhangra",
        icon: FaPeopleGroup,
      },
      {
        id: 2,
        title: "Folk Music",
        icon: FaDrum,
      },
      {
        id: 3,
        title: "Harvest",
        icon: FaLeaf,
      },
    ],
    slug: "baisakhi-festival",
  },
  {
    id: 4,
    title: "Ganesh Chaturthi ",
    zone: "north",
    category: "Cultural",
    location: "Leh, Ladakh",
    date: "15 - 17 Oct",
    image: "/images/festivals/ganesh-chaturthi.jpg",
    badgeClass: "purple",
    categoryIcon: FaMasksTheater,
    description:
      "Explore the rich Himalayan culture of Ladakh through traditional dances, colourful costumes and spectacular mountain celebrations.",
    features: [
      {
        id: 1,
        title: "Mountain Culture",
        icon: FaMountainSun,
      },
      {
        id: 2,
        title: "Traditional Dance",
        icon: FaPeopleGroup,
      },
      {
        id: 3,
        title: "Local Art",
        icon: FaPalette,
      },
    ],
    slug: "ladakh-festival",
  },
  
  {
    id: 5,
    title: "Kumbh Mela",
    zone: "north",
    category: "Religious",
    location: "Prayagraj, Uttar Pradesh",
    date: "13 Jan - 26 Feb",
    image: "/images/festivals/kumbh-mela.jpg",
    badgeClass: "orange",
    categoryIcon: FaLandmark,
    description:
      "Experience one of India's largest spiritual gatherings where millions of devotees come together at the sacred confluence of rivers.",
    features: [
      {
        id: 1,
        title: "Holy Bath",
        icon: FaWater,
      },
      {
        id: 2,
        title: "Spiritual Rituals",
        icon: FaHandsPraying,
      },
      {
        id: 3,
        title: "Grand Gathering",
        icon: FaPeopleGroup,
      },
    ],
    slug: "kumbh-mela",
  },
  {
    id: 6,
    title: "Pushkar Fair",
    zone: "north",
    category: "Fairs & Mela",
    location: "Pushkar, Rajasthan",
    date: "10 - 19 Nov",
    image: "/images/festivals/pushkar-fair.jpg",
    badgeClass: "blue",
    categoryIcon: FaCampground,
    description:
      "Experience the vibrant culture of Rajasthan through colourful markets, camel races, folk performances and traditional celebrations.",
    features: [
      {
        id: 1,
        title: "Camel Races",
        icon: FaPersonWalkingLuggage,
      },
      {
        id: 2,
        title: "Folk Music",
        icon: FaMusic,
      },
      {
        id: 3,
        title: "Handicrafts",
        icon: FaBagShopping,
      },
    ],
    slug: "pushkar-fair",
  },
  {
    id: 7,
    title: "Ladakh Festival",
    zone: "north",
    category: "Cultural",
    location: "Amritsar, Punjab",
    date: "13 Apr",
    image: "/images/festivals/baisakhi.jpg",
    badgeClass: "green",
    categoryIcon: FaMasksTheater,
    description:
      "Discover Punjab at its energetic best with Bhangra, colourful traditional dress, harvest celebrations and joyful community gatherings.",
    features: [
      {
        id: 1,
        title: "Bhangra",
        icon: FaPeopleGroup,
      },
      {
        id: 2,
        title: "Folk Music",
        icon: FaDrum,
      },
      {
        id: 3,
        title: "Harvest",
        icon: FaLeaf,
      },
    ],
    slug: "baisakhi-festival",
  },
  {
    id: 8,
    title: "Ganesh Chaturthi ",
    zone: "north",
    category: "Cultural",
    location: "Leh, Ladakh",
    date: "15 - 17 Oct",
    image: "/images/festivals/ganesh-chaturthi.jpg",
    badgeClass: "purple",
    categoryIcon: FaMasksTheater,
    description:
      "Explore the rich Himalayan culture of Ladakh through traditional dances, colourful costumes and spectacular mountain celebrations.",
    features: [
      {
        id: 1,
        title: "Mountain Culture",
        icon: FaMountainSun,
      },
      {
        id: 2,
        title: "Traditional Dance",
        icon: FaPeopleGroup,
      },
      {
        id: 3,
        title: "Local Art",
        icon: FaPalette,
      },
    ],
    slug: "ladakh-festival",
  },

  {
    id: 9,
    title: "Rath Yatra",
    zone: "south",
    category: "Religious",
    location: "Puri, Odisha",
    date: "Jun - Jul",
    image: "/images/festivals/kumbh-mela.jpg",
    badgeClass: "blue",
    categoryIcon: FaLandmark,
    description:
      "Witness the spectacular Rath Yatra of Puri with enormous decorated chariots and thousands of devotees filling the historic streets.",
    features: [
      {
        id: 1,
        title: "Grand Chariots",
        icon: FaCampground,
      },
      {
        id: 2,
        title: "Devotion",
        icon: FaHandsPraying,
      },
      {
        id: 3,
        title: "Processions",
        icon: FaPeopleGroup,
      },
    ],
    slug: "rath-yatra",
  },
  {
    id: 10,
    title: "Chhath Puja",
    zone: "south",
    category: "Religious",
    location: "Patna, Bihar",
    date: "Oct - Nov",
    image: "/images/festivals/pushkar-fair.jpg",
    badgeClass: "orange",
    categoryIcon: FaLandmark,
    description:
      "Experience the deeply spiritual Chhath Puja where devotees gather along rivers and ghats to offer prayers to the sun.",
    features: [
      {
        id: 1,
        title: "River Rituals",
        icon: FaWater,
      },
      {
        id: 2,
        title: "Sun Worship",
        icon: FaHandsPraying,
      },
      {
        id: 3,
        title: "Community",
        icon: FaPeopleGroup,
      },
    ],
    slug: "chhath-puja",
  },
  {
    id: 11,
    title: "Ganesh Chaturthi",
    zone: "east",
    category: "Religious",
    location: "Mumbai, Maharashtra",
    date: "31 Aug - 02 Sep",
    image: "/images/festivals/baisakhi.jpg",
    badgeClass: "pink",
    categoryIcon: FaLandmark,
    description:
      "Celebrate the arrival of Lord Ganesha with colourful processions, beautifully crafted idols, music and vibrant community celebrations.",
    features: [
      {
        id: 1,
        title: "Grand Idols",
        icon: FaPalette,
      },
      {
        id: 2,
        title: "Live Music",
        icon: FaMusic,
      },
      {
        id: 3,
        title: "Processions",
        icon: FaPeopleGroup,
      },
    ],
    slug: "ganesh-chaturthi",
  },
  {
    id: 12,
    title: "Navratri",
    zone: "east",
    category: "Cultural",
    location: "Ahmedabad, Gujarat",
    date: "Sep - Oct",
    image: "/images/festivals/ganesh-chaturthi.jpg",
    badgeClass: "purple",
    categoryIcon: FaMasksTheater,
    description:
      "Experience Gujarat's energetic Navratri nights with colourful Garba, Dandiya, traditional clothing and festive celebrations.",
    features: [
      {
        id: 1,
        title: "Garba",
        icon: FaPeopleGroup,
      },
      {
        id: 2,
        title: "Folk Music",
        icon: FaMusic,
      },
      {
        id: 3,
        title: "Traditional Art",
        icon: FaPalette,
      },
    ],
    slug: "navratri",
  },
  {
    id: 13,
    title: "Goa Carnival",
    zone: "west",
    category: "Cultural",
    location: "Goa",
    date: "Feb",
    image: "/images/festivals/kumbh-mela.jpg",
    badgeClass: "blue",
    categoryIcon: FaMasksTheater,
    description:
      "Discover Goa's colourful carnival with lively street parades, music, dance performances and vibrant coastal celebrations.",
    features: [
      {
        id: 1,
        title: "Street Parade",
        icon: FaPeopleGroup,
      },
      {
        id: 2,
        title: "Live Music",
        icon: FaMusic,
      },
      {
        id: 3,
        title: "Costumes",
        icon: FaPalette,
      },
    ],
    slug: "goa-carnival",
  },
  {
    id: 14,
    title: "Khajuraho Dance Festival",
    zone: "west",
    category: "Cultural",
    location: "Khajuraho, Madhya Pradesh",
    date: "Feb",
    image: "/images/festivals/pushkar-fair.jpg",
    badgeClass: "purple",
    categoryIcon: FaMasksTheater,
    description:
      "Experience classical Indian dance performances against the spectacular backdrop of Khajuraho's historic temples.",
    features: [
      {
        id: 1,
        title: "Classical Dance",
        icon: FaPeopleGroup,
      },
      {
        id: 2,
        title: "Heritage",
        icon: FaLandmark,
      },
      {
        id: 3,
        title: "Performing Art",
        icon: FaPalette,
      },
    ],
    slug: "khajuraho-dance-festival",
  },
  {
    id: 15,
    title: "Bastar Dussehra",
    zone: "central",
    category: "Cultural",
    location: "Jagdalpur, Chhattisgarh",
    date: "Sep - Oct",
    image: "/images/festivals/baisakhi.jpg",
    badgeClass: "orange",
    categoryIcon: FaMasksTheater,
    description:
      "Discover one of India's most distinctive cultural celebrations featuring tribal traditions, ceremonies and spectacular processions.",
    features: [
      {
        id: 1,
        title: "Tribal Culture",
        icon: FaPeopleGroup,
      },
      {
        id: 2,
        title: "Ceremonies",
        icon: FaFire,
      },
      {
        id: 3,
        title: "Local Art",
        icon: FaPalette,
      },
    ],
    slug: "bastar-dussehra",
  },
  {
    id: 16,
    title: "Lokrang Festival",
    zone: "central",
    category: "Cultural",
    location: "Bhopal, Madhya Pradesh",
    date: "Jan",
    image: "/images/festivals/ganesh-chaturthi.jpg",
    badgeClass: "green",
    categoryIcon: FaMasksTheater,
    description:
      "Explore India's diverse folk traditions through dance, music, handicrafts and cultural performances at Bhopal's Lokrang Festival.",
    features: [
      {
        id: 1,
        title: "Folk Dance",
        icon: FaPeopleGroup,
      },
      {
        id: 2,
        title: "Folk Music",
        icon: FaMusic,
      },
      {
        id: 3,
        title: "Handicrafts",
        icon: FaBagShopping,
      },
    ],
    slug: "lokrang-festival",
  },
];
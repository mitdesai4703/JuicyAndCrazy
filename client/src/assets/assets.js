import logo from "./logo.png";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import accImg from "./accImg.png"
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./main_banner_bg.png";
import add_address_iamge from "./add_address_image.svg";
import assortedflavours from "./assortedflavours.jpg"
import orangecandy from "./candy.avif";
import blackberrycandy from "./blackberrycandy.png";
import litchicandy from "./litchicandy.png";
import mangocandy from "./mangocandy.png";
import heroimg from "./hero.png";
import pineapplecandy from "./pineapplecandy.png";
import hall from "./hall.jpg";
import hero2 from "./hero2.png";
import hero3 from "./hero3.png";
import hero4 from "./hero4.png";
import hero5 from "./hero5.png";


import { FaLeaf, FaShippingFast, FaRecycle, FaIceCream } from "react-icons/fa";

export const assets = {
  logo,
  search_icon,
  remove_icon,
  orangecandy,
  blackberrycandy,
  litchicandy,
  heroimg,
  mangocandy,
  pineapplecandy,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,

  add_address_iamge,
  box_icon,
  accImg,
  hall,
  hero2,
  hero3,
  hero4,
  hero5,
};



export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest Delivery",
    description: " delivered in under 30 minutes.",
  },
  {
    icon: leaf_icon,
    title: "Freshness Guaranteed",
    description: "Fresh produce straight from the source.",
  },
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Quality at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];

export const dummyProducts = [
  
];

export const dummyAddress = [
 
];

export const dummyOrders = [
 
];


export const categories = [
  {
    text: "Tangy Orange Icepop",
    path: "Tangy Orange",
    image: orangecandy,
    bgColor: "#FEF6DA",
  },
  {
    text: "Bold Blackberry Icepop",
    path: "Bold Blackberry",
    image: blackberrycandy,
    bgColor: "#9D8B91",
  },
  {
    text: "Lovable Litchi Icepop",
    path: "Lovable Litchi",
    image: litchicandy,
    bgColor: "#FEE6CD",
  },
  {
    text: "Spanish Mango Icepop",
    path: "Spanish Mango",
    image: mangocandy,
    bgColor: "#ffe259",
  },
  {
    text: "Juicy Pineapple Icepop",
    path: "Juicy Pineapple",
    image: pineapplecandy,
    bgColor: "#e6ffe6",
  },
  {
  text: "Assorted Flavours",
  path: "Mix of All",
  image: assortedflavours, 
  bgColor: "#fff0e6",
},
  
];


export const testimonials = [
  {
    message: "Absolutely love the mango icepop! So fresh, so tasty!",
    name: "Anjali M.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    message: "Delivery was quick and packaging is adorable!",
    name: "Rohit K.",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    message: "Guava-chili flavor is insane! Fan for life.",
    name: "Simran T.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    message: "My kids loved it! Guilt-free & tasty.",
    name: "Neha D.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    message: "Fresh, fruity, and eco-friendly!",
    name: "Aarav S.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    message: "Best vegan pops I’ve tried. Highly recommend.",
    name: "Kritika V.",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
  },
  {
    message: "Everyone at the party loved it!",
    name: "Mehul T.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    message: "Perfect for summer. Feels homemade.",
    name: "Pooja S.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    message: "Fast delivery, great taste!",
    name: "Harsh P.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    message: "Natural flavors stand out. No fake stuff!",
    name: "Ishita R.",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
  },
];

export const whyChooseUsFeatures = [
  {
    icon: "FaLeaf",
    title: "100% Natural",
    desc: "No preservatives, just pure fruity freshness.",
  },
  {
    icon: "FaShippingFast",
    title: "Lightning Delivery",
    desc: "We deliver chilled goodness right to your door.",
  },
  {
    icon: "FaRecycle",
    title: "Eco Packaging",
    desc: "We care about the planet as much as your taste buds.",
  },
  {
    icon: "FaIceCream",
    title: "Unique Blends",
    desc: "Fun flavors you won't find anywhere else!",
  },
];

export const slides = [
  {
    src: hero2,
    title: "Assorted Icepop Box",
    desc: "Front side of our Juicy’nCrazy Ice Pops assorted pack, ready to delight your taste buds!",
  },
  {
    src: hero3,
    title: "Nutrition Facts & Flavours",
    desc: "Five natural fruit flavours: Mango , Pineapple , Blackberry , Orange , Litchi ",
  },
  {
    src: hero4,
    title: "Guaranteed Safe Quality",
    desc: "FSSAI approved  • Made with RO water  • Hygienic & safe for everyone  • Taste and safety guaranteed",
  },
  {
    src: hero5,
    title: "Pure & Natural Ingredients",
    desc: "Made with natural fruit flavours  • No Saccharin  • Rich in Vitamin C  • Vegan friendly ",
  },
];


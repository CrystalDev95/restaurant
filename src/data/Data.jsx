import facebook from "../assets/images/facebook.svg";
import messenger from "../assets/images/messenger.svg";
import instagram from "../assets/images/instagram.svg";
import bibimbap from '../assets/images/bibimbap.png'
import budae from '../assets/images/budae.png'
import riceCake from '../assets/images/rice-cake.png'
import jeongol from '../assets/images/jeongol.png'
import bulgogi from '../assets/images/bulgogi.png'
import nengmyeon from '../assets/images/nengmyeon.png'
import story1 from '../assets/images/story1.jpg'
import story2 from '../assets/images/story2.jpg'
import story3 from '../assets/images/story3.jpg'
import story4 from '../assets/images/story4.jpg'
import story5 from '../assets/images/story5.jpg'
import story6 from '../assets/images/story6.jpg'
import { RiCustomerService2Line } from 'react-icons/Ri'
import { MdOutlineRateReview, MdPhoneInTalk } from 'react-icons/md'
import { TiTickOutline } from 'react-icons/ti'

export const heroapi = {
  title: "Dong De Moon",
  subtitle: "Authentic Korean Food",
  socialLinks: [{ icon: facebook }, { icon: messenger }, { icon: instagram }],
};

export const aboutapi = {
  title: "About Us",
  subtitle: "The best Korean food in Auckland",
  description:
    "Dong De Moon Was established in [Year] and we have been providing Aucklanders with authentic Korean food and best customer service. We do our best to use fresh ingredients at all times so our valued customers can enjoy meals",
};


export const menu = {
  title: "Signature",
  subtitle: "Menu",
  items: [
    {
      title: "Budae Jjigae",
      text: "Jordan Brands signature model for the past few years, Jayson Tatum will be dawning the Air Jordan 37 this season before attaining potentially his first signature sneaker with Jumpman, which he rumored to be in the works recently via his Twitter.",
      img: budae,
      category: "stew"
    },
    {
      title: "NengMyun",
      text: "Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.",
      img: nengmyeon,
      category: "noodles"
    },
    {
      title: "Bibimbap",
      text: "The Nike Air Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.",
      img: bibimbap,
      category: "rice"
    },
    {
      title: "Ddeokbbokki",
      text: "Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.",
      img: riceCake,
      category: "signature"
    },
    {
      title: "Kimchi Jjigae",
      text: "The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.",
      img: bulgogi,
      category: "stew"
    },
    {
      title: "Jeongol",
      text: "For the first time in over a decade, a signature basketball silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm superstar Breanna Stewart. Puma Stewie 1 Quiet Fire will be available this Friday.",
      img: jeongol,
      category: "stew"
    }
  ]
}

export const stories = {
  title: "Dong De Moon",
  subtitle: "Updates",
  items: [
    {
      title: "Ddeokbboki (떡볶이)",
      text: "In Korea we use the word refreshing to describe boiling hot spicy soup! So if you are in the mood for something 'refreshing' come in and try our spicy seafood soup with noodles",
      img: story1,
    },
    {
      title: "Buldak (불닭)",
      text: "Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.",
      img: story2,
    },
    {
      title: "Bibimbap (비빔밥)",
      text: "The Nike Air Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.",
      img: story3,
    },
    {
      title: "Ddeokbbokki",
      text: "Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.",
      img: story4,
    },
    {
      title: "Buldak (불닭)",
      text: "The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.",
      img: story5,
    },
    {
      title: "Jjamppong (짬뽕)",
      text: "For the first time in over a decade, a signature basketball silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm superstar Breanna Stewart. Puma Stewie 1 Quiet Fire will be available this Friday.",
      img: story6,
    }
  ]
}

export const values = [
  {
    icon: <RiCustomerService2Line />,
    value: "Service",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a fuga sint velit sapiente consectetur vel porro soluta obcaecati."
  },
  {
    icon: <TiTickOutline />,
    value: "Quality",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a fuga sint velit sapiente consectetur vel porro soluta obcaecati."
  },
  {
    icon: <MdOutlineRateReview />,
    value: "Review",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a fuga sint velit sapiente consectetur vel porro soluta obcaecati."
  },
  {
    icon: <MdPhoneInTalk />,
    value: "Communication",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a fuga sint velit sapiente consectetur vel porro soluta obcaecati."
  },
]

export const buttons = [
  {
    title: "All"
  },
  {
    title: "Signature"
  },
  {
    title: "Rice"
  },
  {
    title: "Stew"
  },
  {
    title: "Noodles"
  },
  {
    title: "Sides"
  },
]


export const menu2 = [
    {
      title: "Budae Jjigae (부대찌개)",
      text: "Jordan Brands signature model for the past few years, Jayson Tatum will be dawning the Air Jordan 37 this season before attaining potentially his first signature sneaker with Jumpman, which he rumored to be in the works recently via his Twitter.",
      img: story1,
      category: "Stew"
    },
    {
      title: "NengMyun (냉면)",
      text: "Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.",
      img: story2,
      category: "Noodles"
    },
    {
      title: "Bibimbap (비빔밥)",
      text: "The Nike Air Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.",
      img: story3,
      category: "Rice"
    },
    {
      title: "Ddeokbbokki (떡볶이)",
      text: "Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.",
      img: story4,
      category: "Signature"
    },
    {
      title: "Kimchi Jjigae (김치찌개)",
      text: "The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.",
      img: story5,
      category: "Stew"
    },
    {
      title: "Jeongol (전골)",
      text: "For the first time in over a decade, a signature basketball silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm superstar Breanna Stewart. Puma Stewie 1 Quiet Fire will be available this Friday.",
      img: story6,
      category: "Stew"
    }
  ]

export const contact = [
  {
    title: "Opening Hours",
    text1: "12pm ~ 12am (weekdays)",
    text2: "12pm ~ 1am (weekends)"
  },
  {
    title: "Contact Details",
    text1: "Phone: 021-000-000",
    text2: "Address: high street CBD Auckland"
  },
  {
    title: "COPYRIGHT",
    text1: "COPYRIGHT@Crystal All rights reserved",
    text2: "Designed & developed by Grace Yeo"
  }
]
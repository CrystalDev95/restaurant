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
import { RiCustomerService2Line } from 'react-icons/ri'
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: budae,
      category: "stew"
    },
    {
      title: "NengMyun",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
      img: nengmyeon,
      category: "noodles"
    },
    {
      title: "Bibimbap",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: bibimbap,
      category: "rice"
    },
    {
      title: "Ddeokbbokki",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: riceCake,
      category: "signature"
    },
    {
      title: "Kimchi Jjigae",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: bulgogi,
      category: "stew"
    },
    {
      title: "Jeongol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: story2,
    },
    {
      title: "Bibimbap (비빔밥)",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: story3,
    },
    {
      title: "Ddeokbbokki",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: story4,
    },
    {
      title: "Buldak (불닭)",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: story5,
    },
    {
      title: "Jjamppong (짬뽕)",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
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



export const menu2 = [
    {
      title: "Rice Cake (떡볶이)",
      text: "text",
      img: story1,
      category: "Signature"
    },
    {
      title: "Buldak (불닭)",
      text: "text",
      img: story2,
      category: "Signature"
    },
    {
      title: "NengMyun (냉면)",
      text: "text",
      img: story3,
      category: "Noodles"
    },
    {
      title: "Jokbal (족발)",
      text: "text",
      img: story4,
      category: "Signature"
    },
    {
      title: "Kimchi Jjigae (김치찌개)",
      text: "text",
      img: story5,
      category: "Stew"
    },
    {
      title: "Jeongol (전골)",
      text: "text",
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
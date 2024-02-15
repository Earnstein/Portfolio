import {  linkedin, twitter, github, project1, project2, project3, projectify } from "../assets/images";

export  const navLinks = [
    { page: "Home", href: "Home" },
    { page: "Skills", href: "Skills" },
    { page: "Projects", href: "Projects" },
    { page: "Contact", href: "Contact" },
  ];

  export const socialMedia = [
    { src: github, href:"https://github.com/Earnstein", alt: "github logo" },
    { src: twitter, href:"https://twitter.com/b_dammylolah", alt: "twitter logo" },
    { src: linkedin, href:"https://www.linkedin.com/in/damilola-bakare-63890421b",alt: "linkedin logo" },
];


export const projects = [
  { title: "Projectify",image: projectify, stack: "NextJS", description : "AI tools for project Engineers", link: "https://projectify-nine.vercel.app/"},
  { title: "Naomi", image: project2, stack: "React, FastAPI", description : "AI Voice Assitance", link: "https://github.com/Earnstein/react-projects/tree/main/eAI"},
  { title: "eShop", image: project1, stack: "MERN", description : "E-commerce store", link: "https://github.com/Earnstein/react-projects/tree/version-3/eShop"},
  { title: "Earneats",image: project3,stack: "Django", description : "Online Food Marketplace", link: "https://github.com/Earnstein/python-fiesta/tree/master/earneats"},
];
import {  linkedin, twitter, github, project1, project2, project3 } from "../assets/images";

export  const navLinks = [
    { page: "Home", href: "Home" },
    { page: "Skills", href: "Skills" },
    { page: "Projects", href: "Projects" },
    { page: "Contact", href: "Contact" },
  ];

  export const socialMedia = [
    { src: twitter, href:"https://twitter.com/b_dammylolah", alt: "twitter logo" },
   { src: github, href:"https://github.com/Earnstein", alt: "github logo" },
    { src: linkedin, href:"https://www.linkedin.com/in/damilola-bakare-63890421b",alt: "linkedin logo" },
];


export const projects = [
  { title: "eShop", image: project1, stack: "MERN", description : "e-commerce store", link: "https://github.com/Earnstein/react-projects/tree/version-3/eShop"},
  { title: "Earneats",image: project3,stack: "Django", description : "Online food marketplace", link: "https://github.com/Earnstein/python-fiesta/tree/master/earneats"},
  { title: "Naomi", image: project2, stack: "React, FastAPI", description : "AI Vioce assitance", link: "https://github.com/Earnstein/react-projects/tree/main/eAI"},
];
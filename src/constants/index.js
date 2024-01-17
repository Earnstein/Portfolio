import { facebook, instagram, linkedin, twitter, project1, project2, project3, project4 } from "../assets/images";

export  const navLinks = [
    { page: "Home", href: "Home" },
    { page: "Skills", href: "Skills" },
    { page: "Projects", href: "Projects" },
    { page: "Contact", href: "Contact" },
  ];

  export const socialMedia = [
    { src: facebook, href:"https://www.facebook.com/einstein.damilola", alt: "facebook logo" },
    { src: twitter, href:"https://twitter.com/b_dammylolah", alt: "twitter logo" },
    { src: instagram, href:"https://instagram.com/earn_stein?igshid=MzNlNGNkZWQ4Mg==", alt: "instagram logo" },
    { src: linkedin, href:"https://www.linkedin.com/in/damilola-bakare-63890421b",alt: "linkedin logo" },
];


export const projects = [
  { title: "Earneats", image: project1},
  { title: "Naomi", image: project2},
  { title: "Zestpay",image: project3},
  { title: "e-GPT", image:project4},
  // { title: "Zestpay", image: project3, description: "A fintech application created with django"},
  // { title: "Hoobank", image:project4, description: "Mordern bank app web interface with react"},
  // { title: "Naomi", image: project1, description: "A virtual assistance created with react openAI and fastAPI "},
  // { title: "Earneats", image: project2, description: "Online food market made with django"},
  // { title: "Socialpedia", image: project3, description: "A mordern social media platform"},
];
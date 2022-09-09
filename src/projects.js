const projects = [
  {
    id: 1,
    title: "Enrollments Tool",
    image: process.env.PUBLIC_URL + `/images/enrollments_tool.png`,
    altText: "chickagotchi project image",
    description:
      "This is a RESTful application that features an intuitive, mobile friendly interface as well as other features such as the ability to filter as well as form validation for updating/adding new students and campuses.",
    projectLink: "https://github.com/corumgold/enrollments-crud-app",
    tools: [
      "JavaScript",
      "LESS",
      "React",
      "Redux",
      "Express",
      "Node",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    title: "My Portfolio Website",
    image: process.env.PUBLIC_URL + `/images/corygolddev.png`,
    altText: "portfolio project image",
    description:
      "Holy meta, Batman! This is the website you're looking at right now! Creating this site was another labor of love in an attempt to show the world a little bit about me and my personal style.",
    projectLink: "https://github.com/corumgold/corygold.dev",
    tools: ["JavaScript", "LESS", "React", "Node"],
  },
  {
    id: 2,
    title: "Chickagotchi",
    image: process.env.PUBLIC_URL + "/images/chickagotchi.png",
    altText: "chickagotchi project image",
    description:
      "This was my first attempt at an app using SQL. It's Tamagotchi... but with chickens! I had a lot of fun creating it, and I would love to flesh it out more in the future! ",
    projectLink: "https://github.com/corumgold/chickagotchi",
    tools: ["JavaScript", "LESS", "Express", "Node", "PostgreSQL"],
  },
];

export default projects;

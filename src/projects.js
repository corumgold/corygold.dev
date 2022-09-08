const projects = [
  {
    id: 1,
    title: "Enrollments Tool",
    image: process.env.PUBLIC_URL + `/images/enrollments_tool.png`,
    altText: "chickagotchi project image",
    description:
      "This is a RESTful application that features an intuitive, mobile friendly interface as well as other features such as the ability to filter as well as form validation for updating/adding new students and campuses.",
    projectLink: "https://github.com/corumgold/enrollments-crud-app",
    tools: ["JavaScript", "React", "Redux", "Express", "Node", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Chickagotchi",
    image: process.env.PUBLIC_URL + "/images/chickagotchi.png",
    altText: "chickagotchi project image",
    description: "Chickagotchi placeholder",
    projectLink: "https://github.com/corumgold/chickagotchi",
    tools: ["JavaScript", "Express", "Node", "PostgreSQL"],
  },
];

export default projects;

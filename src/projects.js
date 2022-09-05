const projects = [
  {
    id: 1,
    title: "Enrollments Tool",
    image: process.env.PUBLIC_URL + `/images/enrollments_tool.png`,
    altText: "chickagotchi project image",
    description:
      "I built this app to mimic the interface of an application that manages different school campuses as well as the students enrolled. It is a RESTful application that features an intuitive, mobile friendly interface as well as other key features such as the ability to filter students and campuses as well as form validation for updating/adding new students and campuses.",
    projectLink: "https://github.com/corumgold/enrollments-crud-app",
  },
  {
    id: 2,
    title: "Chickagotchi",
    image: process.env.PUBLIC_URL + "/images/chickagotchi.png",
    altText: "chickagotchi project image",
    description: "Chickagotchi placeholder",
    projectLink: "https://github.com/corumgold/chickagotchi",
  },
];

export default projects;

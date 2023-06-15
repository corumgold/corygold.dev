const projects = [
  {
    id: 1,
    title: "2 Minute Fit",
    image: process.env.PUBLIC_URL + `/images/2minfit.png`,
    altText: "2 minute fit project image",
    description:
      "2 Minute Fit is a productivity/health application that provides users with daily exercises to complete between meetings or during other breaks while working at a desk.",
    projectLink: "https://github.com/corumgold/2min.fit",
    liveLink: "https://2min.fit/",
    tools: ["JavaScript", "React", "Node"],
  },
  {
    id: 2,
    title: "Optimate",
    image: process.env.PUBLIC_URL + `/images/optimate.png`,
    altText: "optimate project image",
    description:
      "Optimate takes all of the work that goes into dating apps off your hands. All you have to do is answer a few questions to set up your profile, wait for our special algorithm to pair you with your perfect matches, and start chatting!",
    projectLink: "https://github.com/OG-FSA-2208/Optimate",
    liveLink: "https://optim8.netlify.app/",
    tools: [
      "JavaScript",
      "LESS",
      "React",
      "Node",
      "Redux",
      "Next.js",
      "supabase",
    ],
  },
  {
    id: 3,
    title: "Simpli Money",
    image: process.env.PUBLIC_URL + `/images/simpli_money.png`,
    altText: "simpli money project image",
    description:
      "My idea behind this app is to help people get ahold of their finances by providing research-backed (and cited) advice for folks who are unsure how to go about saving for emergencies, paying off debt, saving for retirement, etc.",
    projectLink: "https://github.com/corumgold/simpli-money",
    liveLink: "https://www.simpli.money",
    tools: ["JavaScript", "LESS", "React", "Node", "Redux"],
  },
  {
    id: 4,
    title: "My Portfolio Website",
    image: process.env.PUBLIC_URL + `/images/corygolddev.png`,
    altText: "portfolio project image",
    description:
      "Holy meta, Batman! This is the website you're looking at right now! Creating this site was another labor of love in an attempt to show the world a little bit about me and my personal style.",
    projectLink: "https://github.com/corumgold/corygold.dev",
    tools: ["JavaScript", "LESS", "React", "Node"],
  },
  {
    id: 5,
    title: "Enrollments Tool",
    image: process.env.PUBLIC_URL + `/images/enrollments_tool.png`,
    altText: "enrollments project image",
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
    id: 6,
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

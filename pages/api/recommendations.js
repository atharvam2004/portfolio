// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "ARIV Technologies, Bangalore",
    image: "images/sikandar.png",
    designation:
      "MERN | PostgreSQL | Prisma ORM | NextJS | Ant Design | Bootstrap | Mongoose | REST API's",
    view1:
      "• Interned as a Full-Stack web developer, developing software solutions for diverse businesses, and organizations (majorly MERN).",
    view2:
      "• Served as a proficient MERN stack full stack developer during the internship.",
    view3:
      "• Collaborated effectively with a team on GitHub to design and deliver impactful projects.",
    view4:
      "• Assumed responsibility for writing and conducting code reviews to ensure code quality.",

    linkedinURL: "https://www.siriambari.com/",
  },
  {
    id: 1,
    name: "PHN Technology, Pune",
    image: "images/muhammad.jpeg",
    cert:"https://drive.google.com/file/d/1yto_IY8EmE3tAFGL3e_MuIkwArlJM080/view?usp=drive_link",

    designation: "REACTJS |CSS5 | BOOTSTRAP | MONGODB | FIREBASE | EXPRESS",
    view1:
      "• Completed an internship at PHN Technologies, actively involved in developing responsive user interfaces and websites using JavaScript and CSS.",
    view2:
      "• Ensured the websites were visually appealing, mobile-friendly, and easy to navigate while meeting project specifications.",
    view3:
      "• Ensured optimal user experience with a responsive design on various devices.",
    view4:
      "• Contributed to various projects, gaining valuable experience in design development and enhancing user experiences",
    linkednURL: "https://phntechnology.com/",
  },
 
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}

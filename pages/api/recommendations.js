// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    
    name: "Joliday/Eklavya",
    cert:"https://drive.google.com/file/d/1m_TQmnpwvsarML2z8sV58xD0zue6NS1r/view?usp=sharing",

    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEVfvnpnwYFxxYluxIaL0J7Q7NjW7t3I6dKw376O0aFkwH7n9eva8OCW1Kh6yZGj2rO+5cl3yI634sPg8uWDzZir3bnE586a1quh2bDt+PD8/vz///+Ay5X0+/aZ1aqs3bqYG/mUAAABjklEQVR4AX3SUY6EIBBF0Qe0IoiIgKpVMr3/XU5IyGgy6T6/Xh+SCFRCKoFvXl2vB6PwkR1GrZ2ePs94Nwg/d2H5OBE6CSxRe3wwpwxArB+LaZxQi2FTj108gxmV2gaLxnTTM1hRIfcGTezc8j+wq26HCGXDPbG3AJDd0crDDvsjmGEtqqOTqMThdb6DM8a+33Z1T8CYIO6AEjEzuQy0rxDytaCx+0DdEbd+pCRxOYN6nfV+/yhbGRfAqkgHxBYsrOb+LzCFY0fR1pQC8OMyrsIRzZK4lztReF3HyCuwuDfefF7tuY18ZgjNTIU41ZPCWyYOtgX+pDcAGcdSUvAAcMmDTo9m5lGikpdXqJMCKtGAxmre8CTWFSs5KdolVOIZD8tG7+ukNcdXC0be8cdOiWnS1MfVtAWR+D4ub8W5FIt+/r6hXq1SZislTmN3RjENd5ALu58r7yERJ+PdeQYBcdj72LkwlcLMZ5RLV0oUAARudnKFqLjB2yWkcbb4R+TJeAHAD73BN2qW+Mr+m/8FiyQZ27bpT7wAAAAASUVORK5CYII=",
    designation:
      "NextJS | MERN | PostgreSQL | Prisma ORM | Ant Design | Tailwind | Mongoose | REST API's | Express",
    view1:
      "• Enabling users to create and join collaborative travel experiences, enhancing the platform's emphasis on community and shared adventures.",
    view2:
      "• Currently developing a new user-facing feature on the Yoliday platform using Next.js, React.js, and Typescript.  ",
    view3:
      "• Actively contributing to the long-term scalability of the project by building reusable components and front-end libraries.      ",
    view4:
      "• Currently translating intricate designs and wireframes into high-quality, responsive code      ",

    linkedinURL: "http://yoliday.in/",
  },
  {
    id: 1,
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
    id: 2,
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

const portfolio = [
    {
        id: 0,
        projectName: "ARIV TECH",
        url: "https://drive.google.com/file/d/1yto_IY8EmE3tAFGL3e_MuIkwArlJM080/view?usp=drive_link",
        image: "projects/otawix.png",
        projectDetail: "• Interned as a Full-Stack web developer, developing software solutions for diverse businesses, and organizations (majorly MERN). • Served as a proficient MERN stack full stack developer during the internship. • Collaborated effectively with a team on GitHub to design and deliver impactful projects. • Assumed responsibility for writing and conducting code reviews to ensure code quality.",
        technologiesUsed: [
            {
                tech: "MERN"
            },
            {
                tech: "PostgreSQL"
            },
            {
                tech: " Prisma ORM"
            },
           
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 1,
        projectName: "PHN Technologies",
        url: "https://phntechnology.com/",
        image: "projects/jmm.png",
        projectDetail: "• Completed an internship at PHN Technologies, actively involved in developing responsive user interfaces and websites using JavaScript and CSS. • Ensured the websites were visually appealing, mobile-friendly, and easy to navigate while meeting project specifications. • Contributed to various projects, gaining valuable experience in design development and enhancing user experiences",
        technologiesUsed: [
            {
                tech: "Javascipt"
            },
            {
                tech: "MySQL"
            },
            {
                tech: "BootStrap"
            },
            {
                tech: "CSS5"
            },
        ]
    },
   
    // {
    //     id: 2,
    //     projectName: "Spatay",
    //     url: "https://spatay.com/",
    //     image: "projects/spatay.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}

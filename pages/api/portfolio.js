const portfolio = [
    {
        id: 0,
        projectName: "Aajka Menu",
        url: "https://aajcha-menu.vercel.app/",
        image: "projects/aaj.png",
        view1:
        "• An efficient meal planning solution that serves both customers and mess owners, featuring a smart review and rating system to highlight reliable mess options.",
      view2:
        "• Enhances efficiency by delivering real-time updates and significantly minimizes time wastage by nearly 90%.",
      technologiesUsed: [
            {
                tech :"Redux"
            },
            {
                tech: "MERN"
            },
            {
                tech: "Mongo DB"
            },
            {
                tech: "CSS5"
            },
            {
                tech: "Tailwind"
            },
        ]
    }, 
    {
        id: 0,
        projectName: "Dukaan",
        url: "https://shoppee-mern.onrender.com/",
        image: "projects/ecomm.jpeg",
        view1:
        "• Utilized Redux for state management, Developed an intuitive shopping experience by implementing advanced filters, search functionality and pagination, Implemented single admin control for product and order management.",
      view2:
        "• Leveraged Express and MongoDB for data storage/retrieval, managing sessions and authentication with PassportJS and JWT.",
      technologiesUsed: [
            {
                tech :"Redux"
            },
            {
                tech: "MERN"
            },
            {
                tech: "Mongo DB"
            },
           
           
            {
                tech: "CSS5"
            },
            {
                tech: "Tailwind"
            },
        ]
    },   {
        id: 1,
        projectName: "Siri Ambari",
        url: "https://siriambari.com",
        image: "projects/siri.png",
        view1:
        "• Streamlined Booking Process: Leveraged React to create an intuitive user interface for efficient customer room reservations.",
      view2:
        "• Error-Free Bookings: Implemented date validation and room type management using Prisma, ensuring collision-free bookings.",
      view3:
        "• Room Allocation Optimization: Utilized Postgres to set room type limits, maximizing occupancy and revenue.",
      view4:
        "• Enhanced Guest Satisfaction: Delivered a seamless booking experience, improving guest satisfaction and hotel efficiency.",
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
                tech: "CSS5"
            },
            {
                tech: "ANTD"
            },
        ]
    },
    {
        id: 3,
        projectName: "Atharva's Portfolio",
        url: "https://atharvasportfolio.netlify.app/",
        image: "projects/port.png",
        view1:
        "• Developed my portfolio website using Next.js, ensuring a highly responsive and smooth user experience on various devices.",
      view2:
        "• Employed CSS and Bootstrap to create an aesthetically pleasing and user-friendly design.",
      view3:
        "• Carefully crafted the layout and interactions in Figma to achieve a visually appealing and intuitive interface.",        technologiesUsed: [
            {
                tech: "NEXTJS"
            },
            {
                tech: "Tailwind CSS"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "Responsive Design"
            },
        ]
    },
    {
        id: 1,
        projectName: "Skill-Vista",
        url: "https://skillvista.co.in/",
        image: "projects/skill.png",
        view1:
        "• Developed Skill Vista portfolio website using React, with Props, Hooks for Lightweight, Fast-loading, and Enhanced User Experience.",
      view2:
        "• Ensured seamless responsiveness across multiple devices and screen sizes, allowing potential clients to access the portfolio effortlessly.",
  
      view3:
        "• Ensured optimal user experience with a responsive design on various devices.",
      view4:
        "• Incorporated MailJS API to enable effective communication with clients and streamline email interactions for inquiries and updates.",        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Figma"
            },
            {
                tech: "BootStrap"
            },
            {
                tech: "CSS5"
            },
        ]
    },
    {
        id: 2,
        projectName: "Highschool Admission Portal",
        url: "https://highschool-admission-webapp.github.io/",
        image: "projects/hs.png",
        view1:
        "• Developed a student admission management system website using React with seamless enrollment and document uploading.",
      view2:
        "• Utilized MongoDB for efficient storage and retrieval of student information.",
      view3:
        "• Ensured optimal user experience with a responsive design on various devices.",
      view4:
        "• Used Node.js to create a robust backend for efficient data processing.",        technologiesUsed: [
            {
                tech: "MERN"
            },
            {
                tech: "CSS5"
            },
            {
                tech: "BootStrap"
            },
            {
                tech: "Mongoose"
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

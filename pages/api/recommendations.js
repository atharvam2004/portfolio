// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Siri Ambari',
    image: "images/sikandar.png",
    designation: 'REACTJS | POSTGRESQL | NODE | EXPRESS | PRISMA ORM | SCSS | ANTD',
    view1: "• Streamlined Booking Process: Leveraged React to create an intuitive user interface for efficient customer room reservations.",
    view2: "• Error-Free Bookings: Implemented date validation and room type management using Prisma, ensuring collision-free bookings.",
    view3: "• Room Allocation Optimization: Utilized Postgres to set room type limits, maximizing occupancy and revenue.",
    view4: "• Enhanced Guest Satisfaction: Delivered a seamless booking experience, improving guest satisfaction and hotel efficiency.",

    linkedinURL: "https://www.siriambari.com/"
},
  {
    id: 1,
    name: 'Highschool Admission Portal',
    image: "images/nasir.png",
    designation: 'REACTJS |CSS5 | BOOTSTRAP | MONGODB | FIREBASE | EXPRESS',
    view1: "• Developed a student admission management system website using React with seamless enrollment and document uploading.",
    view2: "• Utilized MongoDB for efficient storage and retrieval of student information.",
    view3: "• Ensured optimal user experience with a responsive design on various devices.",
    view4: "• Used Node.js to create a robust backend for efficient data processing.",
    linkednURL: "https://highschool-admission-webapp.github.io/"
  },
  {
    id: 2,
    name: 'My Portfolio',
    image: 'images/adam.png',
    designation: 'NEXTJS | CSS5 | BOOTSTRAP | Responsive Design | FIGMA',
    view1: '• Developed my portfolio website using Next.js, ensuring a highly responsive and smooth user experience on various devices.',
    view2: '• Employed CSS and Bootstrap to create an aesthetically pleasing and user-friendly design.',
    view3: '• Carefully crafted the layout and interactions in Figma to achieve a visually appealing and intuitive interface.',
    linkednURL: 'https://atharvameherportfolio.netlify.app/'
  },
  
  {
    id: 3,
    name: 'Skill Vista',
    image: "images/muhammad.png",
    designation: 'REACTJS | CSS5 | BOOTSTRAP | EmailJS API | FIGMA',
    view1: "• Developed Skill Vista portfolio website using React, with Props, Hooks for Lightweight, Fast-loading, and Enhanced User Experience.",
    view2: "• Ensured seamless responsiveness across multiple devices and screen sizes, allowing potential clients to access the portfolio effortlessly.",
   
    view3: "• Ensured optimal user experience with a responsive design on various devices.",
    view4: "• Incorporated MailJS API to enable effective communication with clients and streamline email interactions for inquiries and updates.",
    linkednURL: "https://skillvista.co.in/"
  },
  
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}

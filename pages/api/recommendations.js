// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Siri Ambari',
    image: "images/sikandar.png",
    designation: 'REACTJS | POSTGRESQL | NODE | EXPRESS | PRISMA ORM | SCSS | ANTD',
    view: "• Streamlined Booking Process: Leveraged React to create an intuitive user interface for efficient customer room reservations.<br>• Error-Free Bookings: Implemented date validation and room type management using Prisma, ensuring collision-free bookings.<br>• Room Allocation Optimization: Utilized Postgres to set room type limits, maximizing occupancy and revenue.<br>• Enhanced Guest Satisfaction: Delivered a seamless booking experience, improving guest satisfaction and hotel efficiency.",
    view: "• Streamlined Booking Process: Leveraged React to create an intuitive user interface for efficient customer room reservations.<br>• Error-Free Bookings: Implemented date validation and room type management using Prisma, ensuring collision-free bookings.<br>• Room Allocation Optimization: Utilized Postgres to set room type limits, maximizing occupancy and revenue.<br>• Enhanced Guest Satisfaction: Delivered a seamless booking experience, improving guest satisfaction and hotel efficiency.",

    linkedinURL: "https://www.siriambari.com/"
},
  {
    id: 1,
    name: 'Nasir Khan',
    image: "images/nasir.jpg",
    designation: 'MERN | JavaScript | Tailwind | Sass | Bootstrap',
    view: "I wholeheartedly recommend Osama as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Osama's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  },
  {
    id: 2,
    name: 'Muhammad Ullah',
    image: "images/muhammad.jpeg",
    designation: 'MERN Stack Developer at Productbox',
    view: "I highly recommend Osama Javed for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
  {
    id: 3,
    name: 'Adam Murphy',
    image: "images/adam.png",
    designation: 'GSR MERL | Grad student at UC Santa Cruz',
    view: "Osama is a great student who is an enthusiastic learner. He is always ready to learn new skills and is a very hard worker. His leadership skills are maturing and he is in the right direction for success.",
    linkednURL: "#"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}

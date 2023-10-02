const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB,PostgreSQL, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 1,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 2,
        title: 'Problem Solving',
        desc: "My problem-solving skills in Java have been instrumental in delivering effective and efficient solutions to a wide range of challenges. From building comprehensive software systems to optimizing algorithms, I pride myself on my ability to tackle complex problems head-on and provide elegant solutions. My passion for Java development and my commitment to excellence make me a valuable asset to any software development team."

        
    },

]

export default function handler(req, res) {
    res.status(200).json(expertise)
}

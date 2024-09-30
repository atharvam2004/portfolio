const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a proficient full-stack developer with extensive experience building robust applications using Node.js, Golang, React.js-Redux, and Next.js. I have a deep understanding of scalable applications, microservices architecture, and front-end development. My previous internships have shaped me into a highly adaptive software engineer.',
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

import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [hindi, sethindi] = useState(0)
    const [english, setEnglish] = useState(0)
    const [jap, setJap] = useState(0)
    const [mar, setMar] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (hindi < 85) {
                sethindi(prevCount => prevCount + 1);
            }
            if (english < 80) {
                setEnglish(prevCount => prevCount + 1);
            }
            if (jap < 3) {
                setJap(prevCount => prevCount + 1);
            }
            if (mar < 90) {
                setMar(prevCount => prevCount + 1);
            }
        }, 30);
        return () => clearInterval(timer);
    }, [hindi, english,jap,mar ])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={hindi} size={75} />
                        <span className='text-xs font-bold text-Snow'>Hindi</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={75} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                    
                </div>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={mar} size={75} />
                        <span className='text-xs font-bold text-Snow'>Marathi</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={jap} size={75} />
                        <span className='text-xs font-bold text-Snow'>Japanese</span>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Languages
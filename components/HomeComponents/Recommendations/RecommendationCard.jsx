import React from 'react'
import CardLayout from '../../Common/CardLayout'

const RecommendationCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="p-8 h-full relative card_stylings transition">
                <img src={data?.image} className="absolute z-10 right-10 -top-5 border-Green w-16 h-16  border-[3px] rounded-full m-0" />
                <div className=" text-Snow underline ">
                    <a href={data?.linkednURL} target="_blank" rel="noreferrer">{data?.name}</a>
                    <a href={data?.cert} className="text-sm mt-2 text-Snow font-normal italic m-5 " target="_blank" rel="noreferrer">Certificate</a>
                </div>
                <div className="text-sm text-Green italic mt-1 m-2">{data?.designation}</div>
                <div className="text-sm mt-2 text-LightGray font-normal ">{data?.view1}</div>
                <div className="text-sm mt-2 text-LightGray font-normal ">{data?.view2}</div>
                <div className="text-sm mt-2 text-LightGray font-normal ">{data?.view3}</div>
                <div className="text-sm mt-2 text-LightGray font-normal ">{data?.view4}</div>

            </div>

        </CardLayout>

        
    )
}

export default RecommendationCard
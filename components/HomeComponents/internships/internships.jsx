import React from "react";
import { useQuery } from "react-query";
import BannerLayout from "../../Common/BannerLayout";
import PortfolioCard from "../../Portfolio/PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../../Common/ImageAndParagraphSkeleton";

const Portfolio = () => {

  const { isLoading, error, data } = useQuery('portfolio', () =>
      axios.get('api/portfolio')
          .then(({ data }) => data)
          .catch(error => console.error('Error fetching testimonials:', error)))
  return (
      <BannerLayout  className="h-full space-y-2 p-8 card_stylings transition">
                    

         <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Projects</div>

         <div className="grid w-full  mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">

              {
                  isLoading ?
                      [1, 2, 3, 4].map(() => (
                          <ImageAndParagraphSkeleton className={"w-full object-cover"} />
                      ))
                      :
                      data?.map((data, key) => (
                          <PortfolioCard key={key} data={data} />
                      ))

              }


          </div >
      </BannerLayout >
  );
};

export default Portfolio;

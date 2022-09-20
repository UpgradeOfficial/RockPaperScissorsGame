import React from "react";
import { Link } from "react-router-dom";
import { getFAQs } from "../api/faq";
import { useQuery } from "@tanstack/react-query";
import FaqExcerpt from "../components/FaqExcerpt";
import {motion} from "framer-motion"
const FAQ = () => {
  const { isSuccess, data: faqs } = useQuery(["faqs"], getFAQs, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });
  let content
  if (isSuccess) {
    content = faqs.map(faq =>(
        <FaqExcerpt faq={faq}/>
    ))
  }
  console.log(faqs, isSuccess);
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}} className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>

        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          
         { content}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;

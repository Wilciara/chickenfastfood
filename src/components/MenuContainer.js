import React, { useEffect } from 'react';
import {IoFastFood} from "react-icons/io5";
import { useState } from 'react';
import { motion } from "framer-motion";
import { categories } from "./dataCategory";



const MenuContainer = () => {

  const [filter, setFilter] = useState("chicken");

  /*const [{ foodItems }, dispatch] = useStateValue();*/

  useEffect(() => {}, [filter]);

  return (

    <section className="w-full my-1" id="menu">
    
    <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-16 
    overflow-x-scroll scrollbar-none">

    {/**show products not working */}

      {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-green-700" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-green-600 `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-green-600"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}        
    </div>
    <div className="w-full">
          {/**RowContainer?* */}
        </div>
      
    </section>
    
  )
};

export default MenuContainer
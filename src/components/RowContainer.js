
import React from 'react';
import { useEffect, useState } from 'react';
import{FaShoppingBasket} from 'react-icons/fa';



const RowContainer = () => {

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3001/static/producs.json')
    .then((response) => response.json())
    .then(setData)


  }, []);

  if (!data || !data.length) return null;


  return (

    <div className={'w-full my-14 flex items-center ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}'}>

      {data.map((item) => {
                const { id, name, price, desc, imageSrc } = item;


                return (

      <div className='w-full md:w-350 h-20  backdrop-blur-lg' Key={id}>
        <div className="w-full flex items-center  justify-between">
          <img  className="w-40 h-40 -mt-1"
            src={imageSrc} alt={name} />

          <div className="p-1 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center
            cursor-pointer hover:shadow-md -mt-20">
            <FaShoppingBasket  className="text-white" />
          </div>
          <div className="w-full flex flex-col items-end justify-end -mt-14">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {name}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {desc}
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">R$ {price}</span> 
                </p>
              </div>
            </div>

        </div>

      </div>
      );
    })}
    </div>
  )
}

export default RowContainer


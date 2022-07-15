import React, { useEffect } from 'react';
import {FaSearch} from "react-icons/fa";
import {MdChevronLeft} from "react-icons/md";
import {MdChevronRight} from "react-icons/md";
import RowContainer from './RowContainer';
import { useState, useRef } from 'react';
import SearchResults from './SearchResults';
import MenuContainer from './MenuContainer';


/*fix handleLeftClick and HandleRightClick for chevron button. It´s not scrolling.  Tailwind loaded.*/

const MainContainer = () => {

  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  const carousel = useRef(null);


  /**focus no reload */

  useEffect(() =>{
    if (inputRef) inputRef.current.focus();
  }, []);

    
  
  /*  ****event search - json uncaught [0]**** */

  const handleInputChange = (e) => {
    e.preventDefault();
    const {value} = e.target
    if (!value) return;

    const url = `http://localhost:3001/static/producs.json ${value}`;

    fetch(url)
    .then((response) => response.json())
    .then(({data})=> setData(data));
  
  };

   console.log('Data', data); 

   //scrolling



  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  

  return (

    <div className="w-screen min-w-full h-full grid grid-rows-1 bg-white">
      <div className='w-full py-20 flex-1 flex items-start justify-center gap-10'>
        <p className="text-2xl text-gray-800 font-semibold">
        Seja bem vindo!

        {/*instant search -not  finished*/}
          <input className="px-4 search-input-field bg-gray-100 font-extralight p-1 rounded-md" 
          tabIndex="0" role="search" type="text" label htmlFor="o que procura?" placeholder="O que você procura?"
          onChange={handleInputChange} ref={inputRef} />          
        </p>
        <SearchResults data= {data} />     
        <div className="w-8 h-8">
          <FaSearch className="text-green-900 w-7 h-7 px-1 cursor-pointer hover:text-green-700 duration-100 transition-all ease-in-out" />
        </div> 
      </div>

      <div className="w-full h-auto flex flex-col items-start justify-center">
        
        <strong className="text-2xl font-semibold capitalize text-headingColor relative 
            before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr
            from-green-700 to-green-900 transition-all ease-in-out duration-100 grid-rows-2">Menu</strong>
          <p className='text-gray-700 text-lg py-4' >Navegue por categoria</p>
          <MenuContainer />

        <section className="w-full h-auto flex flex-row items-start justify-center my-6" ref={carousel}>
          
          <div className="w-full flex  flex-row items-center justify-between">
            <p className="text-2xl font-semibold capitalize text-headingColor relative 
            before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr
            from-green-700 to-green-900 transition-all ease-in-out duration-100">
            Selecione para adicionar  ao pedido
            </p>

            <div className="hidden md:flex gap-4 py-4 items-center" ref={carousel}>
              <div             
                className="w-8 h-8 rounded-lg bg-green-700 hover:bg-green-900 cursor-pointer  hover:shadow-lg flex items-center justify-center"
                onClick={handleLeftClick}>
                <MdChevronLeft className="text-lg text-white" onClick={handleLeftClick} />
            </div>

            <div className="w-8 h-8 rounded-lg bg-green-700 hover:bg-green-900 cursor-pointer transition-all duration-100 ease-in-out 
            hover:shadow-lg flex items-center justify-center" onClick={handleRightClick}>
              <MdChevronRight className="text-lg text-white" onClick={handleRightClick} />
              
            </div>
           

          </div>
        </div>            
        
        </section>
          <div className='flex flex-row items-center justify-center bg-white' ref={carousel}> <RowContainer />
            
            </div>
      </div>
                  
    </div>
  );
};

export default MainContainer
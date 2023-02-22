import React from "react";
import Fighter from "../images/Fighter.png"
import BackgroundVideo from './BackgroundVideo';




const Fightscreen = () => {
    return (
     <div className="flex items-center h-screen">
       
      <div className="mx-auto relative h-3/5 md:h-4/5 w-full md:w-4/5 bg-gray-400">
      <BackgroundVideo></BackgroundVideo>
          <div className="absolute z-10 left-[20%] top-[10%] border-2 border-black  bg-white h-10 w-2/12"><p className="text-center text-xs md:text-base font-bold">Fighter 1</p></div>
          <div className="absolute z-40 left-[6%] top-[10%] border-2 border-black bg-white  h-[10%] w-1/12"><p className="text-center text-xs md:text-base font-bold">Strikes <br></br>1</p></div>
          <div className="absolute z-10 right-[20%] top-[10%] border-2 border-black bg-white h-10 w-2/12"><p className="text-center text-xs md:text-base font-bold">Fighter 2</p></div>
          <div className="absolute z-40 right-[6%] top-[10%] border-2 border-black bg-white  h-[10%] w-1/12"><p className="text-center text-xs md:text-base font-bold">Strikes <br></br>1</p></div>
          <div className=""><img alt="fighter" className="absolute filter invert z-20 right-[15%] md:right-[15%] sm:right-[20%] top-[25%] h-1/4 md:h-1/2" src={Fighter} /></div>
          <div className=""><img alt="fighter" className="transform  filter invert scale-x-[-1] absolute  z-20 left-[15%] md:left-[15%] sm:left-[20%] top-[25%] h-1/4 md:h-1/2" src={Fighter}/></div>
          <div alt="buttons" className="absolute bg-white z-10 left-[4%] border-2 border-black top-[25%]  h-[75%]  md:h-[75%] lg:h-[75%] w-[10%] md:w-[13%]">
              <div className=""><p className="font-bold text-center text-[5px] md:text-base">HEAD STRIKE</p></div>
              <div className="flex flex-col mx-[5px] md:flex-row mt-0 md:mt-5">
                  <button class=" bg-green-500 border-2 border-black px-[18%] py-2 text-white">+</button>
                  <button class=" bg-green-500 border-2 border-black px-[19%] py-2 text-white">-</button>
              </div>
              <div className="mt-0 md:mt-[40%]"><p className="font-bold text-center text-[5px] md:text-base">BODY STRIKE</p></div>
              <div className="flex flex-col mx-[5px] md:flex-row mt-0 md:mt-5">
                  <button class=" bg-green-500 border-2 border-black px-[18%] py-2 text-white">+</button>
                  <button class=" bg-green-500 border-2 border-black px-[19%] py-2 text-white">-</button>
              </div>
              <div className="mt-0 md:mt-[40%]"><p className="font-bold text-center text-[5px] md:text-base">LEG STRIKE</p></div>
              <div className="flex flex-col mx-[5px] md:flex-row mt-0 md:mt-3">
                  <button class=" bg-green-500 border-2 border-black px-[18%] py-2 text-white">+</button>
                  <button class=" bg-green-500 border-2 border-black px-[19%] py-2 text-white">-</button>
              </div>
          

          </div>
          <div alt="buttons" className="absolute bg-white z-10 right-[4%] border-2 border-black top-[25%]  h-[75%]  md:h-[75%] lg:h-[75%] w-[10%] md:w-[13%]">
          <div className=""><p className="font-bold text-center text-[5px] md:text-base">HEAD STRIKE</p></div>
              <div className="flex flex-col mx-[5px] md:flex-row mt-0 md:mt-5">
                  <button class=" bg-green-500 border-2 border-black px-[19%] py-2 text-white">+</button>
                  <button class=" bg-green-500 border-2 border-black px-[18%] py-2 text-white">-</button>
              </div>
              <div className="mt-0 md:mt-[40%]"><p className="font-bold text-center text-[5px] md:text-base">BODY STRIKE</p></div>
              <div className="flex flex-col mx-[5px] md:flex-row mt-0 md:mt-5">
                  <button class=" bg-green-500 border-2 border-black px-[19%] py-2 text-white">+</button>
                  <button class=" bg-green-500 border-2 border-black px-[18%] py-2 text-white">-</button>
              </div>
              <div className="mt-0 md:mt-[40%]"><p className="font-bold text-center text-[5px] md:text-base">LEG STRIKE</p></div>
              <div className="flex flex-col mx-[5px] md:flex-row mt-0 md:mt-3">
                  <button class=" bg-green-500 border-2 border-black px-[19%] py-2 text-white">+</button>
                  <button class=" bg-green-500 border-2 border-black px-[18%] py-2 text-white">-</button>
              </div>
          </div>
          <div alt="log" className="absolute bg-white overflow-auto z-30 right-[19%] top-[75%] border-2 border-black  h-[20%] w-2/12">
          <table class="table-auto ext-xs  md:text-xs lg:text-base">
  <thead>
    <tr>
      <th>Kick/Punch</th>
      <th>Location</th>
      <th>Strength</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kick</td>
      <td>Body</td>
      <td>Hard</td>
    </tr>
    <tr>
    
      
     
    </tr>
    <tr>

     
      
    </tr>
  </tbody>
</table>
          </div>
          <div alt="log" className="absolute bg-white overflow-auto z-30 left-[19%] top-[75%] border-2 border-black h-[20%] w-2/12">
          <table class="table-auto text-xs  md:text-xs lg:text-base">
  <thead>
    <tr>
      <th>Kick/Punch</th>
      <th>Location</th>
      <th>Strength</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kick</td>
      <td>Body</td>
      <td>Hard</td>
    </tr>
    <tr>
    
      
     
    </tr>
    <tr>

     
      
    </tr>
  </tbody>
</table>
          </div>
          
     
      </div>
    </div>
    );
  };
  
  export default Fightscreen;
  
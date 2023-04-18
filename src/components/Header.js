import React from "react";
import {TbCurrentLocation} from "react-icons/tb";
const Header = () => {
  return <div className="flex flex-row  relative"> 
    <div className="w-[95%]">
    <div className=" ms-12 flex mt-40  items-center text-4xl"> Eskişehir Online Yemek Siparişi</div>
    </div>
    <div >
         <img alt="" className="  w-[400px] h-[400px]"   src="https://images.deliveryhero.io/image/foodpanda/hero-home-tr.jpg?width=1600&height=1600"/>
    </div>
   <div className="flex absolute w-[80%] ml-[10%] bg-slate-100  border-solid border-slate-50 h-24 bottom-12">
   <label className="relative flex-1 group h-16 mt-3 ms-2 w-[85%]">
                  <input
                    required
                    className="h-full rounded px-4 pt-2 hover:border-gray-700 focus:border-gray-700 transition-colors outline-none text-sm w-full border-2 border-gray-200 peer"
                  /><TbCurrentLocation className="absolute right-4 text-2xl top-5"/>
                  <span className="absolute top-0 left-0 h-full flex items-center px-4 text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-gray-600 peer-valid:h-7 peer-valid:text-xs peer-valid:text-gray-600">
                    Adresini Belirle veya Seç 
                  </span>
                
                </label> 
  <button className="ms-3 bg-red-600 rounded-lg text-white p-4 me-2 flex justify-center items-center m-auto hover:bg-slate-200 hover:text-gray-900">Listele</button>
   </div>
  </div>;
};

export default Header;

import React from "react";
import { AiFillStar } from "react-icons/ai";
const CloseRestaruant = () => {
  const product = [
    {
      id: 1,
      name: "Birtat Mersin Tan..",
      img: "https://images.deliveryhero.io/image/fd-tr/LH/h8ii-hero.jpg?width=275&height=275&quality=45",
      point: "3.8/10",
      sell: "10000+",
      restaurant: "Pizza Restoran Teslimatlı",
    },
    {
      id: 2,
      name: "Birtat Mersin Tan..",
      img: "https://images.deliveryhero.io/image/fd-tr/LH/enrt-hero.jpg?width=275&height=275&quality=45",
      point: "4.8/10",
      sell: "10000+",
      restaurant: "Pizza Restoran Teslimatlı",
    },
    {
      id: 3,
      name: "Birtat Mersin Tan..",
      img: "https://images.deliveryhero.io/image/fd-tr/LH/h8ii-hero.jpg?width=275&height=275&quality=45",
      point: "5.8/10",
      sell: "10000+",
      restaurant: "Pizza Restoran Teslimatlı",
    },
    {
      id: 4,
      name: "Birtat Mersin Tand..",
      img: "https://images.deliveryhero.io/image/fd-tr/LH/enrt-hero.jpg?width=275&height=275&quality=45",
      point: "6.8/10",
      sell: "10000+",
      restaurant: "Pizza Restoran Teslimatlı",
    },
    {
      id: 5,
      name: "Birtat Mersin Tan..",
      img: "https://images.deliveryhero.io/image/fd-tr/LH/vnu2-hero.jpg?width=275&height=275&quality=45",
      point: "8.8/10",
      sell: "10000+",
      restaurant: "Pizza Restoran Teslimatlı",
    },
    {
      id: 6,
      name: "Birtat Mersin Tan..",
      img: "https://images.deliveryhero.io/image/fd-tr/LH/h8ii-hero.jpg?width=275&height=275&quality=45",
      point: "9.8/10",
      sell: "10000+",
      restaurant: "Pizza Restoran Teslimatlı",
    },
    {
      id: 7,
      name: "Birtat Mersin Tan..",
      img: "https://images.deliveryhero.io/image/fd-tr/LH/vnu2-hero.jpg?width=275&height=275&quality=45",
      point: "7.8/10",
      sell: "10000+",
      restaurant: "Pizza Restoran Teslimatlı",
    },
    {
      id: 8,
      name: "Birtat Mersin Tan..",
      img: "https://images.deliveryhero.io/image/fd-tr/LH/h8ii-hero.jpg?width=275&height=275&quality=45",
      point: "7.8/10",
      sell: "10000+",
      restaurant: "Pizza Restoran Teslimatlı",
    },
  ];
  return (
    <div className="pl-16 pr-16 container">
      <div className="text-2xl mb-3">Şu an kapalı</div>
      <div className=" ms-4 sm:ms-12 gap-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        {product.map((prdct) => (
          <div className="mb-4 relative h-[350px]">
            <div className="absolute flex flex-row justify-center items-center z-10 top-0 left-0 h-[350px] w-[275px] opacity-60 bg-white">
              <button className="h-[25px] w-[60%] z-20 overflow-hidden text-ellipsis uppercase text-white bg-red-500">
                İleri tarihe sipariş ver
              </button>
            </div>
            <div className="h-[275px]   w-[275px] overflow-hidden  ">
              <img
                className="transition-all transform ease-in duration-1000 hover:transform hover:scale-125"
                src={prdct.img}
                alt="This zooms-in really well and smooth"
              />
            </div>
            <div className="flex flex-row justify-between mt-2">
              <div>{prdct.name}</div>
              <div className="flex flex-row me-20  text-xs">
                <AiFillStar className="text-ysprimary text-base  me-1" />
                <b>{prdct.point}</b>({prdct.sell})
              </div>
            </div>
            <b className="me-2">₺₺₺</b>
            <span className="  text-slate-600">{prdct.restaurant}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloseRestaruant;

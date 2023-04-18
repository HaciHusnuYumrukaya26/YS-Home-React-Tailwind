import React from "react";

const CopyRight = () => {
  return (
    <div className="container pt-4">
      <hr className="w-[90%] m-auto pb-3" />
      <div className=" grid grid-cols-1  sm:text-left md:grid-cols-2 xl:grid-cols-4 sm:ms-20">
        <div>
          <a href="/aaw" className="hover:text-ysprimary mb-6">
            © 2023 Yemeksepeti
          </a>
        </div>
        <div className="flex flex-col mb-6">
          <a href="/aaw" className="hover:text-ysprimary mb-1">
            Kullanım Koşulları
          </a>
          <a href="/aaw" className="hover:text-ysprimary mb-1">
          S.S.S. ve İşlem Rehberi
          </a>
          <a href="/aaw" className="hover:text-ysprimary mb-1">
            Basın
          </a>
        </div>
        <div className="flex flex-col mb-6">
          <a href="/aaw" className="hover:text-ysprimary mb-1">
          Çerez Politikası
          </a>
          <a href="/aaw" className="hover:text-ysprimary mb-1">
           İletişim
          </a>
          <a href="/aaw" className="hover:text-ysprimary mb-1">
        Bizimle Çalışın
          </a>
        </div>
        <div className="flex flex-col mb-6">
          <a href="/aaw" className="hover:text-ysprimary mb-1">
            Aydınlatma Metni
          </a>
          <a href="/aaw" className="hover:text-ysprimary mb-1">
          Kişisel Verilerin Korunması ve İşlenmesi ve Gizlilik Politikası
          </a>
          <a href="/aaw" className="hover:text-ysprimary mb-1">
          Bilgi Toplumu Hizmetleri
          </a>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;

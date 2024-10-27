import React, { useContext } from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "./../../img/profile1.jpg";
import profilePic2 from "./../../img/profile2.jpg";
import profilePic3 from "./../../img/profile3.jpg";
import profilePic4 from "./../../img/profile4.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { themeContext } from "../../Context";
const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dignissimos mollitia, nesciunt vel veritatis esse quaerat, ad quasi temporibus voluptatem autem? Eveniet facere, nemo mollitia illum sunt minus iusto esse.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dignissimos mollitia, nesciunt vel veritatis esse quaerat, ad quasi temporibus voluptatem autem? Eveniet facere, nemo mollitia illum sunt minus iusto esse.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dignissimos mollitia, nesciunt vel veritatis esse quaerat, ad quasi temporibus voluptatem autem? Eveniet facere, nemo mollitia illum sunt minus iusto esse.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dignissimos mollitia, nesciunt vel veritatis esse quaerat, ad quasi temporibus voluptatem autem? Eveniet facere, nemo mollitia illum sunt minus iusto esse.",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients Always get </span>
        <span>Exceptional Work </span>
        <span>From me.. </span>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={darkMode ? { color: "white" } : {}}
      >
        {clients.map((curElem, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="testimonials"
                style={darkMode ? { background: "white", color: "black" } : {}}
              >
                <img src={curElem.img} alt="" />
                <span>{curElem.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;

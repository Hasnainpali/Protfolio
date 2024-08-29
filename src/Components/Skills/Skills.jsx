import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Skills() {
  return (
    <div>
      <h1 className="text-dark text-center pt-5" id="skill">
        Skill
      </h1>
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col">
            <Swiper
              spaceBetween={40}
              autoplay={{delay:3000}}
              navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Pagination, Autoplay]}
                        className=""
                        breakpoints={{
                            1024: { slidesPerView: 6 },
                            768: { slidesPerView: 3 },
                            576: { slidesPerView: 1 },
                            375: { sliderPerView: 1 },
                        }}
                        style={{height: "190px"}}
            >
              <div className="">
              <SwiperSlide>
                <div
                  className="skill--box"
                  style={{ backgroundColor: "rgb(33, 33, 33)" }}
                >
                  <img src="/assets/images/HTML.png" alt="HTML" />
                  <h3 style={{ color: "rgb(234, 234, 234)" }}>HTML</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="skill--box"
                  style={{ backgroundColor: "rgb(33, 33, 33)" }}
                >
                  <img src="/assets/images/CSS.png" alt="CSS" />
                  <h3 style={{ color: "rgb(234, 234, 234)" }}>CSS</h3>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="skill--box"
                  style={{ backgroundColor: "rgb(33, 33, 33)" }}
                >
                  <img src="/assets/images/bootstrap (1).png" alt="BOOTSTRAP" />
                  <h3 style={{ color: "rgb(234, 234, 234)" }}>bootstrap</h3>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="skill--box"
                  style={{ backgroundColor: "rgb(33, 33, 33)" }}
                >
                  <img src="/assets/images/Js.png" alt="JavaScript" />
                  <h3 style={{ color: "rgb(234, 234, 234)" }}>JavaScript</h3>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="skill--box"
                  style={{ backgroundColor: "rgb(33, 33, 33)" }}
                >
                  <img src="/assets/images/Reactjs.png" alt="React" />
                  <h3 style={{ color: "rgb(234, 234, 234)" }}>React</h3>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="skill--box"
                  style={{ backgroundColor: "rgb(33, 33, 33)" }}
                >
                  <img src="/assets/images/TailwindCSS.png" alt="Tailwind" />
                  <h3 style={{ color: "rgb(234, 234, 234)" }}>Tailwind</h3>
                </div>
              </SwiperSlide>
              
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

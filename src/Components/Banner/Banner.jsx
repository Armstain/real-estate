import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'animate.css';

const Banner = () => {
    return (

        <div >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                loop={true}

                className="mySwiper"
            >
                <SwiperSlide className="relative">
                    <img className='w-full h-[100vh] object-cover rounded-box filter brightness-75' src="https://i.ibb.co/R66cszX/bjorn-snelders-Cd3-Ek7r-NXSk-unsplash.jpg" alt="" />
                    <div className="absolute inset-0 bg-black/40 rounded-box"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h2 className="text-5xl font-bold">Over Water Bungalows</h2>
                        <p className="text-lg text-center mt-5">"Experience ultimate relaxation in these luxurious overwater bungalows. Enjoy crystal-clear water views, private decks with direct ocean access, and unparalleled marine life encounters.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className='w-full h-[100vh] object-cover rounded-box filter brightness-75' src="https://i.ibb.co/CzqTb80/dion-tavenier-h-Qb-9-H6-Big-unsplash.jpg" alt="" />
                    <div className="absolute inset-0 bg-black/40 rounded-box"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h2 className="text-5xl font-bold">Castle</h2>
                        <p className="text-lg text-center mt-5">Step back in time and experience royalty at this majestic historic castle. Featuring grand halls, sprawling gardens, and breathtaking views of the Scottish countryside</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className='w-full h-[100vh] object-cover rounded-box filter brightness-75' src="https://i.ibb.co/6NXjBPY/sven-wilhelm-2c-RXSWy-MHA8-unsplash.jpg" alt="" />
                    <div className="absolute inset-0 bg-black/40 rounded-box"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h2 className="text-5xl font-bold">Ski Chalet</h2>
                        <p className="text-lg text-center mt-5">Enjoy the best of both worlds: ski-in/ski-out access and luxurious amenities. This chalet offers stunning mountain views, a cozy fireplace, and a hot tub for après-ski relaxation.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className='w-full h-[100vh] object-cover rounded-box filter brightness-75' src="https://i.ibb.co/RP6yJHM/5860.jpg" alt="" />
                    <div className="absolute inset-0 bg-black/40 rounded-box"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h2 className="text-5xl font-bold">Mountain Views</h2>
                        <p className="text-lg text-center mt-5">This luxurious ski chalet offers ski-in/ski-out access, breathtaking mountain views, and a cozy fireplace. Ideal for a winter wonderland retreat.</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );

};

export default Banner;
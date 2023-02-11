import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useContext } from 'react';
import { Context } from '../../Context';
import { generateRandomNumber } from '../../utils';
import TopSelling from '../../pages/home/TopSelling';

function ClickSlider(){
    const {products} = useContext(Context)

    const topSellingProducts = generateRandomNumber(10, products).map(item=>{
        return(
            <SwiperSlide key={item.id}>
                <TopSelling 
                    name = {item.title}
                    img = {item.images[0]}
                    amount = {item.price}
                    percent={Math.floor(Math.random() * 50)}
                />
            </SwiperSlide>
        )
    })


  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {topSellingProducts}
    </Swiper>
  );
};

export default ClickSlider
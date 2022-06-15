import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideItem } from "./SlideItem";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Slide() {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ width: "100%", flex: "1", height: "100%" }}
    >
      <SwiperSlide>
        <SlideItem
          title="Europa"
          description="O continente mais antigo."
          link="europa"
          imageUrl="slide/europe.png"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem
          title="Ásia"
          description="O continente mais populoso."
          link="asia"
          imageUrl="slide/asia.png"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem
          title="África"
          description="O continente mais colorido."
          link="africa"
          imageUrl="slide/africa.png"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem
          title="América do Sul"
          description="O melhor continente."
          link="america-do-sul"
          imageUrl="slide/south-america.png"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem
          title="América do Norte"
          description="O continente mais tecnológico."
          link="america-do-norte"
          imageUrl="slide/north-america.png"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem
          title="Oceania"
          description="O continente mais peculiar."
          link="oceania"
          imageUrl="slide/oceania.png"
        />
      </SwiperSlide>
    </Swiper>
  );
}

import { FC } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import { API_URL } from "../../../utils/constants";

import styles from "./LaptopsSwiper.module.scss";
import "swiper/scss";

const LaptopsSwiper: FC = () => {
  interface LaptopsState {
    id: number;
    title: string;
    category: string;
    price: number;
    images: string;
  }

  const fetchLaptops = async (): Promise<LaptopsState[]> =>
    axios
      .get(`${API_URL}/category/laptops`)
      .then((res) => res.data)
      .then((data) => data.products);

  const { data, isSuccess } = useQuery({
    queryKey: ["laptops"],
    queryFn: () => fetchLaptops(),
  });

  return (
    isSuccess && (
      <div className={styles.swiper}>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper">
          {data.map((laptop) => (
            <SwiperSlide key={laptop.id}>
              <div className={styles.card}>
                <ProductCard
                  img={laptop.images[0]}
                  id={laptop.id}
                  title={laptop.title}
                  category={laptop.category}
                  price={laptop.price}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export default LaptopsSwiper;

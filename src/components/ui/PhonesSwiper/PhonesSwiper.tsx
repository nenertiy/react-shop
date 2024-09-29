import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../../utils/constants";

import ProductCard from "../ProductCard/ProductCard";

import styles from "./PhonesSwiper.module.scss";
import "swiper/scss";

const PhonesSwiper: FC = () => {
  interface SmartphonesState {
    id: number;
    title: string;
    category: string;
    price: number;
    images: string;
  }

  const fetchSmartphones = async (): Promise<SmartphonesState[]> =>
    axios
      .get(`${API_URL}/category/smartphones`)
      .then((res) => res.data)
      .then((data) => data.products);

  const { data, isSuccess } = useQuery({
    queryKey: ["phones"],
    queryFn: () => fetchSmartphones(),
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
          {data.map((phones) => (
            <SwiperSlide key={phones.id}>
              <div className={styles.card}>
                <ProductCard
                  img={phones.images[0]}
                  id={phones.id}
                  title={phones.title}
                  category={phones.category}
                  price={phones.price}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export default PhonesSwiper;

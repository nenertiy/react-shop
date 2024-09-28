import { FC, useEffect, useState } from "react";

import styles from "./Home.module.scss";
import axios from "axios";
import { API_URL } from "../../utils/constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/scss";

import ProductCard from "../ProductCard/ProductCard";

const Home: FC = () => {
  interface LaptopsState {
    id: number;
    title: string;
    category: string;
    price: number;
    images: string;
  }

  interface SmartphonesState {
    id: number;
    title: string;
    category: string;
    price: number;
    images: string;
  }

  const [laptops, setLaptops] = useState<LaptopsState[]>([]);

  const [smartphones, setSmartphones] = useState<SmartphonesState[]>([]);

  const fetchLaptops = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/category/laptops`);
      setLaptops(data.products);
    } catch {
      console.log("Error");
    }
  };

  const fetchSmartphones = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/category/smartphones`);
      setSmartphones(data.products);
    } catch {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchLaptops();
    fetchSmartphones();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Laptops</h1>
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
          className="mySwiper"
        >
          {laptops.map((laptop) => (
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
      <h1 className={styles.title}>Phones</h1>

      <div className={styles.swiper}>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={false}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {smartphones.map((smartphone) => (
            <SwiperSlide key={smartphone.id}>
              <div className={styles.card}>
                <ProductCard
                  img={smartphone.images[0]}
                  id={smartphone.id}
                  title={smartphone.title}
                  category={smartphone.category}
                  price={smartphone.price}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;

"use client";
import type { ComponentType, Key } from "react";
import styles from "./style.module.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import SwiperNavButtons from "../SwiperNavButtons/SwiperNavButtons";

import 'swiper/css';
import 'swiper/css/navigation';

type SliderProps<TItem> = {
    data: TItem[];
    Card: ComponentType<{ data: TItem }>;
    getKey?: (item: TItem, index: number) => Key;
};

export default function Slider<TItem>({ data, Card, getKey }: SliderProps<TItem>) {

    return (
        <div className={`${styles.about_wrapper}`}>
            <Swiper
                spaceBetween={20}
                loop={true}
                modules={[Navigation]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1023: { slidesPerView: 3 },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide
                        key={getKey?.(item, index) ?? (item as any)?.id ?? index}
                    >
                        <Card data={item} />
                    </SwiperSlide>
                ))}


                <SwiperNavButtons
                    addClass={'buttons_bottom'}
                />
            </Swiper>
        </div>
    )
}
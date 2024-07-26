import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from '@swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

import { Pagination, Navigation } from 'swiper/modules';


export default function Testimonials() {
    // SwiperCore.use([Autoplay]);
    return (
        <div className="py-16 bg-[#1E1E1E] px-4">
            <div className="flex flex-col justify-center items-center self-center mb-16">
                <div className="text-[33px] md:text-[35px] font-bold bg-clip-text md:leading-[55px] max-w-[1300px] max-md:leading-[70px] text-white mx-5 w-[100%]">
                    <p className='text-center'>
                        Trusted <span className="bg-[#7A63FF] px-2 py-1 rounded-md">By Lawyers</span>
                    </p>
                </div>
                <div className="mt-4 text-base font-light leading-7 text-center text-gray-200 max-md:max-w-full w-[548px]">
                    Join Dozens of Satisfied Lawyers who Rely on our Platform
                    For Their Practices Needs                </div>
            </div>
            {/* <div className='hidden md:flex justify-center mb-6'>
                <div className="m-2 flex gap-8">
                    <div className="flex flex-col p-8 text-base rounded-xl border border-violet-500 border-solid bg-neutral-800 max-w-[534px] max-md:px-5">
                        <div className="flex gap-5 text-white leading-[100%] max-md:flex-wrap">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 rounded-full aspect-square w-[52px]"
                            />
                            <div className="flex flex-col flex-1 my-auto">
                                <div className="font-semibold">Ryan Delk</div>
                                <div className="mt-1.5">@delk</div>
                            </div>
                        </div>
                        <div className="mt-7 leading-7 text-gray-200 capitalize max-md:max-w-full">
                            I&apos;ve been using Kipper&apos;s services for over a year now, and I&apos;m thrilled with the results. Their attention to detail and commitment to excellence are truly remarkable. Kudos to the Kipper team!remarkable. Kudos to the Kipper team!
                        </div>
                    </div>
                </div>

                <div className="m-2 flex gap-8">
                    <div className="flex flex-col p-8 text-base rounded-xl border border-violet-500 border-solid bg-neutral-800 max-w-[534px] max-md:px-5">
                        <div className="flex gap-5 text-white leading-[100%] max-md:flex-wrap">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 rounded-full aspect-square w-[52px]"
                            />
                            <div className="flex flex-col flex-1 my-auto">
                                <div className="font-semibold">Ryan Delk</div>
                                <div className="mt-1.5">@delk</div>
                            </div>
                        </div>
                        <div className="mt-7 leading-7 text-gray-200 capitalize max-md:max-w-full">
                            I&apos;ve been using Kipper&apos;s services for over a year now, and I&apos;m thrilled with the results. Their attention to detail and commitment to excellence are truly remarkable. Kudos to the Kipper team!remarkable. Kudos to the Kipper team!
                        </div>
                    </div>

                </div>
            </div> */}
            <div className='max-w-[1400px] mx-auto'>

            {
                [1, 2].map((Item) => (
                    <Swiper
                        key={Item}
                        className="mt-4"
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        mousewheel={true}
                        keyboard={true}
                        touch="true"
                        breakpoints={{
                            768: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="flex gap-8">
                                <div className="flex flex-col p-8 text-base rounded-xl border border-violet-500 border-solid bg-neutral-800 max-w-[534px] max-md:px-5 relative">
                                    <div className="absolute top-0 left-0 w-0 h-0 border-l-20 border-t-20"></div>
                                    <div className="flex gap-5 text-white leading-[100%] max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 rounded-full aspect-square w-[52px]"
                                        />
                                        <div className="flex flex-col flex-1 my-auto">
                                            <div className="font-semibold">Ryan Delk</div>
                                            <div className="mt-1.5">@delk</div>
                                        </div>
                                    </div>
                                    <div className="mt-7 leading-7 text-gray-200 capitalize max-md:max-w-full">
                                        I&apos;ve been using Kipper&apos;s services for over a year now, and I&apos;m thrilled with the results. Their attention to detail and commitment to excellence are truly remarkable. Kudos to the Kipper team!remarkable. Kudos to the Kipper team!
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex gap-8">
                                <div className="flex flex-col p-8 text-base rounded-xl border border-violet-500 border-solid bg-neutral-800 max-w-[534px] max-md:px-5">
                                    <div className="flex gap-5 text-white leading-[100%] max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 rounded-full aspect-square w-[52px]"
                                        />
                                        <div className="flex flex-col flex-1 my-auto">
                                            <div className="font-semibold">Ryan Delk</div>
                                            <div className="mt-1.5">@delk</div>
                                        </div>
                                    </div>
                                    <div className="mt-7 leading-7 text-gray-200 capitalize max-md:max-w-full">
                                        I&apos;ve been using Kipper&apos;s services for over a year now, and I&apos;m thrilled with the results. Their attention to detail and commitment to excellence are truly remarkable. Kudos to the Kipper team!remarkable. Kudos to the Kipper team!
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex gap-8">
                                <div className="flex flex-col p-8 text-base rounded-xl border border-violet-500 border-solid bg-neutral-800 max-w-[534px] max-md:px-5">
                                    <div className="flex gap-5 text-white leading-[100%] max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 rounded-full aspect-square w-[52px]"
                                        />
                                        <div className="flex flex-col flex-1 my-auto">
                                            <div className="font-semibold">Ryan Delk</div>
                                            <div className="mt-1.5">@delk</div>
                                        </div>
                                    </div>
                                    <div className="mt-7 leading-7 text-gray-200 capitalize max-md:max-w-full">
                                        I&apos;ve been using Kipper&apos;s services for over a year now, and I&apos;m thrilled with the results. Their attention to detail and commitment to excellence are truly remarkable. Kudos to the Kipper team!remarkable. Kudos to the Kipper team!
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex gap-8">
                                <div className="flex flex-col p-8 text-base rounded-xl border border-violet-500 border-solid bg-neutral-800 max-w-[534px] max-md:px-5">
                                    <div className="flex gap-5 text-white leading-[100%] max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 rounded-full aspect-square w-[52px]"
                                        />
                                        <div className="flex flex-col flex-1 my-auto">
                                            <div className="font-semibold">Ryan Delk</div>
                                            <div className="mt-1.5">@delk</div>
                                        </div>
                                    </div>
                                    <div className="mt-7 leading-7 text-gray-200 capitalize max-md:max-w-full">
                                        I&apos;ve been using Kipper&apos;s services for over a year now, and I&apos;m thrilled with the results. Their attention to detail and commitment to excellence are truly remarkable. Kudos to the Kipper team!remarkable. Kudos to the Kipper team!
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex gap-8">
                                <div className="flex flex-col p-8 text-base rounded-xl border border-violet-500 border-solid bg-neutral-800 max-w-[534px] max-md:px-5">
                                    <div className="flex gap-5 text-white leading-[100%] max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 rounded-full aspect-square w-[52px]"
                                        />
                                        <div className="flex flex-col flex-1 my-auto">
                                            <div className="font-semibold">Ryan Delk</div>
                                            <div className="mt-1.5">@delk</div>
                                        </div>
                                    </div>
                                    <div className="mt-7 leading-7 text-gray-200 capitalize max-md:max-w-full">
                                        I&apos;ve been using Kipper&apos;s services for over a year now, and I&apos;m thrilled with the results. Their attention to detail and commitment to excellence are truly remarkable. Kudos to the Kipper team!remarkable. Kudos to the Kipper team!
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex gap-8">
                                <div className="flex flex-col p-8 text-base rounded-xl border border-violet-500 border-solid bg-neutral-800 max-w-[534px] max-md:px-5">
                                    <div className="flex gap-5 text-white leading-[100%] max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a2c3ff5df9984abb74de03a0fe6452d88da48747db75df6b0dc1fcc73b4811?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 rounded-full aspect-square w-[52px]"
                                        />
                                        <div className="flex flex-col flex-1 my-auto">
                                            <div className="font-semibold">Ryan Delk</div>
                                            <div className="mt-1.5">@delk</div>
                                        </div>
                                    </div>
                                    <div className="mt-7 leading-7 text-gray-200 capitalize max-md:max-w-full">
                                        I&apos;ve been using Kipper&apos;s services for over a year now, and I&apos;m thrilled with the results. Their attention to detail and commitment to excellence are truly remarkable. Kudos to the Kipper team!remarkable. Kudos to the Kipper team!
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                ))
            }
            </div>
        </div>
    );
}

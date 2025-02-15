'use client';
{/* <style>
.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    width: 16px !important;
    height: 4px !important;
    border-radius: 5px !important;
    margin: 0 6px !important;
}

.swiper-pagination {
    bottom: 2px !important;
}

.swiper-wrapper {
    height: max-content !important;
    width: max-content !important;
    padding-bottom: 64px;
}

.swiper-pagination-bullet-active {
    background: #4F46E5 !important;
}

.swiper-slide.swiper-slide-active>.slide_active\:border-indigo-600 {
    --tw-border-opacity: 1;
    border-color: rgb(79 70 229 / var(--tw-border-opacity));
}

.swiper-slide.swiper-slide-active>.group .slide_active\:text-gray-800 {
    ---tw-text-opacity: 1;
    color: rgb(31 41 55 / var(--tw-text-opacity));
}
</style>

<section class="py-24 ">
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-16 ">
        <span class="text-sm text-gray-500 font-medium text-center block mb-2">TESTIMONIAL</span>
        <h2 class="text-4xl text-center font-bold text-gray-900 ">What our happy user says!</h2>
    </div>
    <!--Slider wrapper-->

    <div class="swiper mySwiper">
        <div class="swiper-wrapper w-max">
            <div class="swiper-slide">
                <div
                    class="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                    <div class="">
                        <div class="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                            <svg class="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                            <span class="text-base font-semibold text-indigo-600">4.9</span>
                        </div>
                        <p
                            class="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                            Pagedone has made it possible for me to stay on top of my portfolio and make
                            informed
                            decisions
                            quickly and easily.
                        </p>
                    </div>
                    <div class="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                        <img class="rounded-full h-10 w-10 object-cover" src="https://pagedone.io/asset/uploads/1696229969.png"
                            alt="avatar" />
                        <div class="block">
                            <h5 class="text-gray-900 font-medium transition-all duration-500  mb-1">Jane D</h5>
                            <span class="text-sm leading-4 text-gray-500">CEO </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div
                    class="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 slide_active:border-indigo-600 hover:shadow-sm">
                    <div class="">
                        <div class="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                            <svg class="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                            <span class="text-base font-semibold text-indigo-600">4.9</span>
                        </div>
                        <p
                            class="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                            Thanks to pagedone, I feel more informed and confident about my investment decisions
                            than
                            ever
                            before.
                        </p>
                    </div>
                    <div class="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                        <img class="rounded-full h-10 w-10 object-cover" src="https://pagedone.io/asset/uploads/1696229994.png"
                            alt="avatar" />
                        <div class="block">
                            <h5 class="text-gray-900 font-medium transition-all duration-500  mb-1">Harsh P.
                            </h5>
                            <span class="text-sm leading-4 text-gray-500">Product Designer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div
                    class=" flex justify-between flex-col lg:w-full group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto slide_active:border-indigo-600 hover:border-indigo-600 hover:shadow-sm">
                    <div class="">
                        <div class="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                            <svg class="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                            <span class="text-base font-semibold text-indigo-600">4.9</span>
                        </div>
                        <p
                            class="text-base text-gray-600 leading-6  transition-all duration-500  pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                            The customer service team at pagedone went above and beyond to help me resolve a
                            billing
                            issue.
                        </p>
                    </div>
                    <div class="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                        <img class="rounded-full h-10 w-10 object-cover" src="	https://pagedone.io/asset/uploads/1696230027.png"
                            alt="avatar" />
                        <div class="block">
                            <h5 class="text-gray-900 font-medium transition-all duration-500  mb-1">Alex K.</h5>
                            <span class="text-sm leading-4 text-gray-500">Design Lead</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div
                    class="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto slide_active:border-indigo-600 hover:border-indigo-600 hover:shadow-sm">
                    <div class="">
                        <div class="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                            <svg class="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                            <span class="text-base font-semibold text-indigo-600">4.9</span>
                        </div>
                        <p
                            class="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                            Pagedone has made it possible for me to stay on top of my portfolio and make
                            informed
                            decisions
                            quickly and easily.
                        </p>
                    </div>
                    <div class="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                        <img class="rounded-full h-10 w-10 object-cover" src="https://pagedone.io/asset/uploads/1696229969.png"
                            alt="avatar" />
                        <div class="block">
                            <h5 class="text-gray-900 font-medium transition-all duration-500  mb-1">Jane D</h5>
                            <span class="text-sm leading-4 text-gray-500">CEO </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div
                    class="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto slide_active:border-indigo-600 hover:border-indigo-600 hover:shadow-sm ">
                    <div class="">
                        <div class="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                            <svg class="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                            <span class="text-base font-semibold text-indigo-600">4.9</span>
                        </div>
                        <p
                            class="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                            Thanks to pagedone, I feel more informed and confident about my investment decisions
                            than
                            ever
                            before.
                        </p>
                    </div>
                    <div class="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                        <img class="rounded-full h-10 w-10 object-cover" src="https://pagedone.io/asset/uploads/1696229994.png"
                            alt="avatar" />
                        <div class="block">
                            <h5 class="text-gray-900 font-medium transition-all duration-500  mb-1">Harsh P.
                            </h5>
                            <span class="text-sm leading-4 text-gray-500">Product Designer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</div>
</section>

<script>
var swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 32,
loop: true,
centeredSlides: true,
pagination: {
    el: ".swiper-pagination",
    clickable: true,

},
autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
breakpoints: {
640: {
  slidesPerView: 1,
  spaceBetween: 32,
},
768: {
  slidesPerView: 2,
  spaceBetween: 32,
},
1024: {
  slidesPerView: 3,
  spaceBetween: 32,
},
},
});
</script>
 */}



import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const testimonials = [
    {
        name: 'Michael R.',
        role: 'Chef, Gourmet Kitchen',
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
        feedback: "Precision is key in my kitchen. The SealRight bottle lets me dispense oils and sauces without any messy spills or wasted product. It's a game-changer!"
    },
    {
        name: 'Sarah L.',
        role: 'Art Studio Owner',
        image: 'https://randomuser.me/api/portraits/women/5.jpg',
        feedback: "Working with liquid mediums used to be a nightmare with drips. The DripStop bottle has saved my artwork and my sanity. Clean, controlled dispensing every time."
    },
    {
        name: 'David K.',
        role: 'Pharmacist',
        image: 'https://randomuser.me/api/portraits/men/6.jpg',
        feedback: "Accurate dosing is critical in my field. The AquaLock bottle ensures that even viscous liquids dispense precisely, eliminating waste and ensuring patient safety."
    },
    {
        name: 'Emily P.',
        role: 'Fitness Instructor',
        image: 'https://randomuser.me/api/portraits/women/7.jpg',
        feedback: "I mix a lot of powdered supplements with liquids. The NoSpill bottle makes preparing my drinks quick and mess-free, even on the go. No more sticky gym bags!"
    },
    {
        name: 'Ricardo G.',
        role: 'Automotive Mechanic',
        image: 'https://randomuser.me/api/portraits/men/8.jpg',
        feedback: "Dealing with oils and lubricants used to be a messy affair. The SecurePour bottle allows for precise application without any leaks or drips. This has saved me time and reduced waste."
    },
    {
        name: 'Dr. Anya Sharma',
        role: 'Pediatrician',
        image: 'https://randomuser.me/api/portraits/women/9.jpg',
        feedback: "For parents of infants, precise and clean dispensing of medication or feeding liquids is essential. The Tamed Flow bottle is a great improvement, making it easy to measure and dispense without spills."
    },
    {
        name: 'Ben Carter',
        role: 'Landscaping Business Owner',
        image: 'https://randomuser.me/api/portraits/men/10.jpg',
        feedback: "When mixing fertilizers and pesticides, accuracy and no leaks are vital. The EverSeal bottle ensures that I get the right amount every time, safely and cleanly. It's a must-have for my team."
    }
];

export function TestimonialSlider() {
    return (
        <div className="w-full max-w-3xl mx-auto py-10">
            <div className="mb-16 ">
                <span className="text-sm text-white font-medium text-center block mb-2">TESTIMONIAL</span>
                <h2 className="text-4xl text-center font-bold text-white ">What our happy users say!</h2>
            </div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="pb-10"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <Card className="p-6 shadow-xl">
                            <CardContent className="flex flex-col items-center text-center">
                                <Avatar className="w-16 h-16 mb-4">
                                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                </Avatar>
                                <p className="text-lg font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                                <p className="mt-4 text-gray-700">“{testimonial.feedback}”</p>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

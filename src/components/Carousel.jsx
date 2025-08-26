// Carousel.jsx
import React, { useEffect, useRef, useState } from 'react'
import FirstPage from "../assets/FirstPage.webp"
import SecondPage from "../assets/IV_2A_2025.webp"
import ThirdPage from "../assets/IV_2B_2025.webp"
import FourthPage from "../assets/placment_orent.webp"
import FifthPage from "../assets/ACM_Elections.webp"

const slides = [
    {
        id: "slide1",
        img: `${FirstPage}`,
        prev: "slide4",
        next: "slide2",
        desc: "Mindroid digital magazine 2023-24"
    },
    {
        id: "slide2",
        img: `${SecondPage}`,
        prev: "slide1",
        next: "slide3",
        desc: "Mindroid digital magazine 2023-24",
    },
    {
        id: "slide3",
        img: `${ThirdPage}`,
        prev: "slide2",
        next: "slide4",
        desc: "Mindroid digital magazine 2023-24"
    },
    {
        id: "slide4",
        img: `${FourthPage}`,
        prev: "slide3",
        next: "slide5",
        desc: "Mindroid digital magazine 2023-24"

    },
    {
        id: "slide5",
        img: `${FifthPage}`,
        prev: "slide4",
        next: "slide1",
        desc: "Mindroid digital magazine 2023-24"

    },
  {
    id: "slide1",
    img: FirstPage,
    desc: "Mindroid Digital Magazine 2023-24",
    prev: "slide4",
    next: "slide2",
  },
  {
    id: "slide2",
    img: SecondPage,
    desc: "Industrial Visit of 2nd Year Section A to RMC, Nagpur",
    prev: "slide1",
    next: "slide3",
  },
  {
    id: "slide3",
    img: ThirdPage,
    desc: "Industrial Visit of 2nd Year Section B to RMC, Nagpur",
    prev: "slide2",
    next: "slide4",
  },
  {
    id: "slide4",
    img: FourthPage,
    desc: "Placement Orientation Program for Final Year Students",
    prev: "slide3",
    next: "slide5",
  },
  {
    id: "slide5",
    img: FifthPage,
    desc: "ACM elections for the session 2025-26",
    prev: "slide4",
    next: "slide1",
  },
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goTo = (idx) => setCurrent(idx);

    return (
        <div className="flex flex-col justify-center items-center mt-8 w-full">
            <div className="flex text-[#050a30] font-bold text-3xl my-4 text-center">
                <h1>MINDROID - Digital Magazine</h1>
            </div>
            <div className="carousel w-[55vw] h-[70vh] max-w-full aspect-[16/6] overflow-hidden rounded-2xl shadow-2xl/30 ring-1 ring-primary/10 relative mx-auto flex justify-center items-center">
                {slides.map((slide, idx) => (
                    <div
                        key={slide.id}
                        id={slide.id}
                        className={`carousel-item absolute w-full h-full transition-opacity duration-700 flex justify-center items-center ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img
                            src={slide.img}
                            className="object-fit w-full h-full mx-auto"
                            alt={`Slide ${idx + 1}`}
                            loading="lazy"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 flex flex-col bg-black bg-opacity-40 justify-start pt-20 items-center">
                            <h2 className="text-white text-2xl text-center font-bold">{slide.desc}</h2>
                        </div>
                        <div className="absolute left-4 right-4 bottom-4 flex justify-between">
                            <button
                                className="btn btn-circle btn-accent"
                                onClick={() => goTo((current - 1 + slides.length) % slides.length)}
                                type="button"
                            >❮</button>
                            <button
                                className="btn btn-circle btn-accent"
                                onClick={() => goTo((current + 1) % slides.length)}
                                type="button"
                            >❯</button>
                        </div>
                    </div>
                ))}
                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-accent' : 'bg-base-200'} border border-primary`}
                            onClick={() => goTo(idx)}
                            type="button"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
  return (
    <div className="flex flex-col justify-center items-center mt-8 w-full">
      <div className="flex align-center justify-center text-[#050a30] text-3xl font-bold my-4">
        <h2>MINDROID - Digital Magazine</h2>
      </div>
      <div className="carousel relative w-[55vw] h-[80vh] max-w-full aspect-[16/6] overflow-hidden rounded-2xl shadow-2xl/30 ring-1 ring-primary/10 mx-auto flex justify-center items-center">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            id={slide.id}
            className={`carousel-item absolute w-full h-full transition-opacity duration-700 flex justify-center items-center ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img
              src={slide.img}
              className="object-cover w-full h-full"
              alt={`Slide ${idx + 1}`}
              loading="lazy"
            />

            {/* Description overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-start p-4 bg-black/40 text-white">
              <p className="text-sm md:text-base">{slide.desc}</p>
            </div>

            {/* Buttons */}
            <div className="absolute left-4 right-4 bottom-4 flex justify-between">
              <button
                className="btn btn-circle btn-accent"
                onClick={() => goTo((current - 1 + slides.length) % slides.length)}
                type="button"
              >
                ❮
              </button>
              <button
                className="btn btn-circle btn-accent"
                onClick={() => goTo((current + 1) % slides.length)}
                type="button"
              >
                ❯
              </button>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-accent' : 'bg-base-200'} border border-primary`}
              onClick={() => goTo(idx)}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
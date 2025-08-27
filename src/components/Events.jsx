import React from "react";

const images = [
  {
    src: "src/assets/IDEA3_1.webp",
    caption: "IDEA3",
    ratio: "row-span-2 col-span-2",
  },
  {
    src: "src/assets/IDEA3_2.webp",
    caption: "IDEA3",
    ratio: "row-span-1 col-span-1",
  },
  {
    src: "src/assets/IDEA3_3.webp0",
    caption: "IDEA3",
    ratio: "row-span-1 col-span-1",
  },
  {
    src: "src/assets/placment_orent.webp",
    caption: "Placement Orientation for Final Year Students",
    ratio: "row-span-1 col-span-2",
  },
  {
    src: "src/assets/IDEA3_4.webp",
    caption: "IDEA3",
    ratio: "row-span-1 col-span-2",
  },
  {
    src: "src/assets/salesforce.webp",
    caption: "Salesforce Workshop",
    ratio: "row-span-1 col-span-1",
  },
  {
    src: "public/code_decode.webp",
    caption: "<CODE DECODE>",
    ratio: "row-span-1 col-span-1",
  },
];

const Events = () => {
  return (
    <div className="min-h-[70vh] w-full my-6 px-2 md:px-8 py-10 bg-[#050a30] flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-100 mb-8 text-center">
        Event Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4 w-full max-w-6xl">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-2xl shadow-lg group ${img.ratio} bg-[#10194a]`}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#050a30]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <span className="text-blue-100 text-lg font-semibold text-center px-4">
                {img.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
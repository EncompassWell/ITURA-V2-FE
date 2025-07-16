import React, { useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import artImg from "../../assets/art.svg";
import { GoDotFill } from "react-icons/go";
import mintImg from "../../assets/mint.svg";
import playImg from "../../assets/play.svg";

const MobileAiCards = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
  });

  const autoplayInterval = useRef(null);

  useEffect(() => {
    if (!emblaApi) return;

    autoplayInterval.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => {
      clearInterval(autoplayInterval.current);
    };
  }, [emblaApi]);

  const cards = [
    {
      title: "Create",
      subtitle: "Art",
      description: "Create your desired art to express your mood",
      img: artImg,
    },
    {
      title: "Play",
      subtitle: "Sounds",
      description: "Play desired sound to express your mood",
      img: playImg,
    },
    {
      title: "What's on your",
      subtitle: "Mind",
      description: "Let’s talk about what’s on your mind.",
      img: mintImg,
    },
  ];

  return (
    <div className="overflow-hidden lg:hidden md:hidden flex" ref={emblaRef}>
      <div className="flex">
        {cards.map((card, index) => (
          <div
            key={index}
            className="shrink-0 mr-4 rounded-[30px] border p-6 bg-white/15 border-white/20
               w-[60%]"
          >
            <p className="text-[16px] flex font-[500] items-center">
              <GoDotFill />
              {card.title}
              <em className="font-[400] ml-2">{card.subtitle}</em>
            </p>
            <p className="text-[12px] ml-4 w-full md:w-[80%]">
              {card.description}
            </p>
            <img src={card.img} alt="" className="w-[110px] ml-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileAiCards;

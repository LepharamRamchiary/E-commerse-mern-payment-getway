import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

function HomeSectionCarousel() {
  const responsive = {
    0: { items: 1 },
    500: { items: 2 },
    600: { items: 3 },
    720: { items: 4 },
    1024: { items: 5 },
  };

  const items = [1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="flex justify-center items-center">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
}

export default HomeSectionCarousel;

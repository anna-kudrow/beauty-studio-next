import { reviews } from "@/lib/reviews";
import { TitleCarousel } from "@/ui/TitleCarousel";

export const Reviews = () => {
  return (
    <div className="p-4">
      <TitleCarousel text="Часть отзывов клиентов" />
      <div className="grid grid-cols-2 items-center gap-2 pt-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {reviews.map((review) => (
          <img
            key={review.src}
            className="block transition-transform hover:scale-105"
            src={review.src}
            alt={review.alt}
          />
        ))}
      </div>
    </div>
  );
};

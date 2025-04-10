import TitleGallery from "~/components/custom/TitleGallery";
import { reviews } from "~/lib/reviews";

function ReviewsPage() {
  return (
    <div className="p-4">
      <TitleGallery>Часть отзывов клиентов</TitleGallery>
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
}

export default ReviewsPage;

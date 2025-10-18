"use client";

import "../gallery.css";

import Image from "next/image";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useQuery } from "@tanstack/react-query";
import { Heart, X } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import ScrollUpButton from "~/components/custom/ScrollUpButton/ScrollUpButton";
import TitleGallery from "~/components/custom/TitleGallery";
import BackArrow from "~/components/icons/BackArrow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

type ImageType = {
  image: {
    fields: { file: { url: string | undefined } };
    sys: { id: string };
    index: number;
  };
  text: string | undefined;
};

function GalleryPage() {
  const [activeInd, setActiveInd] = useState<number>(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { slug } = useParams();

  const getTitle = () => {
    switch (slug) {
      case "weddings":
        return "Свадьбы";
      case "events":
        return "На мероприятия";
      case "hairstyling":
        return "Парикмахерские услуги";
      case "photosessions":
        return "Фотосессии под ключ";
      case "backstage":
        return "Backstage";
      default:
        ("Галерея");
    }
  };

  const [title, _] = useState(getTitle());

  const { data: photos = [], isLoading } = useQuery({
    queryKey: ["photos", slug],
    queryFn: async () => {
      const response = await fetch(`/api/contentful?slug=${slug}`);
      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });

  const formatUrl = (url: string | undefined) => {
    if (!url) return "/fallback.jpg";
    return url.startsWith("//") ? `https:${url}` : url;
  };

  return (
    <main className="gallery-content">
      <div className="flex items-center justify-between">
        <TitleGallery>{title}</TitleGallery>
        <div className="p-4 lg:p-10">
          <Link href="/#gallery" scroll className="flex items-center">
            <BackArrow className="lg:w-15" />
            <div className="flex items-center text-[12px] text-[var(--main-text)] lg:text-[18px]">
              К галерее
            </div>
          </Link>
        </div>
      </div>
      {isLoading ? (
        <div className="loading-box">
          <Heart className="loading-image heartbeat" />
        </div>
      ) : (
        <div className="gallery-grid">
          {photos.map((image: ImageType, i: number) => (
            <Dialog key={image.image.fields.file.url}>
              <VisuallyHidden>
                <DialogTitle>Open photo</DialogTitle>
              </VisuallyHidden>
              <DialogTrigger asChild>
                <div className="gallery-image-box">
                  <Image
                    onClick={() => {
                      setActiveInd(i);
                    }}
                    className="gallery-image"
                    src={formatUrl(image.image.fields.file.url)}
                    alt={image.text ?? "Фото галереи"}
                    fill
                    priority
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="flex h-fit justify-center">
                <Carousel
                  className="flex h-fit max-w-[80vw] items-center justify-center"
                  opts={{
                    align: "center",
                    loop: true,
                    startIndex: activeInd,
                  }}
                >
                  <CarouselContent>
                    {photos.map((image: ImageType, i: number) => (
                      <CarouselItem
                        className="flex h-[95vh] w-full items-center justify-center"
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={i}
                      >
                        <div
                          className={`relative min-w-[300px] min-h-[300px] ${imageLoaded ? "opacity-100  " : "opacity-40 bg-gray-400"}
                              
                               `}
                        >
                          <Image
                            id={image.image.sys.id}
                            className={
                              imageLoaded
                                ? "carousel-image max-h-[90vh] opacity-100"
                                : "opacity-0"
                            }
                            src={formatUrl(image.image.fields.file.url)}
                            alt={image.text ?? "image"}
                            width={500}
                            height={750}
                            onLoad={() => setImageLoaded(true)}
                          />
                          <DialogClose className="absolute top-[1%] right-[1%] z-200 cursor-pointer text-white opacity-60">
                            <VisuallyHidden>Close</VisuallyHidden>
                            <X className="size-8" />
                          </DialogClose>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      )}
      <ScrollUpButton />
    </main>
  );
}

export default GalleryPage;

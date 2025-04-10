"use client";

import "../gallery.css";

import Image from "next/image";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Heart } from "lucide-react";

type ImageType = {
  image: { fields: { file: { url: string | undefined } } };
  text: string | undefined;
};

function GalleryPage() {
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
    }
  };

  const [title, setTitle] = useState(getTitle());

  const {
    data: photos = [],
    isLoading,
    error,
  } = useQuery({
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

  console.log(photos);

  const formatUrl = (url: string | undefined) => {
    if (!url) return "/fallback.jpg";
    return url.startsWith("//") ? `https:${url}` : url;
  };

  return (
    <>
      <h1 className="gallery-title">{title}</h1>
      {isLoading ? (
        <div className="loading-box">
          {" "}
          <Heart className="loading-image heartbeat" />
        </div>
      ) : (
        <div className="gallery-grid">
          {photos.map((image: ImageType) => (
            <div
              className="gallery-image-box"
              key={image.image.fields.file.url}
            >
              {" "}
              <Image
                className="gallery-image"
                src={formatUrl(image.image.fields.file.url)}
                alt={image.text ?? "image"}
                fill
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default GalleryPage;

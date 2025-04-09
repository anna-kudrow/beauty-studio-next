"use client";

import "../gallery.css";

import { useQuery } from "@tanstack/react-query";

import { useParams } from "next/navigation";
import { useState } from "react";

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

  return (
    <>
      <h1>{title}</h1>
      <div className="gallery-grid">
        {photos.map((image: ImageType) => (
          <img
            key={image.image.fields.file.url}
            src={image.image.fields.file.url}
            alt={image.text}
          />
        ))}
      </div>
    </>
  );
}

export default GalleryPage;

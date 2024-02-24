"use client";

import type { dataType } from "../page";
import { useRef } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import getContentfulData from "@/lib/get_contenful_data";
import Autoplay from "embla-carousel-autoplay";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function ProfilePicture() {
  const plugin = useRef(Autoplay({ delay: 10000, stopOnMouseEnter: true }));

  const { data, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: () => getContentfulData("about"),
  });
  const { profileImage } = data[0].fields as dataType;

  if (isLoading) {
    return <Skeleton className="w-[300px] h-[300px] rounded-md bg-gray-800" />;
  }

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        onMouseLeave={() => plugin.current.play()}
        className="w-full max-w-xs"
      >
        <CarouselContent>
          {profileImage.map((image, index) => (
            <CarouselItem key={index}>
              <div className="w-[300px] relative">
                <Image
                  className="w-[300px] h-[300px] object-cover animate-[blob_25s_infinite] border-4 border-gray-100"
                  src={`https:${image.fields.file.url}`}
                  alt={`${
                    image.fields.description.length > 0
                      ? image.fields.description
                      : image.fields.title
                  }`}
                  width={image.fields.file.details.image.width}
                  height={image.fields.file.details.image.height}
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}

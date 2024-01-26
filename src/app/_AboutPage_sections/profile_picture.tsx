import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function ProfilePicture() {
  return (
    <>
      <Avatar className="w-[300px] h-[300px] relative animate-[blob_25s_infinite] border-4 border-gray-100">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/34386863?v=4"
          className="w-[300px] h-[300px] object-cover"
        />
        <AvatarFallback>
          <Image
            className="w-[300px] h-[300px] object-cover"
            src="/mmeju.jpg"
            alt="Profile picture"
            width={1363}
            height={968}
            priority
          />
        </AvatarFallback>
      </Avatar>
    </>
  );
}

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import getContentfulData from "@/lib/get_contenful_data";
import ContactDialog from "./_AboutPage_sections/contact_dialog";
import ProfilePicture from "./_AboutPage_sections/profile_picture";
import Description from "./_AboutPage_sections/description";
import Tools from "./_AboutPage_sections/tools";
import Contact from "./_AboutPage_sections/contact";
import Bmc from "./_AboutPage_sections/bmc";

export type docDescription = {
  content: {
    content: {
      data: { uri?: string }; // if nodeType is "hyperlink"
      marks?: { type: string }[]; // if nodeType is "text"
      value?: string; // if nodeType is "text"
      content?: {
        value: string;
      }[]; // available, if nodeType is an "hyperlink"
      nodeType: "text" | "hyperlink";
    }[]; // each text variations inside this paragraph
  }[]; // paragraph array
};

// description.content - an array of all the paragraphs inside
// the document
// description.content[0].content - an array of all the text
// variations inside the paragraph

type imageType = {
  fields: {
    title: string;
    description: string;
    file: {
      contentType: string; // e.g "image/jpeg"
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
    };
  };
}[];

export type dataType = {
  profileImage: imageType;
  jobTitle: string;
  description: docDescription;
  toolsImages: imageType;
  contactLinks: string[];
};

export default async function AboutPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["about"],
    queryFn: () => getContentfulData("about"),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Bmc />
        <ProfilePicture />
        <div className="w-full sm:w-[90%] md:w-[80%] text-center mt-3">
          <Description />
          <Tools />
          <Contact />
          <ContactDialog />
        </div>
      </HydrationBoundary>
    </>
  );
}

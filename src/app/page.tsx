import ContactDialog from "./_AboutPage_sections/contact_dialog";
import ProfilePicture from "./_AboutPage_sections/profile_picture";
import Description from "./_AboutPage_sections/description";
import Tools from "./_AboutPage_sections/tools";
import Contact from "./_AboutPage_sections/contact";

export default function AboutPage() {
  return (
    <>
      <ProfilePicture />
      <div className="w-full sm:w-[90%] md:w-[80%] text-center mt-3">
        <Description />
        <Tools />
        <Contact />
        <ContactDialog />
      </div>
    </>
  );
}

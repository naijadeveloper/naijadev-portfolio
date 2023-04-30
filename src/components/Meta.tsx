import Head from "next/head";

type MetaProps = {
  title: string;
  description: string;
  keywords: string;
};
export default function Meta({ title, description, keywords }: MetaProps) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/code.png" />
      {/* <a href="https://www.flaticon.com/free-icons/code" title="code icons">
        Code icons created by Royyan Wijaya - Flaticon
      </a> */}
    </Head>
  );
}

Meta.defaultProps = {
  title: "Naija developer portfolio",
  description:
    "This is a portfolio website that displays the github information of the naijadeveloper aka Enoch Enujiugha. It is built with Next, TypeScript and Tailwind CSS.",
  keywords:
    "Next.js, React, TypeScript, Tailwind CSS, Naija developer, Enoch Enujiugha, portfolio, github, naijadeveloper",
};
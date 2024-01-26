import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Tools() {
  const tools = [
    ["/imgs/html5.svg", "HTML5"],
    ["/imgs/css3.svg", "CSS3"],
    ["/imgs/tailwindcss.svg", "TailwindCss"],
    ["/imgs/javascript.svg", "Javascript"],
    ["/imgs/typescript.svg", "Typescript"],
    ["/imgs/react.svg", "React Js/Ts"],
    ["/imgs/nextjs.svg", "Next Js/Ts"],
    ["/imgs/mongodb.svg", "MongoDB"],
    ["/imgs/dart.svg", "Dart"],
    ["/imgs/flutter.svg", "Flutter"],
  ];
  return (
    <>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-6 underline decoration-4 underline-offset-4">
          Tools
        </h3>
        <ul className="tools-list flex flex-wrap justify-center gap-8">
          {tools.map((tool, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <img src={tool[0]} alt={tool[1]} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tool[1]}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </ul>
      </div>
    </>
  );
}

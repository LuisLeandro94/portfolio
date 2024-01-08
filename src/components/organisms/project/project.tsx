import { ComponentProps, forwardRef } from "react";

export interface ProjectProps extends Omit<ComponentProps<"div">, "className" | "children"> {
    title: string;
    description: string;
    image: string[];
    href: string;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectProps>(({
    title, description, image, href, ...rest
}, ref) => {
    return (
        <div ref={ref} className="w-full max-h-96 h-full relative flex mb-32">
            <div className="h-full flex flex-row justify-between w-1/4">
                <div className="h-1/4 flex flex-row justify-between items-center w-full">
                    <div className="bg-white h-1 w-full"></div>
                </div>
                <div className="w-1/3 flex justify-center items-start relative">
                    <h1 className="[writing-mode:vertical-lr] text-3xl uppercase text-white">{title}</h1>
                </div>
            </div>
            <div className="w-1/4 h-full mx-2">
                <div className={`w-full h-1/2  mb-2 bg-[url('${image[0]}')] bg-cover`}></div>
                <div className="w-full h-1/2 overflow-y-scroll no-scrollbar">
                    <p className="text-gray-500 text-justify pt-4 border-t-2 border-white">{description}</p>
                </div>
            </div>
            <div className="w-1/4 h-full mx-2">
                <div className={`w-full h-1/2 mb-2 bg-[url('${image[1]}')] bg-cover`}></div>
                <div className={`w-full h-1/2 bg-[url('${image[2]}')] bg-cover`}></div>
            </div>
        </div>
    )
})

export default ProjectCard
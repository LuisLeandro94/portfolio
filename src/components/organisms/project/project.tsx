import { ComponentProps, forwardRef } from 'react'

export interface ProjectProps
    extends Omit<ComponentProps<'div'>, 'className' | 'children'> {
    title: string
    description: string
    image: string[]
    href: string
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectProps>(
    ({ title, description, image }, ref) => {
        return (
            <div ref={ref} style={{ height: '50vh' }} className="flex mb-32">
                <div className="h-full flex flex-row justify-between w-1/4">
                    <div className="h-1/4 flex flex-row justify-between items-center w-full">
                        <div className="bg-white h-1 w-full"></div>
                    </div>
                    <div className="w-1/3 flex justify-center items-start relative">
                        <h1 className="[writing-mode:vertical-lr] text-3xl uppercase text-white">
                            {title}
                        </h1>
                    </div>
                </div>
                <div className="w-1/4 h-full mx-2">
                    <div
                        style={{ backgroundImage: `url(${image[0]})` }}
                        className={`w-full h-1/2  mb-2 bg-cover bg-no-repeat bg-center`}
                    ></div>
                    <div className="w-full h-1/2 overflow-y-scroll no-scrollbar">
                        <p className="text-gray-500 text-justify pt-4 border-t-2 border-white">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="w-1/4 h-full mx-2">
                    <div
                        style={{ backgroundImage: `url(${image[1]})` }}
                        className={`w-full h-1/2 mb-2 bg-cover bg-no-repeat bg-center`}
                    ></div>
                    <div
                        style={{ backgroundImage: `url(${image[2]})` }}
                        className={`w-full h-1/2 bg-cover bg-no-repeat bg-center`}
                    ></div>
                </div>
            </div>
        )
    },
)

export default ProjectCard

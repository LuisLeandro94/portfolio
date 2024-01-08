import { default as Project, default as ProjectCard } from 'components/organisms/project';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

const projectList = [
  {
    title: 'Projecto 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque augue eget mauris fringilla, a ullamcorper turpis varius. Morbi eget nisl eu nunc volutpat porta. Proin convallis mi sit amet libero scelerisque, at suscipit odio mollis. Fusce massa ligula, fermentum vitae enim in, vulputate pretium turpis.',
    image: [
        'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg', 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704326400&semt=sph', 'https://www.dpreview.com/files/p/articles/7961724650/Lesson-4-Yarra-Ranges-Road-Black-Spur-Mountain-Ash.jpeg'
    ],
    href: ''
  },
  {
    title: 'Projecto 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque augue eget mauris fringilla, a ullamcorper turpis varius. Morbi eget nisl eu nunc volutpat porta. Proin convallis mi sit amet libero scelerisque, at suscipit odio mollis. Fusce massa ligula, fermentum vitae enim in, vulputate pretium turpis.',
    image: [
        'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg', 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704326400&semt=sph', 'https://www.dpreview.com/files/p/articles/7961724650/Lesson-4-Yarra-Ranges-Road-Black-Spur-Mountain-Ash.jpeg'
    ],
    href: ''
  }
]

function App() {
  const [headerBg, setHeaderBg] = useState('bg-transparent');

  const listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      setHeaderBg('bg-gray-900 shadow-md transition duration-200')
    } else {
      setHeaderBg('bg-transparent')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent, {passive: true});

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    }
  }, [])

  return (
    <main className="w-full overflow-y-scroll no-scrollbar">
      <header className={`pl-16 py-16 fixed max-w-screen w-full flex flex-row justify-between z-10 ${headerBg}`}>
        <a href='/' className="text-4xl text-white">lrdev.</a>
        <div className='flex flex-row pr-16 text-2xl text-white text-center items-center'>
          <p className='font-bold pb-2 relative w-max three mx-4'>
            <span className='px-1'>
              <a href='#'>Home</a>
            </span>
            <span className='absolute left-0 bottom-1 w-full h-1 transition-all bg-yellow-400 rounded-md' style={{zIndex: -9}}></span>
          </p>
          <p className='font-bold pb-2 relative w-max three mx-4'>
            <span className='px-1'>
              <a href='#'>About</a>
            </span>
            <span className='absolute left-0 bottom-1 w-full h-1 transition-all bg-yellow-400 rounded-md' style={{zIndex: -9}}></span>
          </p>
          <p className='font-bold pb-2 relative w-max three mx-4'>
            <span className='px-1'>
              <a href='#'>Work</a>
            </span>
            <span className='absolute left-0 bottom-1 w-full h-1 transition-all bg-yellow-400 rounded-md' style={{zIndex: -9}}></span>
          </p>
          <p className='font-bold pb-2 relative w-max three mx-4'>
            <span className='px-1'>
              <a href='#'>Contacts</a>
            </span>
            <span className='absolute left-0 bottom-1 w-full h-1 transition-all bg-yellow-400 rounded-md' style={{zIndex: -9}}></span>
          </p>
          
        </div>
      </header>
      <section className="max-w-screen h-screen text-center flex justify-center flex-col items-center my-0">
        <h3 className='text-white text-8xl mb-6'>Luís Ribeiro</h3>
        <div className='text-white text-5xl'>
        <Typewriter options={{loop: true}}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Front-end Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Gaming enthusiast")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Beer lover")
                        .pauseFor(1000)
                        .start();
                }}
            />
        </div>
      </section>
      <section className="max-w-screen h-screen text-center flex justify-start flex-col items-center my-0 mx-16">
        {projectList.map((project, index) => (
          <ProjectCard title={project.title} description={project.description} image={project.image} href={project.href} key={index} />
        ))}
      </section>
      <footer className="pb-16 relative max-w-screen text-gray-400 font-bold mx-auto flex justify-between px-16">
        <h3 className="text-4xl">lrdev.</h3>
        <a href="https://github.com/luisleandro94" className="my-auto">
          Luis Ribeiro @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
}

export default App;

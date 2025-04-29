'use client';
import { Image } from '@nextui-org/image';
import { LinkList } from '@/components/LinkList';

export default function Home() {
  return (
    <main>
      <div className='lg:w-1/2 lg:m-auto'>
        <div className='fixed w-2 h-full bg-[#dc423b]'></div>
        <div className='px-8 lg:px-12 py-8'>
          <LinkList />
        </div>

        <div className='lg:flex gap-4 ml-10'>
          <Image
            radius='none'
            alt='profile pic'
            className='h-40'
            src='/images/IMG_3092.JPG'
          />
          <div className='sm:my-10 lg:my-0'>
            <p className='text-md mt-4 lg:mt-0'>Byron Richards</p>
            <a
              className='text-md text-[color:var(--link-blue)] underline underline-offset-2'
              href='mailto:bxr@byronxr.com'
            >
              bxr@byronxr.com
            </a>
            <p>
              <a
                className='text-md text-[color:var(--link-blue)] underline underline-offset-2'
                href='/Byron_Richards_Resume.pdf'
                target='_blank'
                download
              >
                Resume (PDF)
              </a>
            </p>
            <p>
              <a
                className='text-md text-[color:var(--link-blue)] underline underline-offset-2'
                href='https://github.com/byro18'
                target='_blank'
              >
                GitHub
              </a>
            </p>
          </div>
        </div>

        <div className='mx-10 my-10'>
          <p className='text-md'>
            Hi, I&apos;m Byron, a software engineer based in New York City. I
            focus on building full-stack web applications, using React on the
            frontend and AWS services on the backend. I graduated with a degree
            in Computer Science and was actively involved in Forge, a UVA-based
            organization that empowers students to collaborate on real-world
            projects and startups. Through Forge, I had the opportunity to teach
            and work closely with peers, honing my skills in teamwork,
            communication, and problem-solving.
          </p>
          <br></br>
          <p className='text-md'>
            In my free time, I enjoy reading, running, traveling, and working on
            new business ideas. I&apos;m passionate about entrepreneurship,
            exploring the impact of technology on humanity, and learning about
            AI and its intersection with human life. I also enjoy meeting new
            people, learning from their experiences, and helping them grow.
          </p>
        </div>
        <div className='mx-10 my-10'>
          <p className='underline underline-offset-2 mb-4'>Education</p>
          <p className='text-md font-semibold'>University of Virginia</p>
          <p className='text-md'>B.A. in Computer Science</p>
          <p className='text-md'>Graduated 2024</p>
        </div>

        <div className='mx-10 my-10'>
          <div className='mb-8'>
            <p className='underline underline-offset-2 mb-4'>Work Experience</p>
            <p className='font-semibold text-md'>Software Engineer</p>
            <p className='text-md mb-2 italic'>Kentro | Aug 2024 - Present</p>
          </div>
          <div className='mb-8'>
            <p className='font-semibold text-md'>
              Software Engineering Instructor
            </p>
            <p className='text-md mb-2 italic'>Forge | Aug 2022 - Jun 2024</p>
          </div>
          <div className='mb-8'>
            <p className='font-semibold text-md'>Software Engineer</p>
            <p className='text-md mb-2 italic'>Forge | Sep 2023 - Feb 2024</p>
          </div>
          <div className='mb-8'>
            <p className='font-semibold text-md'>Software Engineering Intern</p>
            <p className='text-md mb-2 italic'>Kentro | Jun 2023 - May 2024</p>
          </div>
          <div className='mb-8'>
            <p className='font-semibold text-md'>
              Computer Systems Teaching Assistant
            </p>
            <p className='text-md mb-2 italic'>
              University of Virginia | Jan 2023 - May 2023
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

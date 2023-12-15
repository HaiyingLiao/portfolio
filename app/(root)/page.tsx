import Link from 'next/link';
import Image from 'next/image';

import {
	Service,
	Experience,
	ProjectCard,
	Testimonial,
	EmailCopy,
} from '@/components/index';
import { projects, techs } from '@/constants';

export default function Home() {
	return (
		<>
			<section className='bg-1 flex flex-col items-center justify-between gap-8 pb-8 pt-12 md:flex-row md:pb-24 md:pt-20'>
				<div className='md:max-w-[500px]'>
					<h1 className='s-bold md:p-bold mb-5 uppercase leading-[130%] tracking-[4.2px] text-accent-primaryLight dark:text-accent-primaryDark md:mb-7 md:tracking-[6px]'>
						Hi, I am Haiying Liao
					</h1>
					<h1 className='heading-3 md:heading-1 mb-3.5 leading-[115%] tracking-[-0.42px] text-black-200 dark:text-white md:mb-2.5 md:leading-[130%] md:tracking-[-0.64px]'>
						Professional{' '}
						<span className='skinInk textDecorationLarge'> Web Developer</span>{' '}
						based in UK
					</h1>
					<p className='xs-regular md:b-regular mb-5 leading-[155%] text-white-500 dark:text-white-800 md:mb-9 md:leading-[160%]'>
						Transforming the web one line of code at a time: Crafting
						cutting-edge digital experiences with precision, passion, and a
						profound commitment to excellence
					</p>
					<div className='flex flex-col items-center gap-2 md:flex-row'>
						<Link
							href='#mywork'
							className='primaryBtn s-bold md:b-bold w-full leading-[160%] md:max-w-[186px]'
						>
							My Work
						</Link>
						<EmailCopy />
					</div>
				</div>

				<Image
					src='/assets/hero.svg'
					alt='hero image'
					width={400}
					height={400}
					className='h-auto w-full md:w-[50%]'
				/>
			</section>

			<section className='bg-2'>
				<h2 className='sectionTitle skinInk textDecoration'>My Skills</h2>
				<div className='mt-10 flex flex-wrap justify-center gap-10'>
					{techs.map((tech) => (
						<div
							key={tech.name}
							className='s-regular md:b-regular flex flex-col items-center justify-center gap-1 text-black-400 dark:text-white-800'
						>
							<div
								className={`flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white-800 bg-[length:25px_25px] bg-center bg-no-repeat p-5 hover:bg-white  hover:shadow-[10px_10px_26px_0px_#00000014] dark:bg-black-300 md:h-[100px] md:w-[100px] md:bg-[length:50px_50px] ${tech.colorImg} hover:bg-[length:30px_30px] md:hover:bg-[length:62px_62px] ${tech.garyImg} transition-all delay-100 duration-100 ease-linear hover:dark:shadow-[8px_0px_26px_0px_#1F2E48]`}
							/>
							<p>{tech.name}</p>
						</div>
					))}
				</div>
			</section>

			<Service />
			<Experience />

			{/* Projects section */}
			<section id='mywork' className='bg-2'>
				<h2 className='sectionTitle'>
					Featured <span className='skinInk textDecoration'>Projects</span>{' '}
				</h2>

				{projects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}

				{/* <Link
					href='/case-studies'
					className='primaryBtn b-regular md:b-bold mx-auto mt-10 max-w-[323px] gap-3 md:mt-12'
				>
					See more case studies
					<Image src='/assets/arrow1.svg' alt='arrow' width={16} height={16} />
				</Link> */}
			</section>

			{/* <Testimonial /> */}
		</>
	);
}

'use client';

import { type FC, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ProjectCardProp {
	project: {
		title: string;
		techs: Array<string>;
		imagePath: string;
		bgColor: string;
		imageLocation: string;
		siteLink: string;
		githubLink: string;
	};
}

const ProjectCard: FC<ProjectCardProp> = ({ project }) => {
	useEffect(() => {
		AOS.init({
			duration: 1200,
		});
	}, []);

	return (
		<div
			className={`mt-12 flex w-full flex-col overflow-hidden rounded-[20px] ${
				project.bgColor
			} p-10 md:p-12 ${
				project.imageLocation === 'right'
					? 'lg:flex-row'
					: 'justify-center lg:flex-row-reverse lg:gap-20'
			}`}
		>
			<div
				data-aos='fade-right'
				className={
					project.imageLocation === 'right'
						? 'md:min-w-[50%]'
						: 'md:min-w-[60%]'
				}
			>
				<h1 className='heading-5 md:heading-2 mb-[30px] leading-[115%] tracking-[-0.32px] text-white md:mb-6 md:tracking-[-0.48px]'>
					{project.title}
				</h1>

				<div className='s-regular mb-12 flex gap-3 leading-[155%] text-white'>
					{project.techs.map((tech) => (
						<div key={tech} className='techContainer'>
							{tech}
						</div>
					))}
				</div>

				<div className='flex gap-12 md:gap-20'>
					<Link
						href={project.siteLink}
						target='_blank'
						className='s-bold md:p-bold flex items-center gap-1.5 leading-[145%] text-white md:leading-[130%]'
					>
						<Image
							src='/assets/dashicons.svg'
							alt='icon'
							width={20}
							height={20}
							className='brightness-0 invert'
						/>
						Demo Site
						<Image
							src='assets/arrow-dark.svg'
							alt='icon'
							width={20}
							height={20}
							className='animate-bounce brightness-0 invert'
						/>
					</Link>

					<Link
						href={project.githubLink}
						target='_blank'
						className='s-bold md:p-bold flex items-center gap-1.5 leading-[145%] text-white md:leading-[130%]'
					>
						<Image
							src='/assets/github.svg'
							alt='icon'
							width={20}
							height={20}
							className='brightness-0 invert'
						/>
						Source Code
						<Image
							src='assets/arrow-dark.svg'
							alt='icon'
							width={20}
							height={20}
							className='animate-bounce brightness-0 invert'
						/>
					</Link>
				</div>

				{/* <Link
					href='/'
					className='b-bold mb-6 flex gap-2 leading-[160%] text-white'
				>
					See Detail Project
					<Image src='/assets/arrow.svg' alt='arrow' width={35} height={20} />
				</Link> */}
			</div>

			<Image
				data-aos='fade-left'
				src={project.imagePath}
				alt='project image'
				width={659}
				height={330}
				className='h-auto w-full '
			/>
		</div>
	);
};

export default ProjectCard;

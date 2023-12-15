'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { workExperience } from '@/constants';

const Experience = () => {
	useEffect(() => {
		AOS.init({
			duration: 1200,
		});
	}, []);

	return (
		<section className='bg-2 flex flex-col gap-7 xl:flex-row'>
			<div
				data-aos='fade-right'
				data-aos-offset='300'
				data-aos-easing='ease-in-sine'
				className='max-w-full rounded-2xl bg-black-200 px-[38px] pb-[38px] pt-[58px] dark:bg-white-800 lg:pb-[105px] lg:pl-[105px] lg:pr-[143px] lg:pt-[152px]'
			>
				<h2 className='heading-4 lg:heading-2 mb-9 leading-[115%] tracking-[-0.48px] text-white dark:text-black-200'>
					Work <span className='skinInk textDecoration'>Experience</span>
				</h2>
				<p className='s-regular lg:b-regular mb-10 max-w-[400px] leading-[160%] text-white-800 dark:text-white-500 lg:mb-16'>
					Progress and milestones: A simple walkthrough of roles, projects, and
					achievements in my career.
				</p>
				<div className='flex items-center'>
					<div className=' h-0.5 w-full  bg-[#FFFFFF80] dark:bg-[#151e2c66]' />
					<div className='rounded-full ring-1 ring-[#FFFFFF80] dark:ring-[#151e2c66]'>
						<div className='m-2 h-8 w-8 rounded-full bg-white dark:bg-black-200'></div>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-5'>
				{workExperience.map((experience) => (
					<div
						className='flex w-full flex-col gap-3 rounded-[10px] border-[1px] border-white-800 bg-white p-4 transition-all delay-100 duration-300 ease-in hover:translate-x-6 hover:translate-y-2 hover:shadow-[-25px_47px_66px_0px_#00000014] dark:border-black-200 dark:bg-black-200 dark:hover:bg-black-300 md:flex-row xl:gap-8 xl:p-8'
						key={experience.name}
						data-aos='fade-right'
						data-aos-offset='400'
						data-aos-easing='ease-in-sine'
					>
						<Image
							src={experience.logo}
							alt='company logo'
							width={48}
							height={48}
							className='h-12 w-12 md:h-[58px] md:w-[58px]'
						/>
						<div>
							<h2 className='base-bold leading-[130%] text-black-200 dark:text-white'>
								{experience.name}
							</h2>
							<p className='s-regular flex gap-6 leading-[155%] text-white-500 dark:text-white-800'>
								<span>{experience.role}</span>
								<span>{experience.time}</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Experience;

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CallToAction = () => {
	useEffect(() => {
		AOS.init({
			duration: 1200,
		});
	}, []);

	return (
		<section className='bg-2 flex h-full items-center '>
			<div
				data-aos='flip-down'
				className="mx-auto flex h-full w-full max-w-[1400px] flex-col items-center justify-center rounded-xl bg-[url('/assets/cta.png')] bg-auto bg-center bg-no-repeat p-4 sm:aspect-video sm:h-[330px] sm:bg-cover sm:p-10 md:flex-row md:justify-between lg:p-12"
			>
				<div className='w-full max-w-xl'>
					<h2 className='p-5 text-3xl font-bold text-black-200 sm:text-center md:text-left md:text-[32px] lg:text-5xl'>
						Interested in my skills and experience? Let&apos;s connect.
					</h2>
				</div>

				<Link
					href={'/contact'}
					className='primaryBtn b-regular md:b-bold mt-3 w-full gap-3 px-4 sm:max-w-[323px]'
				>
					Get in Touch with Me
					<Image src='/assets/arrow1.svg' alt='arrow' width={16} height={16} />
				</Link>
			</div>
		</section>
	);
};

export default CallToAction;

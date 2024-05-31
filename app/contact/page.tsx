import Link from 'next/link';
import Image from 'next/image';

import { ContactForm } from '@/components/index';
import { myInfo } from '@/constants';

const Contact = () => {
	return (
		<>
			<section className='bg-1 text-center'>
				<h1 className='pageTitle skinInk textDecorationLarge'>Get in Touch</h1>
				<p className='pageSubTitle mx-auto max-w-[658px]'>
					Let&apos;s Collaborate on Your Next Project
				</p>
			</section>

			<section className='bg-2 flex flex-col-reverse justify-between gap-12 lg:flex-row'>
				<div className='space-y-9 md:space-y-20'>
					{myInfo.map((info) =>
						info.label === 'My Socials' ? (
							<div key={info.label} className='space-y-3 md:space-y-7'>
								<h2 className='infoTitle'>{info.label}</h2>
								<div className='flex gap-4'>
									{info.icons?.map((icon) => (
										<Link key={icon.name} href={icon.path} target='_blank'>
											<Image
												src={icon.icon}
												alt={`social icon: ${icon.name}`}
												width={0}
												height={0}
												className='infoIcons'
											/>
										</Link>
									))}
								</div>
							</div>
						) : (
							<div key={info.label} className='space-y-3 md:space-y-7'>
								<h2 className='infoTitle'>{info.label}</h2>
								<div className='flex items-center gap-2'>
									<Image
										src={info.icon}
										alt='contact icon'
										width={30}
										height={30}
										className='infoIcons'
									/>
									<a
										href={
											info.label === 'Email Address'
												? 'mailto:haiyingliao.dev@gmail.com'
												: 'tel:+447450505104'
										}
										className='p-bold base-bold leading-[130%] text-black-400 dark:text-white'
									>
										{info.content}
									</a>
								</div>
							</div>
						)
					)}
				</div>

				<ContactForm />
			</section>
		</>
	);
};

export default Contact;

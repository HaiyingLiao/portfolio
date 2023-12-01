import Image from 'next/image';
import Link from 'next/link';

import { socialIcons } from '@/constants';

const Footer = () => {
	return (
		<footer className='b-regular bg-2 flex flex-col items-center gap-4 pb-12 leading-[160%] text-black-400 dark:text-white-800 md:flex-row md:justify-between md:pb-[52px]'>
			<p>© 2023 Haiying Liao. All rights reserved.</p>
			<div className='flex gap-6'>
				{socialIcons.map((item) => (
					<Link key={item.name} href={item.path} target='_blank'>
						<Image
							src={item.icon}
							alt='social icon'
							width={24}
							height={24}
							className='dark:brightness-0 dark:invert-[100%]'
						/>
					</Link>
				))}
			</div>
		</footer>
	);
};

export default Footer;

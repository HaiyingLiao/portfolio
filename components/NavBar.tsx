'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/constants';
import { ModeDropdown } from './ModeDropDown';

const NavBar = () => {
	const pathname = usePathname();

	return (
		<nav className='top-0 z-50 flex justify-between bg-white-800/90 px-6 py-5 dark:bg-black-300/95 md:sticky md:px-[85px] md:backdrop-blur-sm'>
			<Link href='/'>
				<Image src='/logo.png' alt='logo' width={45} height={45} />
			</Link>

			{/* desktop menu */}
			<div className='s-regular hidden items-center gap-9 text-black-200 dark:text-white md:flex'>
				{navLinks.map((link) => {
					const isActive = pathname === link.href;

					return (
						<Link
							className={
								isActive
									? 's-bold text-accent-primaryLight dark:text-accent-primaryDark'
									: 'text-white-500 dark:text-white'
							}
							href={link.href}
							key={link.lable}
						>
							{link.lable}
						</Link>
					);
				})}

				{/* <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/download.svg"
            alt="logo"
            width={20}
            height={20}
            className="dark:invert-[100%]"
          />
          Resume
        </Link> */}

				<div className='h-6 w-[0.1rem] bg-white-500'></div>

				<ModeDropdown />
			</div>

			{/* mobile menu */}
			<Image
				src='/assets/menu.svg'
				alt='mobile menu'
				width={24}
				height={24}
				className='block dark:invert-[100%] md:hidden'
			/>
		</nav>
	);
};

export default NavBar;

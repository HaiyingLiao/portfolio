'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { navLinks } from '@/constants';
import { ModeDropdown } from './ModeDropDown';
import { Button } from './ui/button';

const NavBar = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState<boolean>(false);

	return (
		<nav className='top-0 z-50 flex justify-between bg-white-800/50 px-6 py-5 dark:bg-black-300/50 md:sticky md:px-[85px] md:backdrop-blur-sm'>
			<Link href='/'>
				<Image src='/logo.png' alt='logo' width={45} height={45} />
			</Link>

			{/* desktop menu */}
			<div className='s-regular hidden items-center gap-9 text-black-200 dark:text-white md:flex'>
				{navLinks.map((link) => {
					const isActive = pathname === link.href;

					return (
						<li key={link.lable} className='list-none'>
							<Link
								className={
									isActive
										? 's-bold text-accent-primaryLight dark:text-accent-primaryDark'
										: 'text-white-500 dark:text-white'
								}
								href={link.href}
							>
								{link.lable}
							</Link>
						</li>
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
			<div className='flex items-center justify-center gap-3 md:hidden'>
				<div
					className={`ease fixed top-0 z-50 flex h-screen w-full flex-col  items-center justify-center gap-6 overflow-hidden bg-white-800 transition-all duration-500 dark:border-r-white-500 dark:bg-black-200  ${
						open ? 'left-0' : '-left-full'
					}`}
				>
					{navLinks.map((link) => {
						const isActive = pathname === link.href;

						return (
							<li key={link.lable} className='list-none'>
								<Link
									className={
										isActive
											? 'text-accent-primaryLight dark:text-accent-primaryDark'
											: 'text-white-500 dark:text-white'
									}
									href={link.href}
									onClick={() => setOpen(false)}
								>
									{link.lable}
								</Link>
							</li>
						);
					})}

					<Button
						className='absolute right-5 top-5 text-white md:hidden'
						onClick={() => setOpen(false)}
					>
						<Image
							src={'/assets/cross.png'}
							width={40}
							height={40}
							alt='close icon'
							className='h-6 w-6 dark:brightness-0 dark:invert-[100%]'
						/>
					</Button>
				</div>

				<ModeDropdown />
				<Button onClick={() => setOpen(true)}>
					<Image
						src='/assets/menu.svg'
						alt='mobile menu'
						width={24}
						height={24}
						className='dark:invert-[100%]'
					/>
				</Button>
			</div>
		</nav>
	);
};

export default NavBar;

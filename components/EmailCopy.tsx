'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckIcon } from '@radix-ui/react-icons';

const EmailCopy = () => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleCLick = (text: string) => {
		navigator.clipboard.writeText(text);

		setIsChecked(true);

		setTimeout(() => setIsChecked(false), 2000);
	};

	return (
		<div className='md:b-bold s-bold flex w-full items-center justify-center gap-2 rounded-[50px] bg-white px-3 py-2 text-white-500 dark:bg-black-200 dark:text-white md:py-3'>
			<a
				href='mailto:haiying.liao@outlook.com'
				target='_blank'
				className='inline-block'
			>
				haiying.liao@outlook.com
			</a>
			<button onClick={() => handleCLick('haiying.liao@outlook.com')}>
				{isChecked ? (
					<CheckIcon color='#FFBE62' className='h-5 w-5' />
				) : (
					<Image
						className='w-5 object-contain'
						src='/assets/frame.svg'
						alt='copy icon'
						width={40}
						height={40}
					/>
				)}
			</button>
		</div>
	);
};

export default EmailCopy;

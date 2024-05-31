export const navLinks = [
	{
		href: '/',
		lable: 'Home',
	},
	// {
	// 	href: '/case-studies',
	// 	lable: 'Case Studies',
	// },
	{
		href: '/contact',
		lable: 'Contact',
	},
];

export const socialIcons = [
	{
		name: 'github',
		icon: '/assets/github-social.svg',
		path: 'https://github.com/HaiyingLiao',
	},
	{
		name: 'linkedin',
		icon: '/assets/linkedin.svg',
		path: 'https://www.linkedin.com/in/haiying-liao',
	},
	{
		name: 'instagram',
		icon: '/assets/instagram.svg',
		path: 'https://www.instagram.com/haiying_liao/',
	},
	{
		name: 'x',
		icon: '/assets/x.svg',
		path: 'https://x.com/Haiying_Liao',
	},
	{
		name: 'frontendmentor',
		icon: '/assets/frontendmentor.svg',
		path: 'https://www.frontendmentor.io/profile/HaiyingLiao',
	},
];

export const techs = [
	{
		name: 'React',
		garyImg: "bg-[url('/assets/react-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/react.svg')]",
		techSImg: "bg-[url('/assets/react.svg')]",
	},
	{
		name: 'NextJS',
		garyImg: "bg-[url('/assets/next-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/next.svg')]",
		techSImg: "bg-[url('/assets/next.svg')]",
	},
	{
		name: 'TypeScript',
		garyImg: "bg-[url('/assets/ts-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/ts.svg')]",
		techSImg: "bg-[url('/assets/ts.svg')]",
	},
	{
		name: 'JavaScript',
		garyImg: "bg-[url('/assets/js-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/js.svg')]",
		techSImg: "bg-[url('/assets/js.svg')]",
	},

	{
		name: 'Redux',
		garyImg: "bg-[url('/assets/redux-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/redux.svg')]",
		techSImg: "bg-[url('/assets/redux.svg')]",
	},

	{
		name: 'Git',
		garyImg: "bg-[url('/assets/git-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/git.svg')]",
		techSImg: "bg-[url('/assets/git.svg')]",
	},
	{
		name: 'GitHub',
		garyImg: "bg-[url('/assets/github-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/github.svg')]",
		techSImg: "bg-[url('/assets/github.svg')]",
	},
	{
		name: 'NodeJs',
		garyImg: "bg-[url('/assets/nodejs-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/nodejs.svg')]",
		techSImg: "bg-[url('/assets/nodejs.svg')]",
	},
	{
		name: 'Express',
		garyImg: "bg-[url('/assets/ex-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/ex.svg')]",
		techSImg: "bg-[url('/assets/ex.svg')]",
	},
	{
		name: 'MongoDB',
		garyImg: "bg-[url('/assets/mongodb-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/mongodb.svg')]",
		techSImg: "bg-[url('/assets/mongodb.svg')]",
	},
	{
		name: 'HTML',
		garyImg: "bg-[url('/assets/html-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/html.svg')]",
		techSImg: "bg-[url('/assets/html.svg')]",
	},
	{
		name: 'CSS',
		garyImg: "bg-[url('/assets/css-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/css.svg')]",
		techSImg: "bg-[url('/assets/css.svg')]",
	},
	{
		name: 'SASS',
		garyImg: "bg-[url('/assets/sass-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/sass.svg')]",
		techSImg: "bg-[url('/assets/sass.svg')]",
	},
	{
		name: 'Tailwind CSS',
		garyImg: "bg-[url('/assets/tailwind-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/tailwind.svg')]",
		techSImg: "bg-[url('/assets/tailwind.svg')]",
	},
	{
		name: 'MUI',
		garyImg: "bg-[url('/assets/mui-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/mui.svg')]",
		techSImg: "bg-[url('/assets/mui.svg')]",
	},

	{
		name: 'Motion',
		garyImg: "bg-[url('/assets/motion-gray.svg')]",
		colorImg: "hover:bg-[url('/assets/motion.svg')]",
		techSImg: "bg-[url('/assets/motion.svg')]",
	},
];

export const projects = [
	{
		title: 'Morrent - A Car Rental Application',
		techs: ['ReactJS', 'TypeScript', 'Nodejs', ' MongoDB'],
		imagePath: '/assets/morent.svg',
		bgColor: 'bg-[#416CEA]',
		imageLocation: 'right',
		siteLink: 'https://morrent.vercel.app/',
		githubLink: 'https://github.com/HaiyingLiao/Morrent',
	},
	{
		title: 'JobIT - A Job Finding Application',
		techs: ['ReactJS', 'Redux', 'MUI'],
		imagePath: '/assets/jobIt.svg',
		bgColor: 'bg-[#0BAB7C]',
		imageLocation: 'left',
		siteLink: 'https://cohort5-code-fam-job-it.vercel.app/',
		githubLink: 'https://github.com/HaiyingLiao/JobIT',
	},
	{
		title: 'Hipnode - A Social Media Application',
		techs: ['In Progress', 'NextJS', 'TypeScript', 'TailwindCss'],
		imagePath: '/assets/hipnode.svg',
		bgColor: 'bg-[#FF6934]',
		imageLocation: 'right',
		siteLink: 'https://hippnode.vercel.app/',
		githubLink: 'https://github.com/HaiyingLiao/Hipnode',
	},
];

export const testimonials = [
	{
		name: 'Adrian Hajdin',
		jobTitle: 'Founder & CEO at JS Mastery',
		comment:
			'I have had the pleasure of working with Adrian as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and consistently delivers high-quality code.',
		photo: '/assets/Adrian.svg',
	},
	{
		name: 'Adrian Hajdin 2',
		jobTitle: 'Founder & CEO at JS Mastery',
		comment:
			'I have had the pleasure of working with Adrian as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and consistently delivers high-quality code.',
		photo: '/assets/Adrian.svg',
	},
];

export const services = [
	{
		title: 'Front-End Dev',
		desc: 'Craft seamless user experiences by implementing the user interface and interactive components of websites and applications.',
		icon: "bg-[url('/assets/service2.svg')]",
		iconLight: "group-hover:bg-[url('/assets/service2-light.svg')]",
		iconDark: "dark:group-hover:bg-[url('/assets/service2-dark.svg')]",
	},
	{
		title: 'Back-End Dev',
		desc: 'Specializing in server-side development to ensure efficient data management and seamless communication between the user interface and server components.',
		icon: "bg-[url('/assets/service3.svg')]",
		iconLight: "group-hover:bg-[url('/assets/service3-light.svg')]",
		iconDark: "dark:group-hover:bg-[url('/assets/service3-dark.svg')]",
	},
	// {
	// 	title: 'Analytics & SEO',
	// 	desc: 'Utilise advanced tracking and analytics tools to meticulously monitor website performance, enhancing SEO strategies for optimal visibility.',
	// 	icon: "bg-[url('/assets/design.svg')]",
	// 	iconLight: "group-hover:bg-[url('/assets/design-light.svg')]",
	// 	iconDark: "dark:group-hover:bg-[url('/assets/design-darker.svg')]",
	// },
	// {
	// 	title: 'Web Optimization',
	// 	desc: 'Dedicate efforts to optimizing websites, enhancing performance, and delivering a frictionless user experience.',
	// 	icon: "bg-[url('/assets/service4.svg')]",
	// 	iconLight: "group-hover:bg-[url('/assets/service4-light.svg')]",
	// 	iconDark: "dark:group-hover:bg-[url('/assets/service4-dark.svg')]",
	// },
];

export const caseStudies = [
	{
		title: 'Morrent',
		desc: 'Car Rental Application',
		imagePath: '/assets/morent-laptop.svg',
		bgColor: 'bg-[#416CEA]',
	},
	{
		title: 'JobIT',
		desc: 'Job Finding Application',
		imagePath: '/assets/jobit-laptop.svg',
		bgColor: 'bg-[#0BAB7C]',
	},
	{
		title: 'Hipnode',
		desc: 'Social Platform for Developers',
		imagePath: '/assets/hipnode-laptop.svg',
		bgColor: 'bg-[#FF6934]',
	},
];

export const caseInfo = [
	{
		title: 'My Role',
		content: 'Software Engineer',
	},
	{
		title: 'Start Date',
		content: '24/01/2023',
	},
	{
		title: 'End Date',
		content: '02/03/2023',
	},
];

export const processes = [
	{
		name: 'Definition',
		lightImg: "bg-[url('/assets/def.svg')]",
		darkImg: "dark:bg-[url('/assets/def-dark.svg')]",
	},
	{
		name: 'Design',
		lightImg: "bg-[url('/assets/case-design.svg')]",
		darkImg: "dark:bg-[url('/assets/design-dark.svg')]",
	},
	{
		name: 'Planning',
		lightImg: "bg-[url('/assets/plan.svg')]",
		darkImg: "dark:bg-[url('/assets/plan-dark.svg')]",
	},
	{
		name: 'Development',
		lightImg: "bg-[url('/assets/dev.svg')]",
		darkImg: "dark:bg-[url('/assets/dev-dark.svg')]",
	},
	{
		name: 'Deployment',
		lightImg: "bg-[url('/assets/deploy.svg')]",
		darkImg: "dark:bg-[url('/assets/deploy-dark.svg')]",
	},
];

export const gains = [
	{
		title: 'challenges',
		contents: [
			'Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.',
			'We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.',
			'However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.',
		],
		titleColor: 'text-[#E15A46]',
		icon: '/assets/challenge.svg',
	},
	{
		title: 'learnings',
		contents: [
			'Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.',
			'Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.',
			"Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized & easily accessible while keeping it secure.",
			'Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.',
		],
		titleColor: 'text-[#02BC7D]',
		icon: '/assets/tick.svg',
	},
];

export const caseStudyCard = [
	{
		title: 'Jobit',
		content:
			'Jobit, a web app made with React and JSearch API, links developers to millions of job openings. It offers easy job search by...',
		image: '/assets/jobit-card.svg',
	},
	{
		title: 'Hipnode',
		content:
			'Jobit, a web app made with React and JSearch API, links developers to millions of job openings. It offers easy job search by...',
		image: '/assets/hipnode-card.svg',
	},
];

export const contactFormInfo = [
	{
		label: 'name',
		title: 'What’s your name?',
	},
	{
		label: 'email',
		title: 'What is your email?',
	},
	{
		label: 'message',
		title: 'Write something here',
	},
	{
		label: 'contact',
		title: 'How to reach out to you back?',
		subTitle: 'eg. phone number or email ',
	},
];

export const myInfo = [
	{
		label: 'My Socials',
		icons: [
			{
				name: 'github',
				icon: '/assets/github-social.svg',
				path: 'https://github.com/HaiyingLiao',
			},
			{
				name: 'linkedin',
				icon: '/assets/linkedin.svg',
				path: 'https://www.linkedin.com/in/haiying-liao',
			},
			{
				name: 'instagram',
				icon: '/assets/instagram.svg',
				path: 'https://www.instagram.com/haiying_liao/',
			},
			{
				name: 'x',
				icon: '/assets/x.svg',
				path: 'https://x.com/Haiying_Liao',
			},
			{
				name: 'frontendmentor',
				icon: '/assets/frontendmentor.svg',
				path: 'https://www.frontendmentor.io/profile/HaiyingLiao',
			},
		],
		icon: '',
	},
	{
		label: 'Phone Number',
		content: '+44 7450505104',
		icon: '/assets/call.svg',
	},
	{
		label: 'Email Address',
		content: 'haiyingliao.dev@gmail.com',
		icon: '/assets/message.svg',
	},
];

export const caseLinks = [
	{
		title: 'Demo Site',
		leftIconLight: "bg-[url('/assets/dashicons.svg')]",
		leftIconDark: "dark:bg-[url('/assets/dashicons-dark.svg')]",
		rightIcon: "bg-[url('/assets/arrow-case.svg')]",
		rightIconDark: "dark:bg-[url('/assets/arrow-dark.svg')]",
		animation: 'animate-bounce',
	},
	{
		title: 'Source Code',
		leftIconLight: "bg-[url('/assets/github-case.svg')]",
		leftIconDark: "dark:bg-[url('/assets/github-dark.svg')]",
		rightIcon: "bg-[url('/assets/arrow-case.svg')]",
		rightIconDark: "dark:bg-[url('/assets/arrow-dark.svg')]",
	},
];

export const workExperience = [
	{
		name: 'JS Mastery',
		role: 'Freelance developer',
		time: 'Jun 2023 - Present',
		logo: '/assets/jsm.png',
	},
	{
		name: 'University of the West England',
		role: 'Student Representative',
		time: 'Jan 2021 – Jan 2022',
		logo: '/assets/uwe.jpeg',
	},
];

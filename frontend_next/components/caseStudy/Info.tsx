const caseInfo = [
  {
    title: "My Role",
    content: "Software Engineer",
  },
  {
    title: "Start Date",
    content: "24/01/2023",
  },
  {
    title: "End Date",
    content: "02/03/2023",
  },
];

const Info = () => {
  return (
    <section className="bg-2 flex flex-col justify-between gap-9 py-10 md:flex-row md:py-[53px]">
      {caseInfo.map((info) => (
        <div key={info.title} className="space-y-2">
          <h3 className="s-bold text-black-400 md:b-bold dark:text-white-500 leading-[145%] md:leading-[160%]">
            {info.title}
          </h3>
          <p className="text-black-200 p-bold md:base-bold leading-[130%] dark:text-white">
            {info.content}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Info;

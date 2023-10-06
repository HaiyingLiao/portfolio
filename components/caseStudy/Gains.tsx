import Image from "next/image";

import { gains } from "@/constants";

const Gains = () => {
  return (
    <section className="bg-2">
      <h2 className="caseSubtitle">Gains</h2>
      <h3 className="caseTitle">Challenges & Learnings</h3>

      {gains.map((gain) => (
        <div key={gain.title} className="gainsContainer">
          <h2 className={`gainsTitle ${gain.titleColor}`}>{gain.title}</h2>
          {gain.contents.map((content, index) => (
            <div key={index} className="gainsContentContainer">
              <Image
                src={gain.icon}
                alt="bullet point icon"
                width={20}
                height={20}
              />
              <p className="caseParagraph">{content}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Gains;

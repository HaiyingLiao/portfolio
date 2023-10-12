import Image from "next/image";

import { myInfo } from "@/constants";

const MyInfo = () => {
  return (
    <div className="space-y-9 md:space-y-20">
      {myInfo.map((info) =>
        info.label === "My Socials" ? (
          <div key={info.label} className="space-y-3 md:space-y-7">
            <h2 className="infoTitle">{info.label}</h2>
            <div className="flex gap-4">
              {info.icons?.map((icon) => (
                <Image
                  key={icon.name}
                  src={icon.icon}
                  alt={`social icon: ${icon.name}`}
                  width={0}
                  height={0}
                  className="infoIcons"
                />
              ))}
            </div>
          </div>
        ) : (
          <div key={info.label} className="space-y-3 md:space-y-7">
            <h2 className="infoTitle">{info.label}</h2>
            <div className="flex items-center gap-2">
              <Image
                src={info.icon}
                alt="contact icon"
                width={30}
                height={30}
                className="infoIcons"
              />
              <p className="p-bold base-bold leading-[130%] text-black-400 dark:text-white">
                {info.content}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MyInfo;

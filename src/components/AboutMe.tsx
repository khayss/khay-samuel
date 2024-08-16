import aboutMe from "../assets/data/about-me.json";
import { icons } from "./common/icon";

export function AboutMe() {
  return (
    <div className="flex flex-col items-center md:items-start md:w-360x">
      <Intro />
    </div>
  );
}

function Intro() {
  return (
    <div className="flex flex-col items-center md:items-start gap-4">
      <div className="max-w-240x rounded-full overflow-hidden">
        <img
          src={aboutMe.image}
          alt="photo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start">
        <div className="text-center md:text-start">
          <h1 className="text-3xl font-semibold">{aboutMe.name}</h1>
          <p className="text-lg dark:text-verdigris">Software Developer</p>
        </div>
        <AboutMeSocials />
      </div>
    </div>
  );
}

function AboutMeSocials() {
  return (
    <div className="w-full flex justify-center md:justify-start">
      <div className="flex md:flex-col gap-2">
        {aboutMe.socials.map((social) => {
          const Icon = icons[social.logo];
          return (
            <a
              key={social.id}
              href={social.link}
              className="flex items-center gap-2"
              target="_blank"
            >
              <div className="w-30x h-30x text-xl dark:bg-platinum rounded-full flex items-center justify-center dark:text-gun-metal">
                <div>{Icon && <Icon />}</div>
              </div>
              <p className="hidden md:block">{social.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

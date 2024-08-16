import { GoDotFill } from "react-icons/go";
import aboutMe from "../assets/data/about-me.json";

export function Overview() {
  return (
    <div className="w-full flex flex-col items-center md:items-start gap-4">
      <div>
        <p className="text-2xl font-medium dark:text-verdigris">Hi there 👋,</p>
      </div>
      <AboutMeParagraphs />
      <AboutMeAbility />
    </div>
  );
}

function AboutMeParagraphs() {
  return (
    <div className="w-full flex flex-col gap-2">
      {aboutMe.about.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

function AboutMeAbility() {
  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className="text-xl font-medium dark:text-verdigris">Overview</h2>
      <ul>
        {aboutMe.ability.map((ability, index) => (
          <li key={index} className="flex gap-2">
            <span className="dark:text-silver">
              <GoDotFill />
            </span>
            <span>{ability}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

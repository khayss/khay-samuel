import data from "../assets/data/about-me.json";
import { icons } from "./common/icon";

export function Contact() {
  return (
    <div className="flex flex-col gap-2 px-8 md:col-start-1 md:row-start-2 self-start">
      <h2 className="text-xl font-medium dark:text-verdigris">Contact</h2>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
        {data.socials.map((social) => {
          const Icon = icons[social.logo];
          return (
            <a
              key={social.id}
              href={social.link}
              className="flex items-center gap-2"
            >
              <div className="w-30x h-30x text-xl dark:bg-platinum rounded-full flex items-center justify-center dark:text-gun-metal">
                <div>{Icon && <Icon />}</div>
              </div>
              <p>{social.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

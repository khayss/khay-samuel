import data from "../assets/data/portfolio.json";
import { FaAngleDoubleRight } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";

export function Portfolio() {
  return (
    <div className="w-full flex flex-col items-center md:items-start gap-8">
      <PortfolioDetails />
      <ContributionDetails />
      <JobDetails />
      {/* <ConferenceDetails /> */}
    </div>
  );
}

function PortfolioDetails() {
  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className="text-xl font-medium dark:text-verdigris">Portfolio</h2>
      <div className="w-full flex flex-col items-start gap-2">
        {data.portfolio.map((_portfolio) => (
          <div key={_portfolio.id} className="grid gap-x-2 gap-y-1">
            <div className="pt-1 col-start-1 col-end-2">
              <FaAngleDoubleRight />
            </div>
            <h3 className="text-lg font-medium capitalize col-start-2">
              {_portfolio.title}
            </h3>
            <p className="col-start-2 dark:text-silver">
              {_portfolio.description}
            </p>
            <ul className="col-start-2 flex gap-1 items-center">
              <li>
                <a
                  href={_portfolio.github}
                  target="_blank"
                  className="italic dark:text-spanish-orange"
                >
                  Repository
                </a>
              </li>
              {_portfolio.link.deployed && (
                <>
                  <li>
                    <RxDividerVertical fontSize={"24px"} />
                  </li>
                  <li>
                    <a
                      href={_portfolio.link.deployLink}
                      target="_blank"
                      className="italic dark:text-spanish-orange"
                    >
                      Live Link
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContributionDetails() {
  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className="text-xl font-medium dark:text-verdigris">
        Contributions
      </h2>
      <div className="w-full flex flex-col items-start gap-2">
        {data.contributions.map((_contribution) => (
          <div key={_contribution.id} className="grid gap-x-2 gap-y-1">
            <div className="pt-1 col-start-1 col-end-2">
              <FaAngleDoubleRight />
            </div>
            <h3 className="text-lg font-medium capitalize col-start-2">
              {_contribution.title}
            </h3>
            <p className="col-start-2 dark:text-silver">
              {_contribution.description}
            </p>
            <p className="col-start-2">
              <a
                href={_contribution.github}
                target="_blank"
                className="italic dark:text-spanish-orange"
              >
                Repository
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function JobDetails() {
  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className="text-xl font-medium dark:text-verdigris">Jobs</h2>
      <div>{data.jobs.length ? "" : <p>No jobs to show</p>}</div>
    </div>
  );
}

// function ConferenceDetails() {
//   return (
//     <div>
//       <h2>Conferences</h2>
//       <div>{}</div>
//     </div>
//   );
// }

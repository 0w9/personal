import Link from "next/link";

export default function App() {
  return (
    <div className="flex justify-center min-h-screen p-4 overflow-y-auto">
      <div>
        <div className="flex justify-between items-center text-2xl">
          <span className="text-2xl" style={{ fontFamily: "Lora" }}>
            Lennard
          </span>
        </div>

        <br />

        <div style={{ fontFamily: "Raleway" }}>
          <p className="text-sm md:text-base">
            Hey! I&apos;m Lennard, a passionate software developer born in 2005. I mainly work on full-stack apps using NextJS/React, but I am also experienced with different libraries like Prisma (ORM) or APIs. To keep this intro short, you can find more details{" "}
            <span className="text-blue-600 hover:underline">
              <Link target="_blank" href={"/"}>here</Link>
            </span>
            .
          </p>

          <br />

          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
            <p className="font-bold">Freelancing status</p>
            <p>Currently taking new clients! Message me with more info.</p>
          </div>

          <br />

          <div>
            <p className="text-lg md:text-xl underline">Some projects I built:</p>
            <p>These projects are sorted by how recent they got updated/ launched.</p>
            <div>
              <ul className="list-disc ml-10">
                <li className="text-sm md:text-base">
                  <Link target="_blank" href="https://github.com/0w9/langchain-discord" className="text-blue-600 hover:underline">
                    LangChain-Discord
                  </Link>{" "}
                  is a package I created on a weekend, which allows you to add Discord tools to your LangChain agent.
                </li>
                <li className="text-sm md:text-base">
                  <Link target="_blank" href="/" className="text-blue-600 hover:underline">
                    Atlas
                  </Link>{" "}
                  evolved at the AISF hackathon in May 2023. It had one goal: Bring a fireside chat speaker on stage, but it&apos;s an AI. The cool thing about this is that you can easily give the AI some intro, like their professional background.
                </li>
                <li className="text-sm md:text-base">
                  <Link target="_blank" href="https://www.feedai.lol" className="text-blue-600 hover:underline">
                    FeedAI (2.7k users)
                  </Link>{" "}
                  is a small webapp I created for the LeapAI hackathon. I won the hackathon, getting featured in Ben&apos;s Bites afterwards. FeedAI allowed users to train an AI model on their Instagram posts, to create images that are similar. Sadly it was never approved by Facebook.
                </li>
                <li className="text-sm md:text-base">
                  <Link target="_blank" href="https://www.figma.com/community/plugin/1187697700637596253/OneLiner-%F0%9F%AA%84" className="text-blue-600 hover:underline">
                    OneLiner (1.3k users)
                  </Link>{" "}
                  was a Figma plugin that allowed you to create copywriting for your startup&apos;s landing page. It was featured in Ben&apos;s Bites.
                </li>
                <li className="text-sm md:text-base">
                  There are many other interesting projects, all of which can be found on my{" "}
                  <Link target="_blank" href="/" className="text-blue-600 hover:underline">
                    Twitter
                  </Link>{" "}
                  or{" "}
                  <Link target="_blank" href="/" className="text-blue-600 hover:underline">
                    GitHub
                  </Link>
                  . Feel free to check them out, I try to keep them up forever.
                </li>
              </ul>
            </div>
          </div>

          <br />

          <div>
            <p className="text-lg md:text-xl underline">Fun facts about me:</p>

            <div>
              <ul>
                <li className="text-sm md:text-base">
                  I really enjoy gravel-biking. All of my activities are uploaded on{" "}
                  <Link target="_blank" href="https://www.strava.com/athletes/98819139" className="text-blue-600 hover:underline">
                    Strava
                  </Link>
                  . I try to hit 100km/week. In my opinion, it&apos;s the perfect sport because it often even saves time.
                </li>
                <li className="text-sm md:text-base">
                  My favorite drink is{" "}
                  <Link target="_blank" disabled href="/" className="text-blue-600 hover:underline">
                    Japanese green tea
                  </Link>
                  . I&apos;m really addicted to it, but it has good health benefits! My dream is to grow and roast my own in the future.
                </li>
                <li className="text-sm md:text-base">
                  Some stuff I want to experiment with is{" "}
                  <Link target="_blank" className="text-blue-600 hover:underline" href="/">
                    custom keyboards
                  </Link>
                  ,{" "}
                  <Link target="_blank" className="text-blue-600 hover:underline" href="/">
                    design
                  </Link>
                  , and{" "}
                  <Link target="_blank" className="text-blue-600 hover:underline" href="/">
                    watchmaking
                  </Link>
                  .
                </li>
                <li className="text-sm md:text-base">
                  I enjoy{" "}
                  <Link target="_blank" disabled href="/" className="text-blue-600 hover:underline">
                    good discussions
                  </Link>{" "}
                  about controversial topics, but I have a clear opinion: Because they feel like humans,{" "}
                  <Link target="_blank" className="text-blue-600 hover:underline" href="/">
                    animals need more rights
                  </Link>{" "}
                  and humane conditions to be raised and processed. I try to wear clothing that supports good labor and the best animal conditions.
                </li>
                <li className="text-sm md:text-base">
                  I competed in{" "}
                  <Link target="_blank" disabled href="/" className="text-blue-600 hover:underline">
                    fencing tournaments
                  </Link>{" "}
                  for 7 years, but I stopped to focus more on programming.
                </li>
              </ul>
            </div>
          </div>

          <br />

          <div>
            <p className="text-lg md:text-xl underline">Contact me:</p>

            <div>
              For every request you can find me on <Link target="_blank" href="https://lookup.guru/924694666350309416" className="text-blue-600 hover:underline">Discord</Link> or <Link target="_blank" href="https://www.twitter.com/lennardeth" className="text-blue-600 hover:underline">Twitter</Link>. I try to respond within 6 hours, for faster replies please
              add me as a friend before/ follow me and <Link target="_blank" href="https://nohello.net/" className="text-blue-600 hover:underline">send all important information in your first message </Link>.

              <br />
              In case you prefer email, you can reach me at <Link target="_blank" href="mailto:lennardsolana@gmail.com" className="text-blue-600 hover:underline">my personal address</Link>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
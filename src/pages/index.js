import Link from "next/link";

function App() {
  return (
    <div className="flex items-center justify-center h-screen max-w-3xl mx-auto px-10">
      <div>
        <div className="flex justify-between items-center text-3xl">
          <span className="text-3xls" style={{ fontFamily: "Lora"}}>Lennard</span>
        </div>

        <br />

        <div style={{ fontFamily: "Raleway" }}>
          <p>Hey! I&apos;m Lennard, a passionate software builder born in 2005. I mainly work on full-stack apps using NextJS/ React, but I am also experimenting with custom keyboards (firmware, PCB design) and design. To keep this intro short, you can find more details <span className="text-blue-600 hover:underline"><Link href={"/"}>here</Link></span>.</p>

          <br />

          <div>
            <p className="underline-offset-5 text-xl underline">Some projects I built:</p>

            <div>
              <div>
                  <li><Link href="/" className="text-blue-600 hover:underline">Atlas </Link> evolved at the AISF hackathon in May 2023. It had one goal: Bring a fireside chat speaker on stage, but it&apos;s an AI. The cool thing about this is that you can easily give the AI some intro, like their professional background.</li>
                  <li><Link href="https://www.feedai.lol" className="text-blue-600 hover:underline">FeedAI (2.7k users) </Link> is a small webapp I created for the LeapAI hackathon. I also won it, getting featued in Ben&apos;s Bites. FeedAI allowed users to train an AI model on their Instagram posts, to create images that are similar. Sadly it was never approved by Facebook.</li>
                  <li><Link href="https://www.figma.com/community/plugin/1187697700637596253/OneLiner-%F0%9F%AA%84" className="text-blue-600 hover:underline">OneLiner (1.3k users) </Link>was a Figma plugin that allows you to create copywriting for your startup&apos;s landing page. It was featured in Ben&apos;s Bites.</li>
                  <li>But there&apos;s many other interesting projects, which all are on <Link href="/" className="text-blue-600 hover:underline">Twitter</Link> or <Link href="/" className="text-blue-600 hover:underline">GitHub</Link>. Feel free to check them out, I try to keep them up forever.</li>
              </div>
            </div>
          </div>

          <br />

        <div>
            <p className="underline-offset-5 text-xl underline">Funfacts about me:</p>

            <div>
              <div>
                  <li>I really like gravel-biking, all my activities are uploaded on <Link href="https://www.strava.com/athletes/98819139" className="text-blue-600 hover:underline">Strava </Link>. I try to hit 100km/ week.</li>
                  <li>My faviourite drink is <Link disabled href="/" className="text-blue-600 hover:underline">japanese green tea</Link>. I'm really addicted to it, but it has good health benefits! My dream is to grow and roast my own in the future.</li>
                  <li>Some stuff I want to experiment with is <Link className="text-blue-600 hover:underline" href="/">custom keyboards</Link>, <Link className="text-blue-600 hover:underline" href="/">design</Link> and <Link className="text-blue-600 hover:underline" href="/">watchmaking</Link>.</li>
                  <li>I enjoy <Link disabled href="/" className="text-blue-600 hover:underline">good discussions</Link> about controversial topics, but I have a clear opinion: Because they feel like humans, <Link className="text-blue-600 hover:underline" href="/">animals need more rights </Link>and humane conditions to be raised and processed. I try to wear clothign that supports good labour and the best animal conditions.</li>
                  <li>For 7 years I competed in <Link disabled href="/" className="text-blue-600 hover:underline">fencing tournaments</Link>, but stopped when I did more programming!</li>
              </div>
            </div>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
}

export default App;

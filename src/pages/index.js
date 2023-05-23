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
        </div>

      </div>
    </div>
  );
}

export default App;

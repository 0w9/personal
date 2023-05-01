
function App() {
  return (
  <div className="ml-10 mt-10">
    <h1 className="text-3xl">Lennard</h1>

    <p>Hey! I'm Lennard, a passionate builder. I mainly work on full-stack apps using NextJS/ React, but I am also experimenting with custom keyboards (firmware, PCB design) and design.</p>

    <br />

    <div>
      <p classNameName="underline-offset-5 text-xl underline">Some projects I built:</p>

      <div>
        <div>
          <li>
            <a href="/one-liner" className="text-blue-600 hover:underline"> OneLiner (1.5k users) </a>

            was a Figma plugin that allows you to create copywriting for your startup's landing page. It was featured in Ben's Bites.
          </li>

          <li><a href="/feed-ai" className="text-blue-600 hover:underline">FeedAI (2.7k users) </a> a small webapp I created for the LeapAI hackathon. I also won it, getting featued in Ben's Bites. FeedAI allowed users to train an AI model on their Instagram posts, to create images that are similar. Sadly it was never approved by Facebook.</li>
        </div>
      </div>
    </div>

    <br />

    <div>
      <p className="underline-offset-5 text-xl underline">Stuff I'm hacking on:</p>

      <div>
        I currently deliver <a className="text-blue-600">contracting work</a> to many clients around the world, mainly <a className="text-blue-600">providing full-stack and custom AI splutions</a>.

        <br />
        <br />

        Apart from this I also work on different projects, like <a className="text-blue-600">automating agency workflows with AI and Zapier</a> or creating a <a className="text-blue-600">tool to manage accounting reports for small businesses</a>. All. of those are collaborations with other teams or companies, but I also work with students on a <a className="text-blue-600">next-gen accountability tool for friends</a>, which we try to market with TikTok.

        <br />
        <br />

        In my freetime I also hack on a <a className="text-blue-600">custom keyboard</a>, where I play with QMK and also am creating my first own PCB. This is a topic, like <a className="text-blue-600">embedded engineering</a>, that I would like to explore.

        <br />
        <br />

        Other things I work on are <a className="text-blue-600">learning UI/UX design</a> and hitting a new record <a className="text-blue-600">biking min. 100km/week</a> or just building stuff in communities like <a className="text-blue-600">f.inc</a>,  <a className="text-blue-600">NextGen</a> and  <a className="text-blue-600">Buildspace</a>.
      </div>
    </div>
  </div>
  );
}

export default App;

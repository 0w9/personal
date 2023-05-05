import Link from "next/link";

function App() {
  return (
    <div className="mt-10 max-w-3xl mx-auto px-10">
      <div class="flex justify-between items-center text-3xl">
        <span className="decoration-double text-3xls">How to properly DM</span>
      </div>

      <br />

      <p>Hey! There are a <a className="text-blue-600">few rules to DM</a> users on the internet. This can be <a className="text-blue-600">Discord, Twitter or just mail</a>. Please <a className="text-blue-600">follow these rules to get the best response</a>. Also people will enjoy working with you more.</p>

      <br />

      <div>
        <p className="underline-offset-5 text-xl underline">The rules are quiet simple:</p>

        <br />

        <div>
            <p className="underline-offset-5 underline text-2xl">Say what you want.</p>

            <br />

            <p>When messaging, please state <a className="text-blue-600">exactly what you need</a>. Most people are really busy, so we can <a className="text-blue-600">sort what to respond to</a>. Most people want to help, but still have other tasks to organize.</p>

            <br />

            <a className="text-green-800 text-xl">Good example:</a>
            <br />
            <code>Hey Lennard. I am a designer and want to turn my design into a functional website. Can you help with with this at the moment? </code>
            
            <br />
            <br />

            <a className="text-red-800 text-xl">Bad example:</a>
            <br />
            <code>Hello. How are you?</code>

            <br />
            <br />

        </div>

        <div>
            <p className="underline-offset-5 underline text-xl">Send reminders.</p>

            <br />

            <p>Sometimes you just get <a className="text-blue-600">no response for over two days</a>. This doesn&apos;t mean the person ignores you. They maybe are just busy. Send a <a className="text-blue-600">friendly reminder after 48h</a>. But keep in mind there&apos;s holidays, etc.</p>

            <br />
            <br />
        </div>
        </div>
      <br />

    </div>
  );
}

export default App;

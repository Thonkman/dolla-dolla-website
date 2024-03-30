import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
    return (
        <>
            <Head>
                <title>Thonk E. Mann</title>
                <link rel="stylesheet" href="thonkstyle.css"></link>
            </Head>
            <main>
                <div className="topnav">
                    <h1>Thonkman.net</h1>
                    <a href="https://github.com/Thonkman">Github</a>
                </div>
                <div className="aroundTextBox">
                    <div className="textBox">
                        <h1>About I (him)</h1>
                        <p>I'm him, I was always him, I will continue to be him</p>
                        <p>I will do more stuff trust</p>
                    </div>
                </div>

            </main>
        </>
    );
}

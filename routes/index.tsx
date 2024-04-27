import { Head } from "$fresh/runtime.ts";



export default function Home() {
    return (

        <>
            <Head>
                <title>Thonk E. Mann</title>
                <link rel="stylesheet" href="thonkstyle.css"></link>
                <link rel="icon" type="image/x-icon" href="Thonkery.png"></link>
            </Head>
            <main>
                <div className="topnav">
                    <h1>Thonkman.net</h1>
                    <a href="https://github.com/Thonkman">Github</a>
                    <a href="projects">Projects</a>
                </div>
                <div className="aroundTextBox">
                    <div className="textBox">
                        <h1>About him</h1>
                        <p>I'm Thonkman! I develop stuff occasionally for fun. I purchased this website randomly for
                            virtually no reason. I was hoping maybe it would kick me into gear, maybe I'd fall in love
                            with making websites? Couldn't tell ya if it worked. </p>
                        <p>Anywho, I enjoy playing Minecraft and Yakuza the most. I've done some very minor roblox
                            dev-ing in the past, mostly animating, but I'm done with that for now. </p>
                        <p>Majority of my programming is just Minecraft Modding (Quilt on top!), most of which is done
                            with my great friend ix0rai.<br/> She's definitely the better programmer, by like 5
                            multiverses (and doesn't hesitate to make that fact known). Absolutely check her out, great
                            lady and her mods are like super cool. I helped on a few of them.</p>
                        <p>Feel free to check out my and hers pages for more info!</p>
                        <p>Have a great day!</p>
                    </div>
                </div>

            </main>
        </>

    );
}


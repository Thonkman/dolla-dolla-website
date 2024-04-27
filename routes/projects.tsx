import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Data {
    input: string;
}

const modName = ["Affable Armours", "Beaming Beacons"]

interface Data {
    results: string[];
    query: string;
}

export const handler: { GET(req, ctx): any } = {
    GET(req, ctx) {
        const url = new URL(req.url);
        const query = url.searchParams.get("?modName") || "";
        const results = modName.filter((className) => className.includes(query));
        return ctx.render({ results, query });
    },
};

export default function projectsPage({data}: PageProps<Data>) {
    const {results, query} = data;
    return (
        <>
            <Head>
                <title>Projects</title>
                <link rel="stylesheet" href="thonkstyle.css"/>
                <link rel="icon" type="image/x-icon" href="Thonkery.png"></link>
            </Head>
            <main>
                <div className="topnav">
                <a href=".">Thonkman.net</a>
                    <a href="https://github.com/Thonkman">Github</a>
                    <a href="projects">Projects</a>
                </div>
                <div className="aroundFormBox">
                    <form>
                        <label for="?modName"></label>
                        <input type="text" id="?modName" name="?modName" className="formInput" value={query}/>
                    </form>
                </div>
                <div className="aroundProjectBox">
                    <div className="projectBox">
                        <div className="image-slot"><img src="favicon.ico" alt="temp image" style="width:200px;height:200px"/></div>
                        <div className="title-slot">Affable Armours</div>
                        <div className="desc-slot">The mod that adds a few alternatives to netherite for end game armours. I made this mod because I felt like the turtle shell could use some friends (with unique names) and other options for armour at the later stages of progression, with their own unique utilities. Plus there also exists an entire turtle shell material in the vanilla code!</div>

                    </div>
                </div>
            </main>

        </>
    )
}
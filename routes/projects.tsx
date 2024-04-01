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
                    <ul>
                        {results.map((name) => <li key={name}>{name}</li>)}
                    </ul>
                </div>
                <div className="aroundProjectBox">
                    <div className="projectBox">
                        <a href="#">projekt</a>
                        <img src="favicon.ico" alt="temp image" style="width:200px;height:200px"/>
                    </div>
                </div>
            </main>

        </>
    )
}
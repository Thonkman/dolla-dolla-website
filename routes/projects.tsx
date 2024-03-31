import { Head } from "$fresh/runtime.ts";
export default function projectsPage() {
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
                        <label for="modName"></label>
                        <input type="text" id="modName" name="modName" className="formInput"/>
                    </form>
                </div>
                <div className="aroundProjectBox">
                    <div className="projectBox">
                        <img src="favicon.ico" alt="temp image" style="width:200px;height:200px"/>
                    </div>
                </div>
            </main>

        </>
    )
}
import axios from "axios";
import cheerio from "cheerio";

export async function getHTML(url) {
	const { data: html } = await axios.get(url);
	return html;
}

export async function scrapeRuns(html) {
	// load up cheerio
	const $ = cheerio.load(html);
	const scrapedRuns = $(".ui-branding-style-partner")
		.children()
		.children()
		.children()
		.children()[7].children[0].data;
	const currentStatus = $(".ui-bat-team-scores").text();
	const currentTeam = currentStatus.split(" - ")[0];
	const currentOver = currentStatus.match(/\((.*)\)/)[1];
	// return scrapedRuns;
	console.log(scrapedRuns);
	console.log(currentTeam);
	console.log(currentOver);
}

export async function getRuns() {
	const html = await getHTML(
		"https://m.cricbuzz.com/cricket-commentary/22410/mi-vs-csk-15th-match-indian-premier-league-2019"
	);
	const runs = await scrapeRuns(html);

	// return runs;
}

getRuns();

//https://nostalgic-fermi-0b26e2.netlify.com/

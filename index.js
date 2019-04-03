import axios from "axios";
import cheerio from "cheerio";

export async function getHTML(url) {
	const { data: html } = await axios.get(url);
	return html;
}

export async function scrapeRuns(html) {
	// load up cheerio
	const $ = cheerio.load(html);
	const span = $('[data-nav="followers"] .ProfileNav-value');
	const scrapedRuns = $(".ui-branding-style-partner")
		.children()
		.children()
		.children()
		.children()[7].children[0].data;
	console.log(scrapedRuns); //string
	return scrapedRuns;
}

export async function getRuns() {
	const html = await getHTML(
		"https://m.cricbuzz.com/cricket-commentary/22410/mi-vs-csk-15th-match-indian-premier-league-2019"
	);
	const runs = await scrapeRuns(html);
	return runs;
}

getRuns();

//https://nostalgic-fermi-0b26e2.netlify.com/

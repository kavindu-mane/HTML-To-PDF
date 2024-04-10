import { Hono } from "hono";
import puppeteer from "puppeteer";
import { cors } from "hono/cors";
import { Html } from "./components";

const app = new Hono();

app.use(
	"*",
	cors({
		origin: ["http://localhost:3000"],
		allowHeaders: ["Content-Type"],
		allowMethods: ["GET", "POST", "PUT", "DELETE"],
		exposeHeaders: ["Content-Length"],
		maxAge: 600,
		credentials: true,
	})
);

const convertToPDF = async (html: string) => {
	const margins = { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" };
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	await page.setContent(html);
	const pdf = await page.pdf({
		format: "A4",
		margin: margins,
		printBackground: true,
	});
	await browser.close();
	return pdf;
};

app.get("/", (c) => {
	return c.text("HTML To PDF is Working!");
});

app.get("/pdf", async (c) => {
	const html = Html().toString();
	const pdf = await convertToPDF(html);
	//@ts-ignore
	return c.text(pdf, { headers: { "Content-Type": "application/pdf" } });
});

export default {
	port: 9000,
	fetch: app.fetch,
};

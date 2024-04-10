import { Hono } from "hono";
import puppeteer from "puppeteer";
import { cors } from "hono/cors";
import { Html } from "./components";
/**
 * @requires
 * If you are run on Bun you need to comment bellow line .
 * If you are run on Nodejs you need to uncomment bellow line.
 */
// import { serve } from "@hono/node-server";

const app = new Hono();

app.use(
	"*",
	cors({
		origin: "*",
		allowHeaders: ["Content-Type"],
		allowMethods: ["GET", "POST", "OPTIONS"],
		exposeHeaders: [""],
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

// post route for your custom html
app.post("/pdf", async (c) => {
	const { html } = await c.req.json();
	// const html = Html().toString();
	const pdf = await convertToPDF(html);
	//@ts-ignore
	return c.text(pdf, { headers: { "Content-Type": "application/pdf" } });
});

// get route for our predefined html
app.get("/pdf", async (c) => {
	const html = Html().toString();
	const pdf = await convertToPDF(html);
	//@ts-ignore
	return c.text(pdf, { headers: { "Content-Type": "application/pdf" } });
});

/**
 * @requires
 * If you are run on Nodejs you need to comment bellow line .
 * If you are run on Bun you need to uncomment bellow line.
 */

export default {
	port: 9000,
	fetch: app.fetch,
};

/**
 * @requires
 * If you are run on Bun you need to comment bellow line .
 * If you are run on Nodejs you need to uncomment bellow line.
 */

// serve({
//   port: 9000,
//   fetch: app.fetch,
// })

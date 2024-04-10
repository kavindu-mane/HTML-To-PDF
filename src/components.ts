import { html } from "hono/html";

export const Html = () => {
	return html`
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0" />
				<title>Default Document | HTML To PDF</title>
				<script src="https://cdn.tailwindcss.com"></script>
				<script>
					tailwind.config = {
						theme: {
							extend: {
								colors: {
									clifford: "#da373d",
								},
							},
						},
					};
				</script>
			</head>
			<body>
				<div class="w-full h-screen flex flex-col justify-center items-center">
					<h1 class="text-5xl mb-5">HTML To PDF</h1>
					<p class="text-lg">This is a default document.</p>
					<a
						href="https://github.com/kavindu-mane"
						class="mt-20 italic text-blue-700"
						>Developed By : Kavindu Manahara</a
					>
					<p class="fixed bottom-5 text-sm italic">Page styled with Tailwind CSS CDN</p>
				</div>
			</body>
		</html>
	`;
};

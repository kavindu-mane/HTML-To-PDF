# HTML-To-PDF

## How to Run

_Migrating Bun to Nodejs_

This project build on bun runtime environment. if you need this project on nodejs , you need migrate to Nodejs.

- Step - 1 : Install required dependency for hono (Backend)

  ```
  make bun-to-node
  ```

- Step - 2 : You need change `index.ts` file in `api/src`. (Follow instructions on that file)

_Setup_

```typescript
// Bun
make setup

// Node js
make setup-node
```

_Start Servers_

```typescript
// Bun
make dev

// Node js
make dev-node
```

Use can serve on `http://localhost:9000`

## Usage

_With fetch_

```typescript
const downloadPDF = async () => {
	const res = await fetch("http://localhost:9000/pdf", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Response-Type": "blob",
		},
		body: JSON.stringify({ html: html }),
	});
	const blob = await res.blob();
	const url = window.URL.createObjectURL(new Blob([blob], { type: "application/pdf" }));
	const link = document.createElement("a");
	link.href = url;
	link.setAttribute("target", "_blank");
	document.body.appendChild(link);
	link.click();
};
```

_With axios_

```typescript
const downloadPDF = async () => {
	await axios
		.post(
			"http://localhost:9000/pdf",
			{ html: html },
			{
				responseType: "blob",
			}
		)
		.then((res) => {
			const url = window.URL.createObjectURL(new Blob([res.data], { type: "application/pdf" }));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("target", "_blank");
			document.body.appendChild(link);
			link.click();
		});
};
```

If You face any colour missing issue in generated pdf, You can use below css code in your style sheet.

```css
html {
	-webkit-print-color-adjust: exact;
}
```

## License

MIT

## Author

[Kavindu Manahara](https://github.com/kavindu-mane)

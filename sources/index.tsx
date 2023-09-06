import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
if (rootElement === null) {
	throw new Error("Failed to get the root element.");
}

const root = createRoot(rootElement);

root.render(<h1>Hello, world</h1>);

import fs from "fs";
import path from "path";

const targetFiles = ["privacy.html", "docs.html"];

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const buildDir = path.resolve(__dirname, "../build");

const indexHtmlPath = path.resolve(buildDir, "index.html");

for (const targetFile of targetFiles) {
	const targetPath = path.resolve(buildDir, targetFile);
	fs.copyFileSync(indexHtmlPath, targetPath);
}

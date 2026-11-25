import { readFile } from "node:fs/promises";

const data = JSON.parse(
  await readFile(new URL("./notes/keynote-highlights.json", import.meta.url), "utf8"),
);

const topics = new Map();
for (const highlight of data.highlights) {
  if (!topics.has(highlight.topic)) {
    topics.set(highlight.topic, []);
  }
  topics.get(highlight.topic).push(highlight.title);
}

for (const [topic, titles] of topics) {
  console.log(topic);
  for (const title of titles) {
    console.log(`- ${title}`);
  }
  console.log();
}

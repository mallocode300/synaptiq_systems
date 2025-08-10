export type MediumItem = {
  title: string;
  link: string;
  pubDate?: string;
};

function textBetween(xml: string, tag: string): string | undefined {
  const re = new RegExp(`<${tag}[^>]*>([\s\S]*?)<\\/${tag}>`, "i");
  const m = xml.match(re);
  return m ? m[1] : undefined;
}

function stripCdata(s: string | undefined): string {
  if (!s) return "";
  return s.replace(/^\s*<!\[CDATA\[/, "").replace(/\]\]>\s*$/, "").trim();
}

export function parseMediumRSS(xml: string, limit = 3): MediumItem[] {
  const items: MediumItem[] = [];
  const itemBlocks = xml.split(/<item>/i).slice(1); // drop header
  for (const blockRaw of itemBlocks) {
    const block = `<item>${blockRaw}`;
    const title = stripCdata(textBetween(block, "title"));
    const link = stripCdata(textBetween(block, "link"));
    const pubDate = textBetween(block, "pubDate");
    if (title && link) items.push({ title, link, pubDate: pubDate || undefined });
    if (items.length >= limit) break;
  }
  return items;
}



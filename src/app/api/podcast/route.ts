import { DOMParser } from "xmldom";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const rssUrl = searchParams.get("rssUrl");
  if (!rssUrl) {
    return Response.json({ error: "RSS URL is required" }, { status: 400 });
  }

  try {
    const response = await fetch(rssUrl);
    const text = await response.text();
    const xml = new DOMParser().parseFromString(text, "text/xml");
    const items = xml.getElementsByTagName("item");

    const podcasts = Array.from(items).map((item: any) => {
      const enclosure = item.getElementsByTagName("enclosure")[0];
      const audioUrl = enclosure ? enclosure.getAttribute("url") : "";

      return {
        title: item?.getElementsByTagName("title")?.[0]?.textContent ?? "",
        description:
          item?.getElementsByTagName("description")?.[0]?.textContent ?? "",
        pubDate: item.getElementsByTagName("pubDate")[0].textContent ?? "",
        audioUrl,
      };
    });

    return Response.json({ podcasts });
  } catch (error) {
    console.error("Ошибка при загрузке RSS:", error);
    return Response.json(
      { error: "Failed to fetch RSS feed" },
      { status: 500 }
    );
  }
}

export interface CommonContextType {
  podcasts: Podcast[];
  setPodcasts: any;
}

export interface Podcast {
  id: string;
  name: string;
  rss_url: string;
}

export interface PodcastRSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  audioUrl: string;
}

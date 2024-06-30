"use client";

import { useContext, useEffect, useState } from "react";

import { PodcastRSSItem } from "@/types";
import { CommonContext } from "@/components/CommonContext/CommonContext";

import styles from "./page.module.css";

export default function Page({ params }: { params: { id: string } }) {
  const { podcasts } = useContext(CommonContext);

  const [podcastsRSS, setPodcastsRSS] = useState<PodcastRSSItem[]>([]);

  useEffect(() => {
    const fetchPodcasts = async (url: string) => {
      try {
        const response = await fetch(
          `/api/podcast?rssUrl=${encodeURIComponent(url)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch podcasts");
        }
        const data = await response.json();

        setPodcastsRSS(data.podcasts);
      } catch (error) {
        console.error("Ошибка при загрузке подкастов:", error);
      }
    };

    const podcast = podcasts.find((podcast) => podcast.id === params.id);

    if (podcast?.rss_url) {
      fetchPodcasts(podcast?.rss_url);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.note}>
      {podcastsRSS
        .slice(-10)
        .reverse()
        .map((podcast, index) => (
          <div key={index} className={styles.podcastItem}>
            <h3>{podcast.title}</h3>
            <p>
              <em>{new Date(podcast.pubDate).toLocaleDateString()}</em>
            </p>
            {/* <p>{podcast.description}</p> */}
            <div className={styles.audio}>
              <audio controls src={podcast.audioUrl} preload="none" />
            </div>
          </div>
        ))}
    </div>
  );
}

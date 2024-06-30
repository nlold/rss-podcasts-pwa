"use client";

import { useCallback, useContext, useState } from "react";

import { CommonContext } from "@/components/CommonContext/CommonContext";
import askPermission from "@/lib/notification/askPermission";
import sendNotification from "@/lib/notification/sendNotification";

export default function Page() {
  const { podcasts, setPodcasts } = useContext(CommonContext);

  const [podcastID, setPodcastID] = useState("");
  const [podcastName, setPodcastName] = useState("");
  const [podcastURL, setPodcastURL] = useState("");

  const handleClickAddPodcast = useCallback(() => {
    setPodcasts([
      ...podcasts,
      {
        id: podcastID,
        name: podcastName,
        rss_url: podcastURL,
      },
    ]);
  }, [podcastID, podcastName, podcastURL, podcasts, setPodcasts]);

  const handleClickAskPermission = useCallback(() => {
    askPermission();
  }, []);

  const handleClicSendNotification = useCallback(() => {
    sendNotification();
  }, []);

  return (
    <div className="note--empty-state">
      <input
        value={podcastURL}
        onChange={(e) => setPodcastURL(e.target.value)}
        placeholder="RSS URL подкаста"
      />
      <input
        value={podcastID}
        onChange={(e) => setPodcastID(e.target.value)}
        placeholder="ID подкаста"
      />
      <input
        value={podcastName}
        onChange={(e) => setPodcastName(e.target.value)}
        placeholder="Название подкаста"
      />
      <button onClick={handleClickAddPodcast}>Добавить подкаст</button>
      <button onClick={handleClickAskPermission}>
        Дать доступ к уведомлениям
      </button>
      <button onClick={handleClicSendNotification}>
        Отправить уведомление
      </button>
    </div>
  );
}

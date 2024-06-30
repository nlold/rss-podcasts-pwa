export default function sendNotification() {
  if ("serviceWorker" in navigator && "PushManager" in window) {
    navigator.serviceWorker.ready.then((registration) => {
      const options = {
        body: "This is a local notification!",
        // icon: "/path/to/icon.png",
        // badge: "/path/to/badge.png",
      };

      registration.showNotification("Local Notification", options);
    });
  }
}

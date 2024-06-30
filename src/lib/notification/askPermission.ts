export default function askPermission() {
  return new Promise((resolve, reject) => {
    const permissionResult = Notification.requestPermission((result) => {
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  }).then((permissionResult) => {
    if (permissionResult !== "granted") {
      throw new Error("Permission not granted.");
    }
  });
}

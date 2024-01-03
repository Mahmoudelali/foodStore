export const sendNotification = async (token, title, message, screen) => {
  try {
    await fetch("https://fcm.googleapis.com/fcm/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `key=${process.env.EXPO_PUBLIC_FCM_KEY}`,
      },
      body: JSON.stringify({
        to: `${token}`,
        priority: "normal",
        data: {
          experienceId: "@mahmoudkh01/my-app",
          scopeKey: "@mahmoudkh01/my-app",
          title: title,
          message: message,
          screen: screen,
        },
      }),
    });
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};

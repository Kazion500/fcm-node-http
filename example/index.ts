import { AxiosError } from "axios";
import { FCM } from "@kazion/fcm-node-http";

const fcm = new FCM("creds.json");

const fcmToken =
  "ee8-TV2BT7ucVYjesxPXdD:APA91bFQvY5sZdn6n1PW3krYuI2ZRqwJxJGxsIdZmhWiJg9xRNeCC8ulgUR_zjqIB4oV5ov-eRjEdczNLccMAlL9V4jgObPLamRo9GyQwtzXOUuyQpnEnyorojRsNpABl16DgmLGkyKW";

const main = async () => {
  try {
    await fcm.send(fcmToken, {
      notification: {
        body: "body",
        title: "title",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
      },
    });
  } catch (error: any) {
    if (error instanceof AxiosError) console.log("error", error.response?.data);
    else console.log("error", error);
  }
};

main();
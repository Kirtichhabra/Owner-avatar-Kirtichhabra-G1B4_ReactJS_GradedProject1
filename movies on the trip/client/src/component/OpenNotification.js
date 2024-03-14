import { notification } from "antd";

export const openNotification = (messages, types) => {
  notification.open({
    message: types,
    type: types,
    duration: 3,
    description: messages,
  });
};
// it creates the dialog box appears on the right side top for example if i am add to favourites a movie then when we clicked on add to favouries it shows added successfully as a mesaage for 3 secs similarly for remove favourites
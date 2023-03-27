import {parseUserData} from "../types/user";
import {proxy} from "valtio";

const userProxy = proxy({
    get user() {
      return parseUserData()
    },
    set user(data: any) {
      userProxy.user = data
    }
  },
  // {
  //     locale: memoize(snap => snap.user?.language?.substring(0, 2) || 'ja')
  // }
);

export {
  userProxy
};

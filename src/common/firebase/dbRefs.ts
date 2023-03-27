import {collection, doc} from "firebase/firestore";
import {db} from "@src/configs/firebase";

const userCollRef = () => {
  return collection(db, 'users')
}

const userDocRef = (userId: string) => {
  return doc(db, `users/${userId}`)
}

export {
  userCollRef,
  userDocRef
}

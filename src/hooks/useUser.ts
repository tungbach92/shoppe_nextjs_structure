import {useAtom} from "jotai";
import {userAtom} from "../store/user.atom";
import {useEffect} from "react";
import {useDocument} from "react-firebase-hooks/firestore";
import {userDocRef} from "@src/common/firebase/dbRefs";


const useUser = () => {
  const [user, setUser] = useAtom(userAtom)
  const userRef = userDocRef("docId") // userDocRef
  const [data, loading, error] = useDocument(userRef)

  useEffect(() => {
    // fetch user data
    if (loading || error || (!data && !loading))
      return;

    setUser({...data?.data(), id: data?.id})

  }, [data, loading, error])

  return {user, setUser}
}

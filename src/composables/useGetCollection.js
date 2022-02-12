import { ref, watchEffect } from "vue";
import { db } from "../firebase/config";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";

const useGetCollection = (collectionName) => {
  const documents = ref(null);
  const error = ref(null);

  // register the firestore collection reference
  // const colRef = collection(db, collectionName);
  let collectionRef = query(
    collection(db, collectionName),
    orderBy("createdAt")
  );
  // const query = query(collectionRef, orderBy("createdAt"));

  const unsub = collectionRef.onSnapshot(
    (collectionRef, snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        // must wait for the server to create the timestamp & send it back
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      // update values
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "could not fetch data";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return {
    documents,
    error,
  };
};

export default useGetCollection;

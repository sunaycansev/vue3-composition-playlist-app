import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const useAddDoc = (collectionName) => {
  const error = ref(null);
  const isPending = ref(false);

  // add new document

  const addDoc = async (doc) => {
    error.value = null;
    isPending.value = true;

    const colRef = collection(db, collectionName);
    try {
      await addDoc(colRef, doc);
      isPending.value = false;
    } catch (e) {
      console.log(e.message);
      error.value = e.message;
      isPending.value = false;
    }
  };

  return { error, addDoc, isPending };
};

export default useAddDoc;

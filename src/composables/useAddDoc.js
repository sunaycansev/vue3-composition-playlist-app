import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const useAddDoc = (collectionName) => {
  const error = ref(null);

  // add new document

  const addDoc = async (doc) => {
    error.value = null;
    const colRef = collection(db, collectionName);
    try {
      await addDoc(colRef, doc);
    } catch (e) {
      console.log(e.message);
      error.value = e.message;
    }
  };

  return { error, addDoc };
};

export default useAddDoc;

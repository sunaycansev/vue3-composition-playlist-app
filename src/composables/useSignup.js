import { ref } from "vue";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// refs
const error = ref(null);
const isPending = ref(false);

const signUp = async (email, password, displayName) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete signup!");
    }
    await updateProfile(auth.currentUser, { displayName });
    error.value = null;
    isPending.value = false;
    return res;
  } catch (e) {
    console.log(e.message);
    error.value = e.message;
    isPending.value = false;
  }
};

const useSignup = () => {
  return { error, signUp, isPending };
};

export default useSignup;

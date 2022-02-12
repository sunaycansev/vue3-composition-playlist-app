import { ref } from "vue";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// refs
const error = ref(null);

const signUp = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete signup!");
    }
    await res.user.updateProfile({ displayName });
    error.value = null;
    return res;
  } catch (e) {
    console.log(e.message);
    error.value = e.message;
  }
};

const useSignup = () => {
  return { error, signUp };
};

export default useSignup;

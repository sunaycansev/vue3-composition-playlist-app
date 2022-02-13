import { ref } from "vue";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

// refs
const error = ref(null);
const isPending = ref(false);

// logout function
const logout = async () => {
  error.value = null;
  isPending.value = true;

  try {
    await signOut(auth);
    isPending.value = false;
  } catch (e) {
    console.log(e.message);
    error.value = e.message;
    isPending.value = false;
  }
};

const useLogout = () => {
  return {
    error,
    logout,
    isPending,
  };
};

export default useLogout;

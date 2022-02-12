import { ref } from "vue";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

// refs
const error = ref(null);

// logout function
const logout = async () => {
  error.value = null;

  try {
    await signOut(auth);
  } catch (e) {
    console.log(e.message);
    error.value = e.message;
  }
};

const useLogout = () => {
  return {
    error,
    logout,
  };
};

export default useLogout;

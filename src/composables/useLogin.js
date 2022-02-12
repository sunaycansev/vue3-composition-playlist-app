import { ref } from "vue";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    error.value = null;
    return res;
  } catch (e) {
    console.log(e.message);
    error.value = "Incorrect login credintials";
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;

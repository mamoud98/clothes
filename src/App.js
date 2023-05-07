import { useEffect } from "react";
import Navigation from "./routes/navigation/navigation.component";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.reducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      dispatch(setCurrentUser(pickedUser));
    });
    return unsubscribe;
  }, [dispatch]);

  return <Navigation />;
};

export default App;

import { useEffect } from "react";
import Navigation from "./routes/navigation/navigation.component";

import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return <Navigation />;
};

export default App;

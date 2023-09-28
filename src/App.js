import { Routes, Route} from "react-router-dom";

import { UserProvider } from "./context/UserContext";
import Home from "./components/Home";
import Archive from "./pages/Archive";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Page404 from "./pages/Page404";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import HomeLayout from "./components/HomeLayout";

function App() {

  return (
      <div className="min-w-full min-h-screen flex flex-col items-center justify-center m-0 p-0">

        <UserProvider>
          <Routes>
              <Route exact path="/" element={<HomeLayout />} >
                <Route exact index={true} element={<Home />} />
                <Route exact path="archive" element={<Archive />} />
                <Route exact path="explore" element={<Explore />} />
                <Route exact path="profile/*" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route exact path="settings" element={<Settings />} />
              </Route>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="*" element={<Page404 />} />
          </Routes>
        </UserProvider>
      </div>
  );
}

export default App;
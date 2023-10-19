import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainMessagingBox from "./components/MainMessagingBox";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route
          path="/Lobby"
          element={
            <ProtectedRoute>
              <MainMessagingBox />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

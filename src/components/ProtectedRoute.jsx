import { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import { supabase } from "../Data/supabaseClient";

function ProtectedRoute({ children }) {
  const [currUser, setCurrUser] = useState();

  const navigate = useNavigate();

  useEffect(function () {
    async function getCurrUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setCurrUser(user);
    }
    getCurrUser();
  }, []);

  console.log(currUser);

  return currUser ? children : null;
}

export default ProtectedRoute;

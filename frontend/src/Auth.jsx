import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("PMSToken")) {
      navigate("/login");
    } else if (localStorage.getItem("PMSToken")) {
      navigate("/dashboard");
    }
  });
  return null;
};

export default Auth;

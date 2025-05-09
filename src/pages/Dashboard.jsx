import React, { useEffect, useState } from "react";
import { healthCheck } from "../services/api";

const Dashboard = () => {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    healthCheck()
      .then(() => setStatus("Backend is running"))
      .catch(() => setStatus("Backend is down"));
  }, []);

  return (
    <div>
      <h1>仪表盘</h1>
      <p>后端状态: {status}</p>
    </div>
  );
};

export default Dashboard;
import React, { useState } from "react";
import { deploy } from "../services/api";

const Deployments = () => {
  const [formData, setFormData] = useState({
    project: "",
    environment: "",
    image: "",
    cluster: "",
    namespace: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deploy(formData)
      .then(() => alert("部署成功！"))
      .catch(() => alert("部署失败，请检查日志！"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="project"
        placeholder="项目名称"
        value={formData.project}
        onChange={handleChange}
      />
      <input
        type="text"
        name="environment"
        placeholder="环境"
        value={formData.environment}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="镜像"
        value={formData.image}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cluster"
        placeholder="集群"
        value={formData.cluster}
        onChange={handleChange}
      />
      <input
        type="text"
        name="namespace"
        placeholder="命名空间"
        value={formData.namespace}
        onChange={handleChange}
      />
      <button type="submit">触发部署</button>
    </form>
  );
};

export default Deployments;
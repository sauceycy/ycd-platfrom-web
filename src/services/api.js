import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // 从环境变量读取后端地址
  timeout: 10000,
});

// 健康检查
export const healthCheck = () => apiClient.get("/health");

// 项目相关 API
export const getProjects = () => apiClient.get("/projects");
export const getEnvironments = (projectName) =>
  apiClient.get(`/projects/environments`, { params: { project: projectName } });

// 镜像相关 API
export const getImages = (projectName) =>
  apiClient.get(`/images`, { params: { project: projectName } });

// Kubernetes 集群相关 API
export const getClusters = () => apiClient.get("/k8s/clusters");
export const getNamespaces = (clusterName) =>
  apiClient.get(`/k8s/namespaces`, { params: { cluster: clusterName } });

// 部署相关 API
export const deploy = (payload) => apiClient.post("/deploy", payload);
export const getDeploymentStatus = (params) =>
  apiClient.get(`/deploy/status`, { params });

// 配置相关 API
export const getConfig = () => apiClient.get("/config");
export const updateProjectConfig = (project) =>
  apiClient.put("/config/project", project);
export const addProjectConfig = (project) =>
  apiClient.post("/config/project", project);
export const deleteProjectConfig = (projectName) =>
  apiClient.delete(`/config/project`, { params: { name: projectName } });
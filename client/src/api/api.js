import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

// eslint-disable-next-line
export default {
  service: service,

  async getProducts() {
    const resp = await service.get("/ebay");
    const data = await resp.data;
    return data;
  },
};

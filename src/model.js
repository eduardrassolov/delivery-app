import Axios from "axios";
import { API_URL, QUERY_ADD_ORDER } from "./config.js";

class DeliveryModel {
  //TODO: refactor 2 functions below to one
  async fetchData(query, type = "get") {
    try {
      const result = await Axios[type](`${API_URL}${query}`);
      return result;
    } catch (err) {
      throw err;
    }
  }
  async sendOrderToServer(order) {
    try {
      const result = await Axios.post(`${API_URL}${QUERY_ADD_ORDER}`, order);
      return result;
    } catch (err) {
      throw err;
    }
  }
  async searchBy(query) {}
}
export const model = new DeliveryModel();

import axios from "axios";
import { SubsctiptionType } from "../models/subscriptionsTypes";

export const saveSubscriptions = (payload: SubsctiptionType) => {
  return axios.post(`http://localhost:3000/subscriptions`, payload);
};

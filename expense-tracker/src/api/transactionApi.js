import apiHelper from "./apiHelper";

export const getTransactions = () => {
  return apiHelper.get("/transactions");
};

export const addTransaction = (data) => {
  return apiHelper.post("/transactions", data);
};
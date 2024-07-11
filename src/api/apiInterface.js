import apiService from "./apiService";

export const getUserDetail = async (loginData) => {
  try {
    const response = await apiService("get-user-detail", "POST", loginData);
    return response;
  } catch (error) {}
};

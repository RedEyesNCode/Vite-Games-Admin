import apiService from "./apiService";

export const getAllUsers = async () => {
  try {
    const response = await apiService("get-all-user", "GET", );
    return response;
  } catch (error) {}
};

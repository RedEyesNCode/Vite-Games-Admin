import apiService from "./apiService";

export const getAllUsers = async () => {
  try {
    const response = await apiService("get-all-user", "GET", );
    return response;
  } catch (error) {}
};
export const updateUser = async (data) => {
  try {
    const response = await apiService("update-user", "POST",data);
    return response;
  } catch (error) {}
};

export const deleteUser = async (data) => {
  try {
    const response = await apiService("delete-user", "POST", data);
    return response;
  } catch (error) {}
};
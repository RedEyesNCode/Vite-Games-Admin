import apiService from "./apiService";

export const getAllUsers = async () => {
  try {
    const response = await apiService("get-all-user", "GET", );
    return response;
  } catch (error) {}
};


export const registerNewUser = async (data) => {

 try {
   const response = await apiService("register-user", "POST",data);
   return response;
 } catch (error) {}

}


export const updateUser = async (data) => {
  try {
    const response = await apiService("update-user", "POST",data);
    return response;
  } catch (error) {}
};

export const getAllWithdrawRequests = async () => {
   try {
     const response = await apiService(
       "red3577-UPI/get-all-withdrawals",
       "GET",
       
     );
     return response;
   } catch (error) {
    console.log(error);

   }
}




export const deleteUser = async (data) => {
  try {
    const response = await apiService("delete-user", "POST", data);
    return response;
  } catch (error) {}
};


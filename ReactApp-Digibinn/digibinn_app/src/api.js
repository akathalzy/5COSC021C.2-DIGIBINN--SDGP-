import axios from "axios";

const apiUrl = "https://ap-south-1.aws.data.mongodb-api.com/app/data-vhqcy/endpoint/data/v1"; // Replace with your API endpoint URL

const registerUser = (userData) => {
  return axios.post(apiUrl, userData);
};

export default registerUser;
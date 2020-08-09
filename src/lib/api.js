import axios from "axios";

const apiURL = "http://127.0.0.1:5000/";

export const getAllStudents = () => {
  return axios
    .get(apiURL + "students")
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

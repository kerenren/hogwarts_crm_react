import axios from "axios";

const baseURL = "http://127.0.0.1:5000/";

export const getAllStudents = () => {
  return axios
    .get(baseURL + "students")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editStudent = (student) => {
  return axios
    .put(baseURL + "/admin/edit_student", student)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

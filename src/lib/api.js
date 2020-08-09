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
// todo: replace the hardcoded email to authtoken/email from admin.json in data
export const addStudent = (student) => {
  return axios
    .post(baseURL + "/admin/add_student", student, {
      headers: {
        Authorization: "prof.mcgonagall@hogwartsedu.com:123456",
      },
    })
    .then((response) => console.log(response))
    .catch((err) => {
      console.log(err);
    });
};

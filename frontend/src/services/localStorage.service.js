const USER = "USER";
const EMPLOYEE = "EMPLOYEE";
const DEPARMENT = "DEPARMENT";
const POSITION = "POSITION";
const SALARY = "SALARY";

export const localStorageServ = {
  user: {
    set: function (dataUser) {
      let dataJson = JSON.stringify(dataUser);
      localStorage.setItem(USER, dataJson);
    },
    get: function () {
      let dataJson = localStorage.getItem(USER);
      if (!dataJson) {
        return null;
      } else {
        return JSON.parse(dataJson);
      }
    },

    remove: function () {
      localStorage.removeItem(USER);
    },
  },
  employee: {
    set: function (dataUser) {
      let dataJson = JSON.stringify(dataUser);
      localStorage.setItem(EMPLOYEE, dataJson);
    },
    get: function () {
      let dataJson = localStorage.getItem(EMPLOYEE);
      if (!dataJson) {
        return null;
      } else {
        return JSON.parse(dataJson);
      }
    },

    remove: function () {
      localStorage.removeItem(EMPLOYEE);
    },
  },
  deparment: {
    set: function (dataUser) {
      let dataJson = JSON.stringify(dataUser);
      localStorage.setItem(DEPARMENT, dataJson);
    },
    get: function () {
      let dataJson = localStorage.getItem(DEPARMENT);
      if (!dataJson) {
        return null;
      } else {
        return JSON.parse(dataJson);
      }
    },

    remove: function () {
      localStorage.removeItem(DEPARMENT);
    },
  },
  position: {
    set: function (dataUser) {
      let dataJson = JSON.stringify(dataUser);
      localStorage.setItem(POSITION, dataJson);
    },
    get: function () {
      let dataJson = localStorage.getItem(POSITION);
      if (!dataJson) {
        return null;
      } else {
        return JSON.parse(dataJson);
      }
    },

    remove: function () {
      localStorage.removeItem(POSITION);
    },
  },
  salary: {
    set: function (dataUser) {
      let dataJson = JSON.stringify(dataUser);
      localStorage.setItem(SALARY, dataJson);
    },
    get: function () {
      let dataJson = localStorage.getItem(SALARY);
      if (!dataJson) {
        return null;
      } else {
        return JSON.parse(dataJson);
      }
    },

    remove: function () {
      localStorage.removeItem(SALARY);
    },
  },
};

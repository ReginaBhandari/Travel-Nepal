// console.log(process.env);

const config = {
  apiUrl: process.env.REACT_APP_API_URL,

  endpoints: {
    destinations: "destinations",
    destination: "destinations/:id",
    login: "login",
    profile: "profile",
    register: "register",
    users: "users",
    bookings: "bookings",
    userbooking: "userbooking",
  },
};

export default config;

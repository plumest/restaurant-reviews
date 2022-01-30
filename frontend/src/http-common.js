import axios from "axios";

export default axios.create({
  baseURL:
    "https://ap-southeast-1.aws.data.mongodb-api.com/app/restaurant-reviews-mnirm/endpoint/",
  headers: {
    "Content-type": "application/json",
  },
});

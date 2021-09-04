import mocky from "mocky";
import Api from "./api/api.js";

mocky.createServer([Api.getUser, Api.getUsers]).listen(4321);

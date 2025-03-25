import axios from "axios";

const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientID = "b7ab0f24012b4463b8a1982466f82246";
const redirectURL = "http://localhost:3000/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndPoint = `${authEndPoint}client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = () => {
  const token =
    localStorage.getItem("spotifyToken") ||
    new URLSearchParams(window.location.hash).get("access_token");

  if (token) {
    localStorage.setItem("spotifyToken", token);
    apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
  } else {
    console.error("No token found! Please log in.");
  }
};

export default apiClient;

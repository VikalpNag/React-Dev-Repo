const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientID = "b7ab0f24012b4463b8a1982466f82246";
const redirectURL = "http://localhost:3000/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndPoint = `${authEndPoint}client_id=${clientID}&redirect_url=${redirectURL}&scope=${scopes.join(
  "%20"
)}&responsea-type=token&showz_dialog=true`;

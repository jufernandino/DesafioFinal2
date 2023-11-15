import axios from "axios";

const spotify_api= axios.create({
    baseURL: "https://api.spotify.com",
});

export default spotify_api
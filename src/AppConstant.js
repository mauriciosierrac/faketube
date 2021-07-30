export const API_BASE = `https://youtube.googleapis.com/youtube/v3/`
export const SEARCH_URL = `${API_BASE}search?type=video&part=snippet&maxResult=25&key=${process.env.API_KEY}`
export const VIDEO_URL = `${API_BASE}videos?part=snippet,statistics,status,player&key=${process.env.API_KEY}`
import axios from 'axios'

const key = '2971a7fe30f9496ebd2f12106eb57ad0'
const axiosCreate = axios.create({
  baseURL: 'https://api.rawg.io/api',
})

const getGenreList = axiosCreate.get('/genres?key=' + key)
const getAllGames = axiosCreate.get('/games?key=' + key)
const getGameListByGenreId = (id) =>
  axiosCreate.get('/games?key=' + key + '&genres=' + id)

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
}

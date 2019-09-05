export default {
  async login(user) {
    const params = {
      headers: 'token',
      params: user,
    },
    const result = await axios.post('/api/login',params)
    return result
  }
}
export default {
  async getGoodsInfo() {
    const res = await axios.get('/api/goods')
    return {slider, keys, goodsInfo} = res.data
  }
}
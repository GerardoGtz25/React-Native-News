const BASE_API = 'http://newsapi.org/v2/';
const KEY = '4e077793c09149be8630cb9b013a0983';

class Api {

  async getByCategories(categorie){
    const query = await fetch(`${BASE_API}top-headlines?country=fr&category=${categorie}&apiKey=${KEY}`);
    const data = await query.json();
    return data.articles;
  }

  async getByNewsByTopic(word){
    const query = await fetch(`${BASE_API}everything?q=${word}&apiKey=${KEY}`);
    const data = await query.json();
    return data.articles;
  }

}



export default new Api();

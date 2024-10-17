const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0ed2b5b24emsheff02b929da80afp184150jsn9373787a4623',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};
  
  export default class API {
    async getPopular() {
      const data1 = await this.searchMusic("jlo");
      const data2 = await this.searchMusic("justin bieber");
      const data3 = await this.searchMusic("beyonce");
      const data4 = await this.searchMusic("luke bryan");
      const data5 = await this.searchMusic("selena gomez");
      const data6 = await this.searchMusic("the weeknd");
      const data7 = await this.searchMusic("lady gaga");
      const data8 = await this.searchMusic("shawn mendes");


      return [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7, ...data8 ];

    }
  
    async searchMusic(query) {
      const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=en-US&offset=0&limit=2`;
  
      const res = await fetch(url, options);
      const data = await res.json();
  
      const formatted = data.tracks.hits.map((item) => item.track);
  
      return formatted;
    }
  }
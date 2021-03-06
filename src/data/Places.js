import MapConfig from "./MapConfig";

let APIKEY = MapConfig.KEY;

const Places = {
  List: async function (coordenates, placetype, radius=5000) {
        let url = `
          https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordenates.lat},${coordenates.lng}&radius=${radius}&types=${placetype}&sensor=true&key=${APIKEY}
        `;
    let response = await fetch(url);
    return await response.json();
  },

  Detail: function (place_id) {
    let result = null,
        url = `
      https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=photo,formatted_phone_number,international_phone_number,opening_hours,website,price_level,rating,review,user_ratings_total&key=${APIKEY}
    `;

    fetch(url)
      .then(data => data.json())
      .then(res => result = res)
      .catch(err => console.error(err));

    return result;
  }
};

export default Places;

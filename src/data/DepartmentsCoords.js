const DepartmentsCoords = [
  {
    name: 'CURRENT',
    get coords () {
      navigator.geolocation.getCurrentPosition((position) => {
        return {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      }, (error) => {
        console.error('Error on get current position', error);
      }, {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      });

      return {
        lat: 12.5,
        lng: -85.17336
      }
    }
  },

  {
    name: 'Boaco',
    coords: {
      lat: 12.455686,
      lng: -85.588989
    }
  },

  {
    name: 'Carazo',
    coords: {
      lat: 11.770276,
      lng: -86.237869
    }
  },

  {
    name: 'Chinandega',
    coords: {
      lat: 12.841595,
      lng: -87.039185
    }
  },

  {
    name: 'Chontales',
    coords: {
      lat: 12.079946,
      lng: -85.127563
    }
  },

  {
    name: 'Estelí',
    coords: {
      lat: 13.205521,
      lng: -86.423950
    }
  },

  {
    name: 'Granada',
    coords: {
      lat: 11.909766,
      lng: -85.991364
    }
  },

  {
    name: 'Jinotega',
    coords: {
      lat: 13.761062,
      lng: -85.567017
    }
  },

  {
    name: 'León',
    coords: {
      lat: 12.584387,
      lng: -86.599731
    }
  },

  {
    name: 'Madriz',
    coords: {
      lat: 13.487876,
      lng: -86.419830
    }
  },

  {
    name: 'Managua',
    coords: {
      lat: 12.198093,
      lng: -86.314087
    }
  },

  {
    name: 'Masaya',
    coords: {
      lat: 11.971864,
      lng: -86.114273
    }
  },

  {
    name: 'Matagalpa',
    coords: {
      lat: 12.927272,
      lng: -85.654907
    }
  },

  {
    name: 'Nueva Segovia',
    coords: {
      lat: 13.730797,
      lng: -86.211090
    }
  },

  {
    name: 'Río San Juan',
    coords: {
      lat: 11.176044,
      lng: -84.468384
    }
  },

  {
    name: 'Rivas',
    coords: {
      lat: 11.358286,
      lng: -85.859528
    }
  },

  {
    name: 'RAAN',
    coords: {
      lat: 13.910407,
      lng: -84.193726
    }
  },

  {
    name: 'RAAS',
    coords: {
      lat: 12.273251,
      lng: -84.204712
    }
  }
];

export default DepartmentsCoords;

var data = {
  "releases": [
    {
      "id": 1,
      "date": "September 27, 2019",
      "title": "Mind",
      "artist": "Knarkerz",
      "cover": "http://localhost/reactlabel/src/img/mind_cover.jpg",
      "sc_link": 'https://soundcloud.com/knarkerz/mind'
    },
    {
      "id": 2,
      "date": "November 2, 2019",
      "title": "Adam",
      "artist": "Knarkerz",
      "cover": "http://localhost/reactlabel/src/img/adam_cover.jpg",
      "sc_link": 'https://soundcloud.com/knarkerz/adam'
    },
    {
      "id": 3,
      "date": "March 13, 2020",
      "title": "Green Light",
      "artist": "Knarkerz",
      "cover": "http://localhost/reactlabel/src/img/greenlight_cover.jpg",
      "sc_link": "https://soundcloud.com/knarkerz/green-light"
    },
    {
      "id": 4,
      "date": "January 21, 2021",
      "title": "Feel Good (but actually not)",
      "artist": "Knarkerz",
      "cover": "http://localhost/reactlabel/src/img/feelgood_cover.jpg",
      "sc_link": "https://soundcloud.com/knarkerz/feel-good-but-actually-not"
    },
  ],
  "artists": [
    {
      "id": 1,
      "name": "Knarkerz",
      "location": "Skövde, Sweden",
      "desc": "Knarkerz is a duo formed in 2019 which produces hits containing messages to society",
      "img" : "http://localhost/reactlabel/src/img/knarkerz_cover.jpg"
    },
    {
      "id": 2,
      "name": "Wontoz",
      "location": "Töreboda, Sweden",
      "desc": "Wontoz",
      "img": "http://localhost/reactlabel/src/img/wontoz_cover.png"
    },
    {
      "id": 3,
      "name": "Black Forest Revolution",
      "location": "Kållered, Sweden",
      "desc": "Black Forest Revolution",
      "img": "http://localhost/reactlabel/src/img/bfr_cover.jpg"
    }
  ]
}

localStorage.setItem("release_data", JSON.stringify(data));
export default data;
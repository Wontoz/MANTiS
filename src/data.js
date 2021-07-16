var data = {
  "releases": [
    {
      "id": 1,
      "date": "September 27, 2019",
      "title": "Mind",
      "artist": "Knarkerz",
      "cover": "http://localhost/reactlabel/src/img/defaultCover.png",
      "sc_link": 'https://soundcloud.com/knarkerz/mind'
    },
    {
      "id": 2,
      "date": "November 2, 2019",
      "title": "Adam",
      "artist": "Knarkerz",
      "cover": "http://localhost/reactlabel/src/img/defaultCover.png",
      "sc_link": 'https://soundcloud.com/knarkerz/adam'
    },
    {
      "id": 3,
      "date": "March 13, 2020",
      "title": "Green Light",
      "artist": "Knarkerz",
      "cover": "http://localhost/reactlabel/src/img/defaultCover.png",
      "sc_link": "https://soundcloud.com/knarkerz/green-light"
    },
    {
      "id": 4,
      "date": "January 21, 2021",
      "title": "Feel Good (but actually not)",
      "artist": "Knarkerz",
      "cover": "http://localhost/reactlabel/src/img/defaultCover.png",
      "sc_link": "https://soundcloud.com/knarkerz/feel-good-but-actually-not"
    },
  ]
}

localStorage.setItem("release_data", JSON.stringify(data));
export default data;
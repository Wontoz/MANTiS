var data = {
  "releases": [
    {
      "id": 1,
      "date": "September 27, 2019",
      "title": "Mind",
      "artist": "Knarkerz",
      "cover": "file:///E:/Program/WAMP/apache2/htdocs/reactlabel/src/img/defaultCover.png"
    },
    {
      "id": 2,
      "date": "November 2, 2019",
      "title": "Adam",
      "artist": "Knarkerz",
      "cover": "file:///E:/Program/WAMP/apache2/htdocs/reactlabel/src/img/defaultCover.png"
    },
    {
      "id": 3,
      "date": "March 13, 2020",
      "title": "Green Light",
      "artist": "Knarkerz",
      "cover": "file:///E:/Program/WAMP/apache2/htdocs/reactlabel/src/img/defaultCover.png"
    },
    {
      "id": 4,
      "date": "January 21, 2021",
      "title": "Feel Good (But not good)",
      "artist": "Knarkerz",
      "cover": "file:///E:/Program/WAMP/apache2/htdocs/reactlabel/src/img/defaultCover.png"
    }
  ]
}

localStorage.setItem("release_data", JSON.stringify(data));
export default data;
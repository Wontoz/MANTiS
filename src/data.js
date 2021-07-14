var data = {
  "releases": [
    {
      "id": 1,
      "title": "Mind",
      "artist": "Knarkerz",
      "cover": "file:///E:/Program/WAMP/apache2/htdocs/reactlabel/src/img/defaultCover.png"
    },
    {
      "id": 2,
      "title": "Adam",
      "artist": "Knarkerz",
      "cover": "file:///E:/Program/WAMP/apache2/htdocs/reactlabel/src/img/defaultCover.png"
    },
    {
      "id": 3,
      "title": "Green Light",
      "artist": "Knarkerz",
      "cover": "file:///E:/Program/WAMP/apache2/htdocs/reactlabel/src/img/defaultCover.png"
    },
    {
      "id": 4,
      "title": "Feel Good (But not good)",
      "artist": "Knarkerz",
      "cover": "file:///E:/Program/WAMP/apache2/htdocs/reactlabel/src/img/defaultCover.png"
    }
  ]
}

localStorage.setItem("release_data", JSON.stringify(data));
export default data;
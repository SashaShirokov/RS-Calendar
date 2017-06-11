let $ = require('jquery');
import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyC9wkgcyO7xzJLzJEq3qopD7CvLMT1wNaY",
    authDomain: "rs-calendar-b1241.firebaseapp.com",
    databaseURL: "https://rs-calendar-b1241.firebaseio.com",
    projectId: "rs-calendar-b1241",
    storageBucket: "rs-calendar-b1241.appspot.com",
    messagingSenderId: "901142980086"
};

firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();
firebaseRef.set({
  videos: {
    '0':{
      text: 'RS School 2017Q1 Playlist',
      hidden: true,
      url: "https://www.youtube.com/watch?v=3sE1OxDx00o&list=PLe--kalBDwjgwrEDcOKXba_v6ciHoq_8H"
    },
    '1':{
      text: 'RS School 2017Q3 Playlist',
      hidden: true,
      url: "https://www.youtube.com/watch?list=PLe--kalBDwjiXq7_8kUgcMmZJpix9ITkK&v=axJfr0sI88w"
    }
  }
}).then(() => {
  console.log('Set worked');
}, (e) => {
  console.log('Set failde');
})

firebaseRef.once('value').then((snapshot) => {
  console.log('Got entire database', snapshot.val());
}, (e) => {
  console.log('Unable to fetch value', e)
})

module.exports = {
    setVideos: function(videos) {
        if ($.isArray(videos)) {
          localStorage.setItem('videos', JSON.stringify(videos));
          return videos;
        }
    },

    setLectures: function(lectures) {
        if ($.isArray(lectures)) {
          localStorage.setItem('lectures', JSON.stringify(lectures));
          return lectures;
        }
    },

    setStyleguides: function(styleguides) {
        if ($.isArray(styleguides)) {
          localStorage.setItem('styleguides', JSON.stringify(styleguides));
          return styleguides;
        }
    },

    getVideos: function() {
        let videos = [
          {
            id: 0,
            text: 'RS School 2017Q1 Playlist',
            hidden: true,
            url: "https://www.youtube.com/watch?v=3sE1OxDx00o&list=PLe--kalBDwjgwrEDcOKXba_v6ciHoq_8H"
          }, {
            id: 1,
            text: 'RS School 2017Q3 Playlist',
            hidden: true,
            url: "https://www.youtube.com/watch?list=PLe--kalBDwjiXq7_8kUgcMmZJpix9ITkK&v=axJfr0sI88w"
          }
        ];

        return videos;
    },

    getLectures: function() {
        let lectures = [
          {
            id: 0,
            text: 'Inheritance in JavaScript',
            hidden: true,
            url: "https://github.com/rolling-scopes/front-end-course/wiki/Lecture:-Inheritance-in-JavaScript"
          }, {
            id: 1,
            text: 'Functions. Part 1',
            hidden: true,
            url: "https://github.com/rolling-scopes/front-end-course/wiki/Lecture:-Functions-is-JavaScript"
          }, {
            id: 2,
            text: 'Array.prototype.*',
            hidden: true,
            url: "https://github.com/rolling-scopes/front-end-course/wiki/Lecture:-Array.prototype.*"
          }
        ];

        return lectures;
    },

    getStylegides: function() {
        let styleguides = [
          {
            id: 0,
            text: 'Html coding styleguide',
            hidden: true,
            url: "http://html-academy.ru/codeguide/"
          }, {
            id: 1,
            text: 'Airbnb JavaScript Style Guide',
            hidden: true,
            url: "https://github.com/airbnb/javascript"
          }
        ];

        return styleguides;
    },
}

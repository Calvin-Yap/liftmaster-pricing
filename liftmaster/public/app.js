
    const config = {
        apiKey: "AIzaSyCiA3baPou7irYi248UbTw5spkif3gSiFs",
        authDomain: "liftmaster-3d0d7.firebaseapp.com",
        databaseURL: "https://liftmaster-3d0d7.firebaseio.com",
        projectId: "liftmaster-3d0d7",
        storageBucket: "liftmaster-3d0d7.appspot.com",
        messagingSenderId: "566258234825",
        appId: "1:566258234825:web:f0220d0dcc4815b0796418",
        measurementId: "G-XEM24L6NS9"
      };

    firebase.initializeApp(config);
    'use strict';
    var app =angular.module('app', ['ngRoute','firebase']);
    app.controller('MyCtrl', function(){
        const rootRef = firebase.database().ref().child('angular');
        const ref = rootRef.child('object');
        this.object = $firebaseObject(ref);

    });

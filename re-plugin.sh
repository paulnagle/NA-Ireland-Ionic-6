#!/bin/bash

rm -rf www

ionic cordova platform rm ios
ionic cordova platform rm android

ionic cordova plugin rm cordova-plugin-inappbrowser
ionic cordova plugin rm cordova-plugin-insomnia
ionic cordova plugin rm cordova-plugin-splashscreen
ionic cordova plugin rm cordova-plugin-statusbar
ionic cordova plugin rm cordova-plugin-whitelist
ionic cordova plugin rm cordova-plugin-googlemaps

rm -rf platform/*

ionic cordova platform add ios
ionic cordova platform add android
ionic cordova platform add browser

ionic cordova plugin add cordova-plugin-inappbrowser
ionic cordova plugin add cordova-plugin-insomnia
ionic cordova plugin add cordova-plugin-splashscreen
ionic cordova plugin add cordova-plugin-statusbar
ionic cordova plugin add cordova-plugin-whitelist
ionic cordova plugin add cordova-plugin-googlemaps@latest

ionic cordova prepare ios --prod
ionic cordova prepare android --prod
ionic cordova prepare browser --prod

#ionic cordova resources ios
#ionic cordova resources android

#ionic build --prod  --minifyjs   --minifycss  --optimizejs

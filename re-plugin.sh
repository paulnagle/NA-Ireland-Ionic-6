#!/bin/bash

rm -rf www

ionic cordova platform rm ios
ionic cordova platform rm android
ionic cordova platform rm browser

ionic cordova plugin rm cordova-plugin-inappbrowser
ionic cordova plugin rm cordova-plugin-splashscreen
ionic cordova plugin rm cordova-plugin-statusbar
ionic cordova plugin rm cordova-plugin-whitelist
ionic cordova plugin rm cordova-plugin-googlemaps
ionic cordova plugin rm cordova-plugin-advanced-http
ionic cordova plugin rm com-badrit-base64

rm -rf platform/*

ionic cordova platform add ios@latest
ionic cordova platform add android@latest
ionic cordova platform add browser@latest

ionic cordova plugin add cordova-plugin-inappbrowser
ionic cordova plugin add cordova-plugin-splashscreen
ionic cordova plugin add cordova-plugin-statusbar
ionic cordova plugin add cordova-plugin-whitelist
ionic cordova plugin add cordova-plugin-googlemaps
# ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps.git#multiple_maps --variable API_KEY_FOR_ANDROID="AIzaSyAtwUjsIB14f0aHgdLk_JYnUrI0jvczMXw" --variable API_KEY_FOR_IOS="AIzaSyA7ddO5YUH8xukCrGiabEjZdPmm3HmPG-0"
ionic cordova plugin add cordova-plugin-advanced-http
ionic cordova plugin add com-badrit-base64

ionic cordova prepare ios --prod
ionic cordova prepare android --prod
ionic cordova prepare browser --prod

#ionic cordova resources ios
#ionic cordova resources android

#ionic build --prod  --minifyjs   --minifycss  --optimizejs


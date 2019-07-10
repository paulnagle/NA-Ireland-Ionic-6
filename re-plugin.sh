#!/bin/bash

rm -rf www

ionic cordova platform rm ios
ionic cordova platform rm android
ionic cordova platform rm browser

ionic cordova plugin rm cordova-plugin-inappbrowser
ionic cordova plugin rm cordova-plugin-insomnia
ionic cordova plugin rm cordova-plugin-splashscreen
ionic cordova plugin rm cordova-plugin-statusbar
ionic cordova plugin rm cordova-plugin-whitelist
ionic cordova plugin rm cordova-plugin-googlemaps

rm -rf platform/*

ionic cordova platform add ios@latest
ionic cordova platform add android@latest
ionic cordova platform add browser@latest

ionic cordova plugin add cordova-plugin-inappbrowser
ionic cordova plugin add cordova-plugin-insomnia
ionic cordova plugin add cordova-plugin-splashscreen
ionic cordova plugin add cordova-plugin-statusbar
ionic cordova plugin add cordova-plugin-whitelist
ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps.git#multiple_maps --variable API_KEY_FOR_ANDROID="AIzaSyAtwUjsIB14f0aHgdLk_JYnUrI0jvczMXw" --variable API_KEY_FOR_IOS="AIzaSyAtwUjsIB14f0aHgdLk_JYnUrI0jvczMXw"


ionic cordova prepare ios --prod
ionic cordova prepare android --prod
ionic cordova prepare browser --prod

#ionic cordova resources ios
#ionic cordova resources android

#ionic build --prod  --minifyjs   --minifycss  --optimizejs


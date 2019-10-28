#!/bin/bash


if [ -z "$1" ]
then

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
    ionic cordova plugin rm cordova-plugin-insomnia
    ionic cordova plugin rm onesignal-cordova-plugin

    rm -rf platform/*

    ionic cordova platform add ios@latest
    ionic cordova platform add android@latest
    ionic cordova platform add browser@latest

    ionic cordova plugin add cordova-plugin-inappbrowser
    ionic cordova plugin add cordova-plugin-splashscreen
    ionic cordova plugin add cordova-plugin-statusbar
    ionic cordova plugin add cordova-plugin-whitelist
#    ionic cordova plugin add cordova-plugin-googlemaps
    ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps.git#multiple_maps
    ionic cordova plugin add cordova-plugin-advanced-http
    ionic cordova plugin add com-badrit-base64
    ionic cordova plugin add cordova-plugin-insomnia
    ionic cordova plugin add onesignal-cordova-plugin
fi

ionic cordova prepare ios --prod
ionic cordova prepare android --prod
ionic cordova prepare browser --prod

#ionic cordova resources ios
#ionic cordova resources android

ionic build --prod  --minifyjs   --minifycss  --optimizejs

# 3502dfab-4518-41fb-b0d4-f8f62469115e

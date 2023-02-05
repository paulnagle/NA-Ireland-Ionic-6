# NA Ireland app

This app is built for Andoid and Apple devices using the Ionic Framework (For more details see https://ionicframework.com/)

## Apple iphone/ipad app link

https://itunes.apple.com/app/narcotics-anonymous-ireland/id1084048094

## Android phone/tablet link

https://play.google.com/store/apps/details?id=ie.nasouth.android.naireland

## Build it yourself (on a mac)

Clone the repository

```
git clone https://github.com/paulnagle/NA-Ireland-Ionic-6.git
```

cd into the directory that is created

```
cd NA-Ireland-Ionic-6
```

To build for app store distribution, and install all plugin dependencies, use the build.sh script.

```
./build.sh

Usage: -b (Build for browser)
       -i (Build for ios)
       -a (Build for android)
       -c (Clean old build files)
       -r (Release build for android, for use with github actions)
```

NB The script will install and set up node, npm etc on your laptop

After building for ios, you can then open the project in XCode to run, test and release the app to the Apple AppStore.

After building for Android, you can then open the project in Android Studio to run, test and build the app for release. You then need to upload the app to the Google Play Developer Console and create a new release from there.


## Branches
The default branch is called version_4 
This corresponds to the 4.xx.xx releases for Apple and Android.

The version_3 branch holds the source code for the old version 3.xx.xx releases

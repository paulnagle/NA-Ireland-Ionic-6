#!/bin/bash

RED='\033[0;31m'  
NC='\033[0m' # No Color

red_text() {
    echo -e "${RED}>>>>>>>>> [${FUNCNAME[1]}] $1${NC}"
}

usage(){
	echo "Usage: -b (Build for browser)"
    echo "       -i (Build for ios)"
    echo "       -a (Build for android)"
    echo "       -c (Clean old build files)"
    echo "       -r (Release build for android, for use with github actions)"
	exit 1
}

add_plugins() {
    red_text "** Adding cordova plugins"
    ionic cordova plugin add cordova-plugin-statusbar
    ionic cordova plugin add https://github.com/paulnagle/cordova-plugin-googlemaps.git
    ionic cordova plugin add com-badrit-base64
    ionic cordova plugin add cordova-plugin-ionic-webview
    ionic cordova plugin add cordova-plugin-inappbrowser
    ionic cordova plugin add cordova-plugin-advanced-http
    ionic cordova plugin add cordova-plugin-insomnia
    
    if [[ "${PLATFORM}" != "android" ]]; then
        ionic cordova plugin add cordova-plugin-splashscreen 
    fi

}

setup_node_npm() {
    red_text "Setting up node and npm versions"
    
    if [ ! -d ~/.nvm ]; then
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
    fi

    export NVM_DIR=$HOME/.nvm;
    source $NVM_DIR/nvm.sh;

    NVM_VERSION_REQUIRED="v19.5.0"
    NVM_VERSION_CURRENT=$(nvm version)
    if [[ "${NVM_VERSION_CURRENT}" != "${NVM_VERSION_REQUIRED}" ]]; then
        nvm install "${NVM_VERSION_REQUIRED}"
        nvm use "${NVM_VERSION_REQUIRED}"
    else
        red_text "node version: ${NVM_VERSION_CURRENT}"
    fi
}

setup_ionic() {
    if ! [ -x "$(command -v ionic)" ]; then
        red_text "** Installing ionic cli globally"
        npm install -g @ionic/cli @ionic/cordova-builders native-run cordova-res cordova 
    else
        red_text "** Updating ionic cli globally"
        npm update -g @ionic/cli @ionic/cordova-builders native-run cordova-res cordova 
    fi
}

install_npm_deps() {
    red_text "** Installing other npm dependencies"
    npm install --save \
        @ionic-native/google-maps \
        @ionic-native/base64 \
        @awesome-cordova-plugins/in-app-browser \
        @awesome-cordova-plugins/http  \
        @ionic-native/status-bar \
        @awesome-cordova-plugins/insomnia \
        @ngx-translate/core \
        @ngx-translate/http-loader \
        @ionic/storage-angular \
        thenby \
        moment \
        moment-timezone

    if [[ "${PLATFORM}" != "android" ]]; then
        npm install --save @awesome-cordova-plugins/splash-screen
    fi

    red_text "** Running npm audit fix"
    npm audit fix
}

clean_old_build() {
    red_text "!! Removing cordova platforms"
    ionic cordova platform rm ios
    ionic cordova platform rm android
    ionic cordova platform rm browser

    red_text "!! Removing cordova plugins"
    ionic cordova plugin rm cordova-plugin-inappbrowser
    ionic cordova plugin rm cordova-plugin-splashscreen 
    ionic cordova plugin rm cordova-plugin-statusbar
    ionic cordova plugin rm cordova-plugin-googlemaps
    ionic cordova plugin rm cordova-plugin-advanced-http
    ionic cordova plugin rm com-badrit-base64
    ionic cordova plugin rm cordova-plugin-ionic-webview
    ionic cordova plugin rm cordova-plugin-insomnia

    red_text "!! Deleting platform folder"
    rm -rf platform

    red_text "!! Deleting node_module folder"
    rm -rf node_modules

    red_text "!! Deleting plugins folder"
    rm -rf plugins

    red_text "!! Deleting www folder"
    rm -rf www
}

build_for() {
    PLATFORM=$1

    red_text ">>>> Building for ${PLATFORM}"
    install_npm_deps

    red_text ">>>> ionic cordova platform add ${PLATFORM} --confirm --no-interactive"
    # if [[ ${PLATFORM} == "android" ]]; then
    #     ionic cordova platform add android@11 --confirm --no-interactive 
    # else
        ionic cordova platform add "${PLATFORM}" --confirm --no-interactive
    # fi
    red_text ">>>> add_plugins"
    add_plugins
    if [[ "${PLATFORM}" != "browser" ]]; then 
        echo ">>>> ionic cordova resources ${PLATFORM}"
        ionic cordova resources "${PLATFORM}"
    fi 
    # red_text ">>>> ionic cordova prepare ${PLATFORM}"
    # ionic cordova prepare "${PLATFORM}" 
    red_text ">>>> ionic cordova build ${PLATFORM}" 
    if [[ "${ANDROID_RELEASE}" == "true" ]]; then
        ionic cordova build android --release --prod
    else
        ionic cordova build "${PLATFORM}"
    fi
}

########
# main #
########
ANDROID_RELEASE=false
setup_node_npm
setup_ionic

[[ $# -eq 0 ]] && usage
while getopts "abcir" option; do
   case $option in
      c) # Clean old build files
         clean_old_build
         ;;
      a) # Build for android
         build_for android
         ;;
      r) # Android release build
         red_text "RELEASE BUILD"
         ANDROID_RELEASE=true
         build_for android
         ;;
      i) # Build for ios
         build_for ios
         ;;
      b) # Build for browser
         build_for browser
         ;;
   esac
done

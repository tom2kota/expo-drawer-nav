{
  "dependencies": {
    "react-native-safe-area-context": "^3.0.5",
    "@react-native-community/masked-view": "^0.1.10",
    "react-navigation": "^4.3.9",
    "react-navigation-drawer": "^2.4.13",
    "react-native-reanimated": "1.9.0",
    "react-native-screens": "^2.8.0"
  }
}

```
Some of your project's dependencies are not compatible with currently installed expo package version:
 - react-native-reanimated - expected version range: ~1.7.0 - actual version installed: 1.9.0
 - react-native-screens - expected version range: ~2.2.0 - actual version installed: ^2.8.0
 - react-native-safe-area-context - expected version range: 0.7.3 - actual version installed: ^3.0.5
 - @react-native-community/masked-view - expected version range: 0.1.6 - actual version installed: ^0.1.10
Your project may not work correctly until you install the correct versions of the packages.
To install the correct versions of these packages, please run: expo install [package-name ...]

```
  "dependencies": {
    "@react-native-community/masked-view": "0.1.6",
    "expo": "~37.0.3",
    "react": "~16.13.1",
    "react-dom": "~16.13.1",
    "react-native": "https://github.com/expo/react-native/archive/sdk-37.0.1.tar.gz",
    "react-native-reanimated": "~1.7.0",
    "react-native-safe-area-context": "0.7.3",
    "react-native-screens": "~2.2.0",
    "react-native-web": "~0.12.3",
    "react-navigation": "^4.3.9",
    "react-navigation-drawer": "^2.4.13"
  },

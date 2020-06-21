# template repo for [snack.expo.io](https://expo.io/snacks/) import repository - [https://github.com/tom2kota/expo-repo-zip](https://github.com/tom2kota/expo-repo-zip) - { 0.55Gb }


# For localhost usage:
```
// Add to dependencies in package.json

    "devDependencies": {
    ...

    "expo-cli": "~3.21.5",
    
    ...
  },
```

#### run project
```
curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
yarn install
yarn upgrade
yarn upgrade --latest

yarn start || yarn dev
```
---------------



    http://localhost:19002/
```
      Starting Metro Bundler on port 19001.

      Building JavaScript bundle: 1%
```

    http://localhost:19001/
```
      React Native packager is running.

      Visit documentation
```
---------------

# [Publishing](https://docs.expo.io/workflow/publishing/)

Your URL for a project you’re working on probably looks something like this: exp://i3-kvb.ccheever.an-example.exp.direct:80
exp.direct is a domain we use for tunneling, so that even if you’re behind a VPN or firewall, any device on the internet that has your URL should be able to access your project. This makes it much easier to open your project on your phone or send it someone else you’re collaborating with who isn’t on the same LAN.

To publish a project, click the **Publish** button in Expo Dev Tools. (It’s in the left side bar.) 

If you're using command line, run ```expo publish```. 

No setup is required, go ahead and create a new project and publish it without any changes and you will see that it works.

```
 Metro Bundler
Info
17:37
Starting Metro Bundler on port 19001.
Info
17:45
Building iOS bundle
Info
17:49
Building Android bundle
Info
17:49
Building JavaScript bundle: finished in 242536ms.
Info
17:53
Analyzing assets
Info
17:53
Building JavaScript bundle: finished in 245995ms.
Info
17:54
Building JavaScript bundle: finished in 6484ms.
Info
17:54
Building JavaScript bundle: finished in 4668ms.
Info
17:54
Uploading assets
Info
17:54
No assets changed, skipped.
Info
17:54
Processing asset bundle patterns:
Info
17:54
- /home/kiskass/WebstormProjects/react_24/**/*
Info
17:54
Uploading JavaScript bundles
```


[DEMO](https://expo.io/@tom2kota/expo-repo-zip)

---------------
###### [Expo Commands](https://docs.expo.io/workflow/expo-cli/#installation)

```
expo --version

expo build:web

expo doctor

expo export

npx expo-optimize

expo publish

expo start

expo whoami

```


---------------

# [Navigation](https://reactnavigation.org/docs/navigation-lifecycle)

---------------

# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by clicking the **Run** button or use the simulator by clicking **Tap to Play**. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Export** your project and use it with [expo-cli](https://docs.expo.io/versions/latest/introduction/installation.html).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the **Embed** button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.io).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack-web).

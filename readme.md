# Project Template 

### create app
```
npx create-expo-app@latest reactnative --template blank@latest
```

### Install dependencies
```
npx expo install expo-router react-native-safe-area-context react-native-screen expo-linking expo-constants expo-status-bar
```

### setup entry point
package.json
```
"main": "expo-router/entry"
```

then copy app.js code and then make app folder and then make _layout.jsx file 
and paste the code there

### Modify project configuration
app.json
```
"scheme": "appName"
```

then start 

--- 
after that we create a file index.jsx in app folder its ours home page

---
use rnfes in _layout file

---
 then we import Slot in _layout file that is used for importing its current children route  

--- 
then we use Stack for different screen and return stack 
```
<Stack.Screen name="index" options={{ headerShown: false}} />
```

After that we create a profile.jsx file 
and we will return to our home page and make /profile via importing Link
```
<Link href="/profile" style={{ color: 'blue' }}>Go to Profile</Link>
```

---
now we will add tailwind css styling for this we will use NativeWind 
or we can also use npm install twrnc
---

added colors and fonts to tailwind.config

--- 
after that we added images and fonts to the assets folder after that we import this on constants folder and exporting index.js file from there.

--- 
then we imported all fonts in layout file via useFonts hook

---
then we will use useEffect hook it allow us to perform some action while page or screen is loading
---
after this we SplashScreen.preventAutoHideAsync()
this will prevent the splash auto hidding before assest loading is complete
---



then we create (auth) folder in app
we write floder name in perenthsis which means that in contains all routes 
like: ( signIn, SignUp and more)

in this folder we create a seprate layout because of only in this routes there is no tab options to navigate

---
then we create ( tabs ) folder, where we can again store routes of tabs are are used to do navigate also here is _layout file for tabs enabled

---
 then we create serach folder that are used to do dynamic routing
 in this we create a [querry].jsx file 
 who's handle random querry or specific search user is tryying to do

---

we are almost done with our file structure but here is no way to navigating between these routes

---
now we import {Tabs, Redireact} and use it for showing home, create, profile etc on tabs section
---




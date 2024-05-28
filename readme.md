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


after that we returns <Tabs> for showing icons on screen then in tabs we create <Tabs.Screen > in which we sets the name, icons etc of tab and styles related props

we copy this for 3 more times for 3 more tabs

then we create TabIcon function for styling like place items in center and more

then we set screenOption in tabs where we can sets ours tab bar color height and more
----


---

now we come on our starting page or index file 
and now we will use SafeAreaView, so that our contact doen't flow outside the screen.
after that we set <scrollView> height to 100%, so that our page will become scrollable.
the reason of using this if our content will be larger so that it can be scrollable on all types of screen

--- 

then we add logo, cards, some text and a button on main index file
for the button component we crreate a seprate components file 

where we can use <TouchableOpacity> for button which means that now we are able to touch button
than we create a function or component and destructure button props and use it

and we also use routing for navigate one page to another

---

after the starting page we hum sign-In page par kaam karenge 
So, sabse phle starting page ke custom button se sign-in page 

ab sign page pr aakr, sabse phle return me SafeAreaView karenge, aur scrolling ke liye 
<ScroolView> lagya taaki pure page me acche se scrolling ki jaa sake

ab humne phle logo set kiya, fir form me Email or password lene ke liye, 
FontField ka alg se component bna liya 
fir usko import kar liya sign-In page me
aur usme title, value, baaki sb set kar diya 

last me custom button ko call karwa kar usme 
sign-Up page ka path de diya

---
 
<FontField> component me humne text, aur TextInput liya :
TextInput me humne placeholder, secureTextEntry, onChangeText, value set kiya

fir humne title or password ka compare karwaya, if dono same nikale toh ke function onPress par ek function lagaya jo humse useState se aayega setShowPasswors jo ye check karega ki showPassword dikh rha h ya nhi
aur agr nhi dikh rha toh udhr eye ka icon lga denge

----

signIn page ready karne ke baad, same code signUp me copy kardo,
bss waha pr ek chij or add kari hai, username
baaki chij as requirement change karli hai

---



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


ab hum appWrite ka use karke logic implement karenge ki actual me chije kaise work karengi, jissai hum proper way me register aur logIn kar sake.

---

sbse phle appwrite me login karke ek new project create kar lenge,
then Overview me se sbse phle id ko copy karke lib file me appwriteConfig me projectId me paste kar denge.

fir ek database create kar lenge aur uski id bhi paste kar denge, aur fir database ke andr 2 collections bna lenge users or videos ke naam se
aur inki bhi id paste kar denge
fir inke andr attributes bna lenge jo jo hume chahiye unka type select karke 

fir last me storage waale option me jaakr ek bucket create kar lenge
or uski id bhi paste kar denge

----

ab iske baad [appwrite](https://github.com/appwrite/sdk-for-react-native)

setup follow kar lena hai..

`
export const createUser = () => {
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}
`

setup karne ke baad jaise hi hum signUp pr tap karenge hume kuch data show hoga terminal pr and appwrite pr ek user ka data aa jaayega 

ab iss user ke data ko delete karke 
hum apna real user create karenge

---

apna user create karne ke liye hume apne according Register user set karna pdega 
jisko hum tryCatch me le lenge
fir hume jo jo chahiye newAccount bna kar usme likh denge
or check kar lenge agar kahiii newAccount phle se toh exist to nhi karta 
agr karta hai toh new error throw kar denge

agr nhi karta toh avatar me uska username le lenge\
signIn me email, password

or fir ek newUser bna denge jo database se connected hoga
or usme sbkuch reassign kar denge
or newUser ko return kar denge

ab sign-up page par aayenge
or udhr sara setup karenge submit function me, ki agr jo jo hume chahiye vo nhi h toh error varna cretae 
and router ka use karke home page pr bhej denge

---

lekin ab kya ho rhahai jaise hi hum account create karke login karte hai fir back karte hai, to fir se home page aa jata hai aur home page ke baad fir se sign-In and sign-Up page aa jata hai .

lekin agr hum login hai toh already toh hume in sbki ki need hi nhi honi chahiye.

isiliye ab hum ik nya folder bnayange context ke naam se aur usmeGlobalProvider ke naam se file banai

fir globalProvider function bnayenge jo ye check karega ki user phle se loggedIn hai ya nhi

fir main _layout me jakr stack ko globalProvider is wrap kar denge

fir main page ke index pr aakr function ke andr 
```
   const { isLoading, isLoggedIn } = useGlobalContext();

    if(!isLoading && isLoggedIn) return <Redirect href="/home" />
```
likh denge


* That's it ab hmara login aaram se hi har tarike se work karne ko ready hai.

---

# Starting from home page

login karne ke baad hum home screen par aayenge or sbse phle 
safeAreaview me wrap karenge
 wrap karne ke baad hum iss baar <FlatList> ka use karenge
<ScrollView> ki jagah kyoki, 
FlatList ke sath hum horizantal scrolling ke sath sath vertical scroll bhi kar sakte hai,
scroll view me aisa directly nhi use hota

<FlatList> me hum 3 attributes le rhe hai
1. data
2. renderItem
3. keyExtractor

iske baad humne FlatList ke componrnts ka use kiya jo hai
ListHeaderComponent liya
ye head me chijen dikhane ka kaam karta hai
to iske humne andr Welcome back text or id naam se name jo aayega vo rakhenge

aur idhar hi humne ek small logo bhi lga diya

uske baad humne ek search inout bnaya jisme hum video ko search karenge, udhr search ke icons pr click karke 
aur placeholder ko humne se "Search for a video topic"
de diya

humne same FontField wala code use kiya hsi
bss apne according kuch changes karli hai

ab humn verticall scrolling ke liye ek alg se section bnayenge jisme fir se data flastlist me lenge lekin  or <flatlist> ke end hone pr udhr horitantal likkh denge.
jisse ye horizontak me chla jaayega.


### ab hume empty video ke liye ek function bnayenge 
agr maan lo koi video abhi tak kisi ne video add hi nhi ki
toh usko udhr no video paand likha aayega sath hi udhr ke butto lga denge. jo humko create waale route par jaayega.


### main kaam
page ko niche ki side karne se refresh ho jaaye page automatical upadtes changes apply ho jaaye vo set karenge

Ye hoga useState hook se. useState hook me hum refreshing(variable), setRefreshing(function) le lenge or isai by default false rakhenge.

ab iss hook ka use hum refreshControl me karenge

-> refreshControl humara page ke just upr lagega taaki page ko down karne se loading aa sake / refresh ho sake page.

---
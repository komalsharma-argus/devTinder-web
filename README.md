# DevTinder

- Create a Vite + React application
- Remove unecessary code and create a Hello World app
- Install Tailwind CSS
- Install Daisy UI
- Add NavBar component to App.jsx
- Create a NavBar.jsx separate Component file
- Install react router dom
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet in your Body Component
- Create a footer
- Create a Login Page
- Install axios
- CORS - install cors in backend => add middleware to with configurations: orgin, credentials: true
- Whenever you're making API call so pass axios => { withCredentials: true }
- install react-redux + @reduxjs/toolkit - https://redux-toolkit.js.org/tutorials/quick-start
- configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor our code to add constants file 
- Create a components folder and move all the components into it and change the imports accordingly
- You should not be access other routes without login
- If token is not present, redirect user to login page
- Logout feature with custom error handling for invalid credentials
- Made appropriate backend changes with status codes to make sure invalid data is not accepted if default 200 status code is sent with invalid data
- Get the Feed
- Create Feed Slice and Feed in the store
- Build User Card on Feed
- Edit profile feature 
- Show Toast Message on save of Profile
- View Connections page
- View Connection Requests page



TODOs: 
- Error handle in Navbar.jsx, Feed.jsx, Connections.jsx
- Design Custom Error Page
- Make about textarein EditProfile component
- Add skills in profile section
- Make gender a dropdown in EditProfile component

Body 
    NavBar
    Route=/  => Feed
    Route=/login  => Login
    Route=/connetions => Connections
    Router=/profile => Profile
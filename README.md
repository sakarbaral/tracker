# Real-Time Location Tracking Application


This project is a real-time location tracking application that allows users to see the locations of others who have joined on a map. The application is built using Node.js, Leaflet, Socket.io and OpenStreetMap. Users' locations are displayed on an interactive map, enabling them to track the real-time movements of all participants.


You can visit the website at [tracker.sakarbaral.com.np](https://tracker.sakarbaral.com.np).


## Features
- Real-Time Location Tracking: Track and display the locations of all users who have joined the application.
- Interactive Map: Uses Leaflet and OpenStreetMap to provide a responsive and interactive map interface.
- Real-Time Communication: Utilizes Socket.io to ensure seamless communication between the server and clients, allowing instant updates of user locations.
- User Identification: Each user is identified on the map, enabling easy tracking of specific individuals.



## Prerequisites

- Node.js (version 17 or later)
- npm (Node Package Manager)
- A modern web browser (Google Chrome, Mozilla Firefox, etc.)


## Installation

### Backend Setup

1. Clone the repository:
   ```
   git clone https://github.com/sakarbaral/tracker.git
   cd tracker
   ```
2. Install dependencies:

    ```npm install```

3. Start the backend server:

    ```node server.js```

4. Open your browser and navigate to [localhost:3000](http://localhost:3000)



## Usage

- Open the application in your browser.
- Enter your name
- Allow location access
- Your location will be visible on the map, along with anyone else who has joined

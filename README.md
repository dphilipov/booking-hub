<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/dphilipov/booking-hub">
    <img src="./front-end/previews/plane-departure-solid.png" alt="Logo" width="75">
  </a>
  <h3 align="center">Booking Hub</h3>

  <p align="center">
    A small React app that allows you to create, delete & view travel bookings that uses infinite scroll
    <br />
    <br />
    <img width ='46px' src ='https://github.com/rahulbanerjee26/githubProfileReadmeGenerator/blob/main/icons/nodejs.svg'>
    <img width ='46px' src ='https://github.com/rahulbanerjee26/githubProfileReadmeGenerator/blob/main/icons/express.svg'>
    <img width ='46px' src ='https://github.com/rahulbanerjee26/githubProfileReadmeGenerator/blob/main/icons/mongodb.svg'>
    <img width ='46px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/reactjs.svg'>
    <br />
    <a href="https://bookings-hub.web.app">Live Demo</a>
    ·
    <a href="https://github.com/dphilipov?tab=repositories">Explore my other projects</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#view-the-live-demo">View the Live Demo</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

BookingHub allows you to create plane travel bookings via filling a form with the required information. You can also view all of your created bookings & delete those any of them.

![App Screen Shot][app-screenshot-1]
![App Screen Shot][app-screenshot-2]

## Key Features

The project comprises of two parts:
#### Back-end:
* A **Node.js/Express server** provides the endpoints. _/airports_ can only be read, while _/bookings_ allow reading, creating and deleting
* The API uses **MongoDB** where the data is stored in separate collections   

#### Front-end:
* The front-end allows for the creation of new bookings via a **controlled form** after the **validations** are passed
* All bookings can be scrolled through with **infinite scrolling**
* Any booking can be deleted upon which the updated list is refetched & rerendered
* Appropriate notifications are triggered via the **Context API** when necessary

The back-end for the [Live Demo](https://bookings-hub.web.app) is hosted using [Nginx](https://nginx.org/en/) on a VPS. 


<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
```sh
git clone https://github.com/dphilipov/booking-hub
```
#### For the back-end:
1. cd into the folder
```sh
cd rest-api/
```
2. Install NPM packages
```sh
npm install
```
3. Start the project
```sh
npm start
```
4.  If eveyrthing is OK, the console will output:
```sh
Server started successfully on port 3500
Database connected
```

#### For the front-end:
1. cd into the folder
```sh
cd front-end/
```
2. Install NPM packages
```sh
npm install
```
3. Start the project
```sh
npm start
```

### [View the Live Demo](https://bookings-hub.web.app)

<!-- CONTACT -->
## Contact

Dimitar Filipov - dphilipov@mail.bg

Project Link: [https://github.com/dphilipov/booking-hub](https://github.com/dphilipov/booking-hub)







[app-screenshot-1]: ./front-end/previews/booking-form-preview.png
[app-screenshot-2]: ./front-end/previews/booking-list-preview.png

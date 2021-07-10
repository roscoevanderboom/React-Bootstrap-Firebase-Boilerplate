# React-Bootstrap-Firebase-Boilerplate
A minimal boilerplate to get any project started.

**[Light Bootstrap Dashboard React](https://demos.creative-tim.com/light-bootstrap-dashboard-react/#/?ref=lbdr-readme)** is an admin dashboard template designed to be beautiful and simple. It is built on top of [React Bootstrap](https://5c507d49471426000887a6a7--react-bootstrap.netlify.com/), using [Light Bootstrap Dashboard](https://www.creative-tim.com/product/light-bootstrap?ref=lbdr-readme) and it is fully responsive. It comes with a big collections of elements that will offer you multiple possibilities to create the app that best fits your needs. It can be used to create admin panels, project management systems, web applications backend, CMS or CRM.

## Table of Contents

* [Pages](#pages)
* [Features](#features)
* [Installation](#installation)
* [Notifications](#notifications)

## Pages


* Landing Page
* Login Page
* Register Page
* Admin Layout
* * Dashboard Page
* * User Profile Page
* * Icons Page


## Features

* Login / Register flow
* Routing
* Admin layout
* Dynamic notifications
* State management with React's createContext / useReducer hooks.

## Installation

* clone repo
* npm install || yarn install
* paste Firebase api config into src/firebase/api/index.js
* npm run start || yarn start

## Notifications

Notifications can be rendered dynamically. It can be added to useEffect hooks or added to callback / promises. 
To use, 
* import useContext
* import store
* destructure **notify** from context.actions
* call **notify({variant, message})**

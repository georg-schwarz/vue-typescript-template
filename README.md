# Vue.js Template with Typescript

This project represents the state of **my personal** Vue.js template with TypeScript. Feel free to use it in order to get a head start on your UI project.

## Demo Setup

There is a client and a server project in this repository. The server ist just a CRUD store for demonstration. The running example is a TODO list.

## Used Frontend Libraries

* **Vue.js** as UI framework
* **Vuex** for easy state management in Redux style
* **Vuex-Class** for vuex store via annotations
* **Vuetify** for Material UI design elements

## Deployment

We provide a `docker-compose.yml` file. Start it with `docker-compose up`. It will start up the client application and a reverser proxy that we need to do a relative routing, so no changes required when switching deployment URL. The application will be available on `{hosturl}:9000/`. 
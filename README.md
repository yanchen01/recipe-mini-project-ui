# **Recipe Mini Project**

###### EC463 Fall 2021

###### Team Members: Yan Chen, Hanlin Mai


========================================================

This project is about learning how to design and implement a recipe calories cross-platform mobile app in React Native. We have decided to choose React Native as our UI framework and Express + Node.js as our backend API framework. React Native is robust and cross-platform, and also supports lots of packages. Express + Node.js provides an easy setup and lightweight packages, which is also one of the fastest backend frameworks.

We also included *Github Actions* to deploy our Backend API automatically to Heroku (where we host our backend API).

* [Frontend UI Repo](https://github.com/yanchen01/recipe-mini-project-ui)
* [Backend API Repo](https://github.com/yanchen01/recipe-mini-project-api)

# Documentation
* [Architecture Diagram](architecture_diagram.png)
<img src="architecture_diagram.png">

# Demo Video
* [Demo Video](Demo_Video.mp4)
<video src="Demo_Video.mp4">


# Home.js

const Container: This is the container for the whole user interface.
const RecipeContainer: This is the container for the receipt, which is right in the center of the APP.
const WelcomeText: This is the text of “Welcome, user!”.
const RecipeText: This contains the name of the recipe.
const Home: This contains the main frame of the architecture.

It will return the layout of our home screen.


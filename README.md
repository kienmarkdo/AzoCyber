# AzoCyber

A React-Typescript-based website for a fictional cybersecurity service company, AzoCyber.

This front-end development project is built from scratch and focuses on the design and analysis of user-interfaces, including: user-centered design (UCD), prototyping (mock-ups, wireframes), UI patterns, visual/verbal communication, human cognition concepts, heuristic evaluation, Gestalt's Law, accessibility, and more.

Link to the website: https://kienmarkdo.github.io/AzoCyber

## Libraries and Tools used

- Frontend libraries
  - React (v18.2.0)
  - Typescript (v4.7.4)
- UI libraries
  - BlueprintJS (v4.5.1)
  - SASS (v1.53.0)
- Routing
  - React Router (v6.3.0)
- Internationalization
  - React i18next (v21.8.13)
- Form handling and validation
  - Formik (v2.2.9)
  - Yup (v0.32.11)
- Package manager
  - Node (v8.9.0)
- Hosting
  - gh-pages (v4.0.0)

## How to run

- Make sure Node.js is installed to use npm
  - https://nodejs.org/en/download/
- Clone the repository
- Open the command-line interface in the root of the folder
  - `npm i` Installs all dependencies
  - `npm run start` Runs the program and automatically opens `localhost:3000` in your default browser
- Update gh-pages deployed site
  - `npm run deploy`

## Run locally with Docker
- Download Docker Desktop (if using Windows or MacOS)
- Open Docker Desktop to start Docker Engine
- Open terminal in the root of the project
- Build the Docker image
  - `docker build -t azocyber:1.0 .`
- Start the container as a background process and bind it to port 3000
  - `docker run -d -p 3000:3000 azocyber:1.0`
- Verify that the container is running
  - `docker ps -a  # check running containers by looking at Status column`
  - `docker logs <CONTAINER_ID>  # print existing container logs`
  - `docker logs -f <CONTAINER_ID>  # print and follow the container logs`
- Open the website in your browser by navigating to `localhost:3000`


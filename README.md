# Final Tel-Ran FrontEnd Project

## "Garden Catalog", [Figma v3.0](https://www.figma.com/file/yNWvXvjZC0t8d9yBOpeEPy/Garden?type=design&node-id=4744-277&t=aN8AJv3Geyqmpdkk-0)

### Author: [Ilias Martis](mailto:ilias@martis.dev) (group 40-41 FE)

---

This project is written for educational purposes as a final task on Tel-Ran School's Frontend Development course.

To implement this project the school provided the Backend Server, which is located in the folder "backend".

Frontend part was written by me personally from the beginning to the end using ReactJS library and additional components, and it is located in the folder "frontend".

The project can be launched in two ways:

- through Docker
- each service manually

---

## Docker

To easy start a project with a Docker run the following command:

`docker compose -f docker-compose.yml up --build -d`

To stop the project, use the command:

`docker compose -f docker-compose.yml down`

---

## Manually

#### Backend

To start the Backend Server, go to the "backend/app" folder and run the following command:

`npm i && npm run dev`

---

#### Frontend

To start the Frontend ReqctJS App, go to the "fronend/app" folder and run the following command:

`npm i && npm run start`

---

Then go to the link: <http://localhsot:34444>

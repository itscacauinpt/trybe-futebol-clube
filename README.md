<img src="./app/frontend/src/images/negative_logo.png" width="300px" align="right">

# Trybe Futebol Club 

Project done individually during the course of the <a href="https://www.betrybe.com">Trybe</a>.

"TFC is an informative website about soccer matches and standings! :soccer:

On the TFC development team, your squad is responsible for developing an API (using the TDD method) and also integrating - through docker-compose - the applications so that they work by consuming a database.

In this project, you will build a dockerized back-end using Sequelize data modeling. Your development must respect business rules provided in the project and your API must be able to be consumed by a front-end already provided in this project.

To add a match it is necessary to have a token, so the person must be logged in to make changes. We will have a relationship between the teams and matches tables to update matches.

Your back-end will have to implement business rules to properly populate the table available on the front-end that will be displayed to the person using the system."

### :woman_technologist: Technologies
* Software Architecture (MSC - Model, Service and Controller)
* Node.js, SOLID and DDD
* React.js, TypeScript
* Express.js, MySQL, Sequelize

### :woman_technologist: Project Structure

Before anything, you'll need to run <code> npm run build </code> in your terminal (inside the back-end file), to build the application.

#### **Database:**
It will be a MySQL docker container already configured in docker-compose via a service defined as `db`.
It has the role of providing data to the _backend_ service.
You can also connect to a MySQL Client (Workbench, Beekeeper, DBeaver and etc) by putting the credentials configured in docker-compose into the `db` service.
<details>
<summary>Here's the entities diagram</summary><br />
<img src="https://raw.githubusercontent.com/tryber/sd-020-b-trybe-futebol-clube/main/assets/er-diagram.png?token=GHSAT0AAAAAABW7FRGLNVFQD53MEG7EXJAQY5LPRNQ" with="150px" >
</details>

#### **Back-end:**


#### **Front-end:**
It access the site `http://localhost:3000/`; connect with the back-end by `http://localhost:3001`;

<details>
 <summary>And it should look like this!</summary>
<img src="https://github.com/tryber/sd-020-b-trybe-futebol-clube/blob/main/assets/front-example.png">
</details>

### :woman_technologist: Run and test
:point_right: Running with Docker (:warning: docker-compose 1.29 or superior)
...

👉 Running locally (without Docker)
...
<div align="center">
  Copyright copyright Trybe 2022 - Full-Stack Project Trybe Futebol Club
  </br>
  Performed according to the guidelines of the <a href="https://blog.betrybe.com/wp-content/uploads/2020/12/Código-de-Conduta-Trybe-1.pdf" >Trybe's Code of   Conduct and Student Person Handbook</a>.
</div>

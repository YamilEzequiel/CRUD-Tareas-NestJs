<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

----
## Description

CRUD realizado con Nestjs tareas 

## Endpoint

| HTTP | PATH    | DESCRIPTION   |
| :---:   | :---: | :---: |
| GET | /task   | Listado de tareas   |
| GET | /task/:ID   |Buscar una tarea   |
| GET | /task/category/:CATEGORY   | Buscar por categoria  |
| DELETE | /task/:ID   | Eliminar una tarea   |
| PUT | /task/:ID   | Actualizar una tarea   |

## Swagger

💥 URL/api
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).

-----

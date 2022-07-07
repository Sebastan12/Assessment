<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This REST API periodically scans the folder "FolderToWatch" and records all files + Metadata inside a Postgres DB.
To see which endpoints are available continue reading in the Endpoint section further down below.

## Quickstart
To quickly get up and running:
- read the "Starting the DB" section 
- after setting up the db run
```bash
$ npm install
$ npm run start:dev
```
- Wait 1-2 minutes for the scheduler to get the contents of "folderToWatch" / do first scan
- The API Should then be available at http://localhost:3000/folders

## Installation

```bash
$ npm install
```

## Starting the DB

```bash
# Starting Prosress
$ docker-compose up -d

#setting up .env file
create .env file / or copy .env.example
paste -> DATABASE_URL="postgresql://user:admin@localhost:5432/nest?schema=public" <- into it (docker credentials)
see .env.example for referance

# migrating the database schema
$ npx prisma migrate dev

# to view your data
$ prisma studio

# or pgadmin
$ http://localhost:5050/
$ default email: admin@example.com
$ default email: admin
```

## Endpoints

```bash
GET
# /folders
- lists all files/folders with the following information:
  - path
  - filename
  - filetype=extension
  - filesize
  - modificationdate
  - scandate

GET
# /folders/filesize?ftype=xxx
  - Delivers folders and subfolders with aggregated filesize sorted by size
  - Filtered by filetype/extension=xxx if avail
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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Information

- Author - [Sebastian Kargl](https://www.sebastiankargl.com/)


## License

Nest is [MIT licensed](LICENSE).

# API TMDB

This is a simple API to get information about movies and TV shows.

## Endpoints

### GET /

Get a list of movies.

### GET /movie/:id

Get a movie by id.

### GET /likes

Get a list of liked movies.

## Usage

To run this project, you need to have Node.js and Yarn installed.

## Create a .env file

Create a `.env` file in the root of the project with the following content:

```env
VITE_API_KEY=<YOUR_API_KEY_TMDB>
```

## Install dependencies

```bash
yarn install
```
## Run the project

```bash
yarn dev
```

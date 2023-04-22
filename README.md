
# DevOps prj
Project made for an devops internship position.
General functionality for this application is that there is an REST Api backend written in Node and Express. It has one simple GET request endpoint that returns a lits of colors with their names and values. Frontend is written in React and it displays the values fetched from that endpoint. Both services (server and client) are contenerized with docker and build with docker-compose. In addition there is an small NGINX service that's configured to work as a loadbalancer.
## Run locally with docker compose
```bash
  git clone https://github.com/kayYZ1/DevOpsTask.git
```

```bash
  cd DevopsTask
```
```bash
  docker compose up --build
```

## Run Locally by installing dependencies

Clone the project

```bash
  git clone https://github.com/kayYZ1/DevOpsTask.git
```

Go to the projects directory

```bash
  cd DevopsTask/client
  cd DevopsTask/server
```

Install dependencies

```bash
  npm install
```

Start the server (NGINX folder doesn't have package.json therefore it needs to be run with docker)

```bash
  npm run dev //client
  npm start //server
  docker run -p 5000:80 [name] . //You need to be in the nginx folder
```



## Running Tests


```bash
  npm run test
```



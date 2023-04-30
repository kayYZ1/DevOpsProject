
# DevOps project for internship
Due to simplicity both frontend and backend are written in JavaScript, Jenkins was choosen mainly due to being open source and quite easy to use. Application has one simple GET request endpoint that returns a list of colors with their names and values. Client displays on the screen data fetched from that specific endpoint. Both services (server and client) are contenerized with docker and build with docker-compose, in addition there is an small NGINX service configured to work as a loadbalancer. That redirects the request to either one of two running servers.
## Run locally 
```bash
  git clone https://github.com/kayYZ1/DevOpsProject.git
```

```bash
  cd DevOpsProject
```
```bash
  docker compose up --build
```
## Running Tests


```bash
  npm run test //client
```



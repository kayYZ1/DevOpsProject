# script to test whether the load balancer works properly
import requests

for x in range(100):
    requests.get("http://localhost:5000")

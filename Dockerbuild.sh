docker build -t micro-node-service:latest .
winpty docker run -it --rm -p 8080:8080 --name micro-node-service micro-node-service:latest
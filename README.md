# TaskBoard – Docker and Kubernetes Deployment

## Project Overview
TaskBoard is a simple task management web application developed using Node.js and Express.js. This project demonstrates application containerization using Docker and deployment using Kubernetes.

## Technologies Used
- Node.js
- Express.js
- Docker
- Kubernetes
- Docker Desktop
- AWS EC2
- k3s
- Git and GitHub

## Project Structure
```text
taskboard/
├── server.js
├── package.json
├── Dockerfile
├── .dockerignore
└── k8s/
    ├── deployment.yaml
    └── service.yaml
```

## Application Features
- View existing tasks.
- Add new tasks.
- REST API for task management.
- Health check endpoint.
- Containerized application using Docker.
- Kubernetes deployment with two replicas.
- NodePort service for application access.
- Load balancing between application pods.
- Scaling and self-healing using Kubernetes.

## Docker Commands

Build Docker image:
```bash
docker build -t taskboard:v1 .
```

Run Docker container:
```bash
docker run -d --name taskboard -p 3000:3000 taskboard:v1
```

Access the application:
```text
http://localhost:3000
```

## Kubernetes Deployment

Apply deployment:
```bash
kubectl apply -f k8s/deployment.yaml
```

Apply service:
```bash
kubectl apply -f k8s/service.yaml
```

Check pods:
```bash
kubectl get pods
```

Check services:
```bash
kubectl get svc
```

Access the application:
```text
http://localhost:30080
```

## Application Endpoints

| Endpoint | Description |
|---|---|
| `/` | TaskBoard web interface |
| `/api/tasks` | View and manage tasks |
| `/health` | Application health check |

## Deployment Environments
1. AWS EC2 using k3s Kubernetes.
2. Local environment using Docker Desktop Kubernetes.

## Conclusion
This project demonstrates practical implementation of Docker containerization and Kubernetes orchestration, including deployment, networking, load balancing, scaling, and self-healing.

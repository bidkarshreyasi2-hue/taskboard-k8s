# TaskBoard – Docker & Kubernetes Deployment

Simple Node.js/Express app containerized with Docker and deployed on Kubernetes (k3s on AWS EC2 / Docker Desktop).

```bash
docker build -t taskboard:v1 .
docker run -d -p 3000:3000 --name taskboard taskboard:v1
kubectl apply -f k8s/
kubectl get pods,svc
```
Access: http://<NODE-IP>:30080

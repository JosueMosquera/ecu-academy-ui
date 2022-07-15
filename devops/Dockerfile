FROM node:16 AS builder

WORKDIR /app

COPY . .

RUN npm run build


FROM nginx:1.23.0

#Rutinas para copiar el codigo

WORKDIR /usr/share/nginx/html
COPY  --from=builder /app/docs .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
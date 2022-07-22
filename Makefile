build-dev:
	@ docker build -f devops/Dockerfile -t academy-front:latest .

deploy:
	@ docker stack deploy -c devops/stack.yml academy-ui
rm:
	@ docker stack rm academy-ui
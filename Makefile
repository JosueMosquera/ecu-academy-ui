build-dev:
	@ docker build -f devops/Dockerfile -t testreact:latest .

deploy:
	@ docker stack deploy -c devops/stack.yml academy-ui
rm:
	@ docker stack rm academy-ui
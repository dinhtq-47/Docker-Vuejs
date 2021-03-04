start:
	- sudo docker-compose up -d
	- sudo docker-compose run npm run watch
stop:
	- sudo docker-compose stop
clear-config:
	- sudo docker-compose run php php artisan config:cache
autoload:
	- sudo docker-compose run composer dump-autoload
migrate:
	- sudo docker-compose run php php artisan migrate
php-sh:
	- sudo docker-compose exec php sh
install:
	- sudo sudo docker-compose up -d
	- sudo sudo docker-compose run npm run prod
	- sudo sudo docker-compose run php php artisan migrate
	- sudo sudo docker-compose run php php artisan db:seed


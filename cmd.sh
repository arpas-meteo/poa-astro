docker build . -t poa-astro:0.0.13

docker run -it --rm  --env-file .env.list -p 8999:80 poa-astro:0.0.4

docker tag poa-astro:0.0.13 registry.digitalocean.com/docean-alai-arpas/poa-astro:0.0.13


docker push registry.digitalocean.com/docean-alai-arpas/poa-astro:0.0.13

kubectl apply -f k8_astro.yaml

node download_anagrafica.js

ls -l /winshare/Dati-lx/poa/idrometri/generale


cp -r /winshare/Dati-lx/poa/idrometri/generale/*.jpg ./public/idrometri




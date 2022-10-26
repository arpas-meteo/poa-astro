docker build . -t poa-astro:0.0.7

docker run -it --rm  --env-file .env.list -p 8999:80 poa-astro:0.0.4

docker tag poa-astro:0.0.7 registry.digitalocean.com/docean-alai-arpas/poa-astro:0.0.7


docker push registry.digitalocean.com/docean-alai-arpas/poa-astro:0.0.7

kubectl apply -f k8_astro.yaml


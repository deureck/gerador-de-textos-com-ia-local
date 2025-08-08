FROM php:8.2-cli
COPY . /usr/src/gerador-de-textos-com-ia-local
WORKDIR /usr/src/gerador-de-textos-com-ia-local
CMD ["php", "-S", "0.0.0.0:8000"]




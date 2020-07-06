# Requisitos

Bob es un adolescente poco convencional. En una conversación sus respuestas son muy limitadas:
* Bob responde "Sure" si le haces una pregunta.
* Bob responde "Whoa, chill out!" si le gritas.
* Bob responde “Fine. Be that way!” si te diriges a él sin decir nada.
* Bob responde “Whatever.” a cualquier otra cosa.

## Configuración previa

Es necesario tener instalado yarn para poder hacer la prueba.

## Descarga

El repositorio se encuentra en [git-gft](https://git.gft.com/compilado-a-fuego/typescript/bob/), una vez descargado es necesario 
crear una rama con el identificador gft de cada concursante.

```bash
$ git clone https://git.gft.com/compilado-a-fuego/typescript/bob.git
$ cd bob
$ git checkout [tu-nombre-de-usuario-gft]
```

## Primeros pasos
La primera vez será necesario instalar las dependencias del proyecto:

```bash
$ yarn install
```

Y trabajar en el fichero **bob.ts**

## Como correr las pruebas unitarias

```bash
$ yarn test
```

## Subida

Una vez terminada la prueba es necesario hacer push a la rama con tu nombre y crear un merge-request a la rama master.

```bash
$ git push -u origin [tu-nombre-de-usuario-gft]
```

Entrar [aqui](https://git.gft.com/compilado-a-fuego/typescript/bob/merge_requests) y crear un nuevo "merge-request".

## Criterios de Evaluación

Los criterios están ordenados de mayor peso a menor.

1. Al ejecutarlo hace lo que indican los requisitos
2. Compila/Transpila el código fuente
3. Funcionan las pruebas unitarias
4. Limpieza en el codigo y uso de nemotecnia en el nombre de variables, clases, constantes, etc...
5. Código debidamente documentado
6. Hacer uso de algun tipo de clase o metodo deprecated
7. Hacer uso de los principios SOLID

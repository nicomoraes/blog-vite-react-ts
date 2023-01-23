## Blog - Vite + React + Typescript

### Blog pessoal desenvolvido com o framework Vite e React.js.

## ![Print da tela inicial do blog](https://github.com/nicomoraes/blog-vite-react-ts/blob/master/resources/print-home.png)

---

## Tech Stack

- React.js
- styled-components
- Typescript
- Vite.js

---

## Informações adicionais

- [Axios](https://axios-http.com/ptbr/docs/intro) + [React Query](https://react-query-v3.tanstack.com/) para buscar dados da [API](https://github.com/nicomoraes/nest-prisma-blog-api).
- [Cloudinary React SDK](https://cloudinary.com/documentation/react_integration) para a visualização de imagens via cloud. (**Necessário ter uma biblioteca com as imagens no Cloudinary para utilização das imagens por meio de URL**).
- [Lottie](https://lottiefiles.com/) para adição de animações.
- [Path Mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping:~:text=and%20SystemJS%20documentation.-,Path%20mapping,-Sometimes%20modules%20are) com "@", exemplo:

```typescript
import Button from '@components/Button';
```

- [React Router](https://reactrouter.com/en/main/start/tutorial) para transição entre as páginas.
- [React Markdown](https://github.com/remarkjs/react-markdown) + [React Syntax Hightlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) para a exibir Markdown em HTML.
- [React Responsive Carousel](https://github.com/leandrowd/react-responsive-carousel) para exibir o slide de posts.

## Como rodar o projeto?

1.  Faça o clone do repositório: `git clone` `https://github.com/nicomoraes/blog-vite-react-ts.git`
2.  Entre na pasta do projeto: `cd blog-vite-react-ts`
3.  Instale as dependências: `npm install` ou `yarn`
4.  Preencher .env com informações da sua biblioteca de imagens do Cloudinary:

```bash
VITE_CLOUDINARY_CLOUD_NAME
VITE_CLOUDINARY_CLOUD_APIKEY=
VITE_CLOUDINARY_CLOUD_APISECRET=
VITE_SERVER_PORT=
```

5. Inicie o projeto: `npm run dev` ou `yarn dev`
6. Acesse o projeto em `http:localhost:5173`

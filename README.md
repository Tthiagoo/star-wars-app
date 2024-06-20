<h1 align="center" justify="center">
    Star Wars App
  </h1>
  
  <div align="center">
      <img align="center" alt="Logo" title="#logo" width="250px" src="https://github.com/Tthiagoo/star-wars-app/assets/51219408/a97955e2-0f8f-45ad-8baf-1146010fe592">
       <img align="center" alt="Logo" title="#logo" width="250px" src="https://github.com/Tthiagoo/star-wars-app/assets/51219408/00068223-a92e-46c9-a04e-50a8d411f710">

  </div>

  
  ## :books: Sobre o projeto
	
É um app onde podemos visulizar nomes de personagens de star wars e suas informações

## :arrow_forward: Usando a aplicação
O usuarios poderão entrar na tela inicial e visualizar uma lista

### Funcionalidades
- Visualizar cards com nomes de personagens;
- Exibir um Skeleton para dar feedback visual do carregamento
- Exibir informações dos filmes desses personagens;
- Favoritar um personagem que irá persistir localmente no dispositivo

### :computer: Sobre a arquitetura
- A versão do app usa o expo router, onde as telas são criadas a partir da pasta APP, cada arquivo gera um rota dentro do app
- O app usa uma estilização baseada em TailwindCSS e shadcn ui, onde podemos criar interfaces mais rapidas e escalaveis
- A arquitetura em si é baseada em MVVM, onde temos uma viewlModel que se torna uma camada de intersecção entre as funcionalidades e components
- O testes cobrem componentes e viewModel, juntamente com as mock das chamadas API
- Foi utilizado o tanstack query para gerenciar estados HTTP e cacheamento das requisições, evitando multiplas chamadas e mais facilidade em codar;
- Apliquei um infinitScroll com FlatList e tanstack query, posibilitando paginação ao rolar a lista ate o final, com feedback de carregamento baseado em skeleton
  

## :computer: Tecnologias Utilizadas
- [React Native](https://reactnative.dev/)
- [Native Wind](https://www.nativewind.dev/)
- [NativeCn](https://nativecn.mintlify.app/introduction)
- [TanstackQuery](https://tanstack.com/query/latest)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Commitlint](https://commitlint.js.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [React Native Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/)

## 🚀 Como executar o projeto

```bash
# Clone este repositório
$ git clone [https://github.com/Tthiagoo/githubCase](https://github.com/Tthiagoo/star-wars-app)

# Instale as dependências com npm ou yarn
$ npm install

# Execute a aplicação
$ npm run start

# Utilize um emulador ou uso o app do expo go
```



### Rodando a aplicação
Baixe o apk: 
  

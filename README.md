# Desafio final 2/4

Nessa semana, sua tarefa será implementar uma página com os dados vindos de uma API.
Existem inúmeras APIs públicas que você pode escolher ou você também pode fazer sua própria API, como mostrado nos vídeos. Nesse momento, iremos utilizar uma API feita pelo back-end da nossa empresa!

https://github.com/UFMGInformaticaJr/Trainee-Spotify

Instruções de uso da api: 

1. Clone o repositório

`git clone https://github.com/UFMGInformaticaJr/Trainee-Spotify.git`

1. Dentro da pasta da api, execute o comando *npm install* para que todas as dependências necessárias seja instaladas

`cd api`

`npm i`

1. Para rodar a api, execute o comando *npm start*

`npm start`

O display a ser implementado a partir da requisição segue abaixo:

https://www.figma.com/file/KLH0XyUIdL3pkEnL8PVemH/Semana-2-do-React?node-id=1%3A12

---

Direcionamento: 

1. Obtenha as imagens do spotify dos seus artistas preferidos no link [Get Artist | Spotify for Developers](https://developer.spotify.com/console/get-artist/) (Primeiro obtenha o token, depois descubra o id do artista acessando a página dele no spotify web. Por fim, faça a requisição no site e obtenha a imagem 160 por 160)
    
    ![(Recuperando id)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/64ac34da-b0a3-4d89-bcf1-767700e9166e/a.png)
    
    (Recuperando id)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7f4c2156-9994-4335-a055-e2231b4ffc8e/Untitled.png)
    
    (Localização da imagem na resposta da requisição)
    
2. Faça a requisição de criação de usuário e depois a requisição de login. Utilize a seguinte base:
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7b4b245a-8855-43b1-ba34-347d61cab5d0/Untitled.png)
    
    Para as requisições de fato, utilize api.post(….), api.get(…..) ….
    
3. Realize requisições de cadastro de artistas
4. Faça a requisição de recuperação de todos os artistas

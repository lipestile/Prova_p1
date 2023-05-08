# prova
Avaliação P1
1 - Instalar o GIT (https://git-scm.com/download/win) 
2 - Instalar o NodeJS LTS (https://nodejs.org/en)  
 
//Api dos Deputados 
https://dadosabertos.camara.leg.br/api/v2 
 
//Atualizar o npm 
npm install -g npm@9.6.2  
 
//primeirocd .. 
 
//Criando projeto  
npx create-next-app@latest introducao --use-npm --example https://github.com/vercel/next-learn/tree/master/basics/learn-starter 
 
// instala o projeto 
npm i 
 
//executar projeto 
npm run dev 
 
//cria arquivo e escreve (seria o "!html") 
rafce 
 
//blioteca react-bootstrap 
npm install react-bootstrap bootstrap 
 
//instalar  
npm i axios 
 
//importar tudo (arruma as linhas) 
alt+shift+f 
 
//Components 
Tem que começar a letra maiúscula. 
 
//configurar o git 
git config --global user.name " " 
git config --global user.email " " 
git add . 
git commit -m "criando projeto" 
 
//remover autor Git 
git remote remove origin 
 
// Map (loop)   
{carros.map(item=> (      
 <p>{item}</p>  
))} 
 
//useState (tem que importar a variavel) 
const [deputados, setDeputados] = useState([]) useEffect(()=>{ 
     apiDeputados.get('/deputados/').then(resultado=>{        setDeputados(resultado.data.dados)     }) 
    }, []) 
 
//git clone  
https://github.com/guilhermev1s/api-filmes.git 
 
// Incluir foto 
img src= {item.foto} 
 
// Novo projeto (estrutura)todo novo projeto será essa estrutura 
import axios from "axios"; 
const apiDeputados = axios.create({    baseURL: 'https://dadosabertos.camara.leg.br/api/v2'}) 
export default apiDeputados

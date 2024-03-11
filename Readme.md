# Documentação do Projeto E-commerce

![Sem título 1](https://github.com/VictorBravim/MeshWear/assets/122113588/3b1f24a8-9110-4203-8f6c-e088495bfcf7)

## <code>Visão Geral</code>

Este projeto é um e-commerce de roupas desenvolvido em React com Vite como bundler. Ele utiliza a API do FakeStore para obter dados de produtos, o Zustand para gerenciamento de estado, e inclui funcionalidades como um carrinho de compras e checkout.

## <code>Funcionalidades Principais</code>

1. Explorar Produtos:
   
   - Página principal que exibe produtos obtidos da FakeStore API.
   - Componente ExploreProducts renderiza produtos e oferece opções de filtro.
     
2. Detalhes do Produto:
   
   - Página de visualização detalhada para cada produto.
   - Componente ProductView exibe detalhes do produto.
     
3. Carrinho de Compras:
   
   - Utiliza o Zustand para gerenciar o estado do carrinho.
   - Componente ProductCard inclui botão "Adicionar ao Carrinho".
   - Componente SlidingCart exibe produtos no carrinho, com opção de remoção e checkout.
     
4. Checkout:
   
   - Página de checkout para revisar os produtos no carrinho e finalizar a compra.
   - Componente Checkout inclui informações do produto, total e botão de compra.

## <code>Como Iniciar o Projeto</code>

1. Clone o Repositório:
```bash
git clone https://github.com/VictorBravim/MeshWear.git
```
2. Instale as Dependências:
```bash
npm install
```
3. Inicie o Aplicativo:
```bash
npm run dev
```
O aplicativo estará disponível em http://localhost:3000.

## <code>Dependências Principais</code>

- React e ReactDOM
- Vite (bundler)
- Zustand (gerenciamento de estado)
- React Router (navegação)
- Axios (requisições HTTP)

## <code>Autor</code>

- GitHub: github.com/VictorBravim

## <code>Licença</code>

Este projeto é licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter detalhes.


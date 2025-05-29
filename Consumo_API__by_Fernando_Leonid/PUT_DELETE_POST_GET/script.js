// URL base da nossa API de exemplo
const API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts'; // Usando posts como exemplo de "produto"

// --- 1. GET: Buscar todos os produtos ---
async function getProdutos() {
    console.log('--- Buscando todos os produtos (GET) ---');
    try {
        const response = await fetch(API_BASE_URL);

        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }

        const produtos = await response.json();
        console.log('Produtos obtidos:', produtos);
        return produtos;
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

// --- 2. GET: Buscar um produto específico pelo ID ---
async function getProdutoById(id) {
    console.log(`--- Buscando produto com ID ${id} (GET) ---`);
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`);

        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }

        const produto = await response.json();
        console.log(`Produto com ID ${id}:`, produto);
        return produto;
    } catch (error) {
        console.error(`Erro ao buscar produto com ID ${id}:`, error);
    }
}

// --- 3. POST: Criar um novo produto ---
async function criarProduto(novoProduto) {
    console.log('--- Criando um novo produto (POST) ---');
    try {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Informa ao servidor que estamos enviando JSON
            },
            body: JSON.stringify(novoProduto), // Converte o objeto JavaScript em uma string JSON
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }

        const produtoCriado = await response.json();
        console.log('Produto criado:', produtoCriado);
        return produtoCriado;
    } catch (error) {
        console.error('Erro ao criar produto:', error);
    }
}

// --- 4. PUT: Atualizar um produto existente ---
async function atualizarProduto(id, produtoAtualizado) {
    console.log(`--- Atualizando produto com ID ${id} (PUT) ---`);
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produtoAtualizado),
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }

        const produtoModificado = await response.json();
        console.log(`Produto com ID ${id} atualizado:`, produtoModificado);
        return produtoModificado;
    } catch (error) {
        console.error(`Erro ao atualizar produto com ID ${id}:`, error);
    }
}

// --- 5. DELETE: Deletar um produto ---
async function deletarProduto(id) {
    console.log(`--- Deletando produto com ID ${id} (DELETE) ---`);
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'DELETE',
        });

        // Para DELETE, um status 204 No Content ou 200 OK com corpo vazio é comum.
        if (!response.ok && response.status !== 204) {
             throw new Error(`Erro HTTP! status: ${response.status}`);
        }

        console.log(`Produto com ID ${id} deletado com sucesso.`);
        // Opcionalmente, pode-se retornar true para indicar sucesso
        return true;
    } catch (error) {
        console.error(`Erro ao deletar produto com ID ${id}:`, error);
        return false;
    }
}

// --- Exemplos de uso das funções ---

(async () => {
    // 1. Chamar GET para buscar todos
    await getProdutos();

    // 2. Chamar GET para buscar um específico (vamos pegar o primeiro)
    await getProdutoById(1);

    // 3. Chamar POST para criar um novo produto
    const novoProduto = {
        title: 'Meu novo produto de teste',
        body: 'Este é o corpo do meu novo produto que estou criando via API.',
        userId: 1
    };
    const produtoCriado = await criarProduto(novoProduto);

    // Nota: O JSONPlaceholder, para POST, PUT, DELETE, não persiste os dados.
    // Ele apenas simula a resposta. Se você tentar buscar o "produtoCriado.id"
    // depois, ele não existirá no servidor real do JSONPlaceholder.
    // Para fins de demonstração, ele nos retorna o objeto com um ID simulado.

    // 4. Chamar PUT para atualizar o produto recém-criado (ou um existente se soubermos o ID)
    if (produtoCriado && produtoCriado.id) {
        const produtoParaAtualizar = {
            id: produtoCriado.id, // O ID é importante para o PUT
            title: 'Título do produto atualizado',
            body: 'Corpo do produto atualizado completamente.',
            userId: produtoCriado.userId
        };
        await atualizarProduto(produtoCriado.id, produtoParaAtualizar);
    } else {
        console.log("Não foi possível atualizar: nenhum produto foi criado ou o ID não foi retornado.");
    }

    // 5. Chamar DELETE para deletar um produto (ex: o de ID 1, se fosse permitido)
    // No JSONPlaceholder, o DELETE retorna 200 OK ou 204 No Content, mas não remove o recurso real.
    await deletarProduto(1);

    console.log('\n--- Demonstração de requisições concluída. ---');
})();
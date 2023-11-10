#language:pt

Funcionalidade: Validar pesquisa Google

@Search
    Cenário: Realizar a Busca no Google
        Dado Estar na pagina Google
        Quando Pesquisar "nike" no campo de busca
        Então Localizar o primeiro resultado da busca "nike"
        E Execute analise lighthouse "https://google.com.br"
        E Comparar a imagem base com atual "nike"
        # E Snapshot "Capodarte Page"

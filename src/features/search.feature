#language:pt

Funcionalidade: Validar pesquisa Google

@Search
Cenário: Realizar a Busca no Goodle
Dado Estar na pagina Google
Quando Pesquisar "capodarte" no campo de busca
Então Localizar o primeiro resultado da busca
E Snapshot "Capodarte Page"

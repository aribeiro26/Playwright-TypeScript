#language:pt

Funcionalidade: Validar pesquisa Google

@Search
Cenário: Realizar a Busca no Google
Dado Estar na pagina Google
Quando Pesquisar "capodarte" no campo de busca
Então Localizar o primeiro resultado da busca "capodarte"
# E Snapshot "Capodarte Page"

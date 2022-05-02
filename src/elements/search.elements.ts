enum searchelements {
    INPUT_SEARCH = "[class^='gLFyf'][title='Pesquisar']",
    LINK_CAPO = '[data-pcu^="https://www.capo"]',
    CAPODARTE_URL = 'https://www.capodarte.com.br'
    
}

declare global {
    const Enums: typeof searchelements;
}

export default searchelements;

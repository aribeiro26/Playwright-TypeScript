enum searchelements {
    INPUT_SEARCH = "[class^='gLFyf'][title='Pesquisar']",
    FIRST_ELEMENT = '[data-text-ad="1"]',
    CAPODARTE_URL = 'https://www.capodarte.com.br/'
    
}

declare global {
    const Enums: typeof searchelements;
}

export default searchelements;

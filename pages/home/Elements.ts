enum Elements {
    PAGE_TITLE = "text='Get started'",
    TITLE_HOME = "Fast and reliable end-to-end testing for modern web apps | Playwright",
}

declare global {
    const Enums: typeof Elements;
}

export default Elements;

# Use a imagem base do Node.js
FROM node:18

# Instale as dependências necessárias para os browsers do Playwright
RUN apt-get update && apt-get install -y curl libnss3 libatk1.0-0 libatk-bridge2.0-0 libxkbcommon0 libxcomposite1 libxrandr2 libgbm1 libasound2 libcups2 libxdamage1 libxfixes3 libpango-1.0-0 libcairo2 xz-utils && apt-get clean && rm -rf /var/lib/apt/lists/*

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie apenas o arquivo package.json para o diretório de trabalho
COPY package.json ./

# Instale as dependências do npm
RUN npm install

# Copie apenas os arquivos necessários restantes para o diretório de trabalho
COPY . .

# Instale o playwright globalmente e instale as dependências necessárias
ARG CACHEBUST=1
RUN echo $CACHEBUST && npx playwright install-deps

# Set environment variable for Playwright's cache
ENV PLAYWRIGHT_BROWSERS_PATH=/tmp/playwright_cache

# Instale os browsers
RUN npx playwright install

# Comando para executar os testes com o npm
CMD ["npm", "run", "test"]
# CMD ["tail", "-f", "/dev/null"]

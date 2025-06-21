# HelpDesk-Chamados-Backend

Bem-vindo ao **HelpDesk-Chamados-Backend**, a API que alimenta o sistema de chamados da aplicação [@vitoinacio/HelpDesk-Chamados](https://github.com/vitoinacio/HelpDesk-Chamados). Este projeto foi desenvolvido com foco em simplicidade, segurança e escalabilidade, utilizando tecnologias modernas como Node.js, TypeScript, Express e PostgreSQL.

---

## 💡 Sobre o Projeto

Esta API tem como objetivo gerenciar um sistema de chamados internos, sendo ideal para equipes de suporte técnico ou atendimento. O sistema possui duas rotas principais:

- **Usuários:** Gerenciamento de usuários do sistema.
- **Chamados:** Criação e acompanhamento de tickets de suporte.

Tudo foi projetado para ser altamente legível, modular e fácil de manter, seguindo as melhores práticas de desenvolvimento backend e segurança.

---

## 🚀 Principais Tecnologias

- **Node.js** — Plataforma para execução do JavaScript no backend.
- **TypeScript** — Tipagem estática para maior robustez e produtividade.
- **Express** — Framework web minimalista e flexível para Node.js.
- **PostgreSQL** — Banco de dados relacional robusto e de alta performance.
- **JWT (jsonwebtoken)** — Autenticação segura baseada em tokens.
- **bcryptjs** — Hash de senhas para aumento da segurança.

---

## 🗂️ Estrutura do Projeto

```
src/
 ├── controllers/   # Lógica dos endpoints e controle de fluxo
 ├── middlewares/   # Autenticação, validação e tratamento de erros
 ├── models/        # Modelos para integração com o banco de dados
 ├── routes/        # Definição e organização das rotas da API
 ├── db.ts          # Conexão e configuração do banco PostgreSQL
 └── serve.ts       # Inicialização do servidor Express
```

---

## ⚡ Como rodar o projeto

### Pré-requisitos

- Node.js (>= 18.x)
- PostgreSQL
- Yarn ou npm

### Passos para execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/vitoinacio/HelpDesk-Chamados-Backend.git
   cd HelpDesk-Chamados-Backend
   ```

2. **Instale as dependências:**
   ```bash
   yarn install
   # ou
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Copie o arquivo `.env.example` para `.env` e preencha as informações do seu ambiente, como string de conexão com o banco de dados e chave secreta JWT.

4. **Inicie o banco de dados PostgreSQL** e crie o banco conforme sua configuração.

5. **Execute o sistema:**
   - Em ambiente de desenvolvimento:
     ```bash
     yarn dev
     # ou
     npm run dev
     ```
   - Em produção:
     ```bash
     yarn build
     yarn start
     # ou
     npm run build
     npm start
     ```

---

## 🔒 Segurança

- Hash de senhas com `bcryptjs`
- Autenticação via JWT
- Validação de dados nas rotas

---

## 📚 Documentação das Rotas

- **/usuarios**: Cadastro, autenticação e gerenciamento de usuários.
- **/tickets**: Criação, atualização e visualização de chamados/tickets.

> Em breve: documentação detalhada dos endpoints com exemplos de requisições (Swagger/Postman).

---

## 🧩 Diferenciais que chamam atenção de recrutadores

- Projeto 100% em TypeScript, garantindo maior qualidade e redução de bugs.
- Estrutura modular, fácil de escalar e manter.
- Boas práticas de autenticação e segurança implementadas.
- Código limpo, organizado e orientado à boas práticas do mercado.
- Pronto para deploy em ambientes modernos (Vercel, Heroku, AWS, etc).
- Uso de scripts para facilitar o desenvolvimento e build (`dev`, `build`, `start`).

---

## 🤝 Contribua

Contribuições são bem-vindas! Abra uma issue ou envie um pull request.

---

## 📜 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido por [@vitoinacio](https://github.com/vitoinacio)

# 🔐 API de Autenticação com Node.js

API REST para cadastro e autenticação de usuários com JWT. Desenvolvida com Node.js, Express, MongoDB e bcryptjs.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) + [Mongoose](https://mongoosejs.com/)
- [JSON Web Token (JWT)](https://jwt.io/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)

---

## 📋 Pré-requisitos

- Node.js v18+
- Conta no [MongoDB Atlas](https://www.mongodb.com/atlas) (gratuito)

---

## ⚙️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/RayanMatos777/api-usuarios.git
cd api-usuarios

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais

# Inicie o servidor
npm run dev
```

---

## 🔑 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```env
PORT=3000
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/nome-do-banco
JWT_SECRET=coloque_uma_chave_secreta_forte_aqui
```

---

## 📡 Endpoints

### Autenticação

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | `/api/auth/register` | Cadastra novo usuário | ❌ |
| POST | `/api/auth/login` | Autentica e retorna token JWT | ❌ |
| GET | `/api/user/profile` | Retorna dados do usuário logado | ✅ |

---

### POST `/api/auth/register`

**Body:**
```json
{
  "name": "Rayan",
  "email": "rayan@email.com",
  "password": "senha123"
}
```

**Resposta (201):**
```json
{
  "msg": "Usuário criado com sucesso"
}
```

---

### POST `/api/auth/login`

**Body:**
```json
{
  "email": "rayan@email.com",
  "password": "senha123"
}
```

**Resposta (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### GET `/api/user/profile` 🔐

**Header:**
```
Authorization: Bearer <seu_token_jwt>
```

**Resposta (200):**
```json
{
  "msg": "Rota protegida 🔐",
  "userId": "64f1a2b3c4d5e6f7a8b9c0d1"
}
```

---

## 🗂️ Estrutura do projeto

```
api-usuarios/
├── src/
│   ├── config/
│   │   └── db.js           # Conexão com MongoDB
│   ├── controllers/
│   │   └── authController.js  # Lógica de register e login
│   ├── middleware/
│   │   └── auth.js         # Verificação do token JWT
│   ├── models/
│   │   └── User.js         # Schema do usuário
│   ├── routes/
│   │   ├── auth.js         # Rotas públicas
│   │   └── user.js         # Rotas protegidas
│   └── server.js           # Entry point
├── .env.example
├── .gitignore
└── package.json
```

---

## 👤 Autor

**Rayan Matos Oliveira**  
[GitHub](https://github.com/RayanMatos777)

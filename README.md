# 🔑 Gerador de Senhas Full Stack

Aplicação web full stack para geração de senhas seguras de 8 caracteres.

## 🚀 Links do Projeto
- **Front-end (Vercel):** https://frontend-mimr36plg-guidovrucos-projects.vercel.app
- **Back-end API (Render):** https://gerador-de-senhas-python.onrender.com/gerar-senha

## 🛠️ Tecnologias Utilizadas
- **Front-end:** React, TypeScript, Vite, Tailwind CSS / CSS Modules
- **Back-end:** Python, FastAPI, Uvicorn
- **Deploy:** Vercel (Front) & Render (Back)

## ⚙️ Como rodar localmente

### 1. Back-end (Python)
```bash
# Na raiz do projeto
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn gerador:app --reload
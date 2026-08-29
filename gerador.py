from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import string
import secrets

app = FastAPI()

# Permite que o Front-end React se comunique com a API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/gerar-senha")
def gerar_senha():
    # 1. Apenas letras (maiúsculas/minúsculas) e números, sem simbolos
    opcoes = string.ascii_letters + string.digits
    
    # 2. Tamanho fixo de 8 caracteres
    tamanho = 8
    
    senha = ""
    for _ in range(tamanho):
        senha += secrets.choice(opcoes)
        
    return {"senha": senha, "tamanho": tamanho}
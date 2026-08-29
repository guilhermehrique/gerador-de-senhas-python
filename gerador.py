import string
import secrets

# 1.  balde com todos os caracteres possíveis
opcoes = string.ascii_letters + string.digits 

# 2.  tamanho da senha que queremos?
tamanho = 8  # Tamanho da senha

# 3. texto vazio onde vamos "colar" cada caractere sorteado
senha = ""

# 4. O loop 'for' vai rodar exatamente o número de vezes definido em 'tamanho'
for _ in range(tamanho):

# 5. sorteamos um caractere aleatório do nosso balde de opções
    sorteado = secrets.choice(opcoes)

# 6. colamos o caractere sorteado na nossa senha
    senha = senha + sorteado

# 5. mostra o resultado final no terminal
print("sua senha gerada é:", senha)
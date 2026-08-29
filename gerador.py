import string
import secrets

# Vamos criar "gavetas" (variáveis) para guardar cada tipo de caractere
letras_maiusculas = string.ascii_lowercase
letras_minusculas = string.ascii_uppercase
numeros = string.digits
simbolos = string.punctuation

# Vamos pedir para o programa mostrar na tela o que tem dentro de cada gaveta
print("Letras maiúsculas:", letras_maiusculas)
print("Letras minúsculas:", letras_minusculas)
print("Números:", numeros)
print("Símbolos:", simbolos)

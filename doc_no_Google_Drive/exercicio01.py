#Crie um programa que solicite ao usuário seis números, calculando a média, e mostre uma lista com os números iguais ou acima da média e uma lista com os números abaixo da média.

nums = []
maiores = []
menores = []
soma = []

for _ in range (6):
    num = int(input("Digite 6 números: "))
    nums.append(num)
    soma = soma + num

media = soma / 6
for num in nums:
    if num >= media:
        maiores.append(num)
    else:
        menores.append(num) 

print(f'A média dos 6 números é {media}')
print(f'Os números iguais ou maiores que a média são {maiores}')
print(f'Os números menores que a média são {menores}')        
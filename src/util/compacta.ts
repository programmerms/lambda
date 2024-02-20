#!/bin/bash

# Verificar se o diretório de origem foi fornecido como argumento
if [ $# -ne 1 ]; then
    echo "Uso: $0 <diretório>"
    exit 1
fi

# Verificar se o diretório de origem existe
if [ ! -d "$1" ]; then
    echo "Diretório não encontrado: $1"
    exit 1
fi

# Nome do diretório a ser compactado
dir_name=$(basename "$1")

# Nome do arquivo ZIP de saída
zip_file="$dir_name.zip"

# Compactar o diretório usando o comando zip
zip -r "$zip_file" "$1"

# Verificar se o comando zip foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "Diretório '$1' compactado com sucesso em '$zip_file'."
else
    echo "Ocorreu um erro ao compactar o diretório '$1'."
fi

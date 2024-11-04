
# Teste Técnico A Recreativa

### Como executar a aplicação:

**Dependências:**

- Docker e Docker Compose
- Node e npm

Para iniciar o projeto, execute o script `start`. No Windows, utilize o `start.bat` e no Linux, utilize o `start.sh`.

```sh
./start.bat
```
ou
```sh
./start.sh
```

**Observações:**

- Em caso de erro, certifique-se de que o container já esteja em execução.
- Certifique-se de que dentro do diretório `server-app/` não haja nenhum diretório `.next`. Caso exista, exclua-o e execute o script novamente.
- Em caso de erro no migrate, remova o container e o diretório `mysql_data/`, e execute o comando ```sh ./start.bat ``` novamente.
- Caso haja problema de permissão para executar o script ```sh ./start.bat ```, conceda através do root permissões adequadas de execução ao arquivo.
- Em ambientes minimos como Debian, pode haver problemas na geração de pdf pelo Puppeteer, portanto observe os logs gerados pelo server para saber as dependencias que faltam no SO para que ele funcione adequadamente. (Normalmente o erro é na hora do launch do Chromium)

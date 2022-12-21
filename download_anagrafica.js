import * as fs from "fs";

const http_url = "http://15.161.134.66:8000/poa/anagrafica";

fetch(http_url)
  .then((response) => response.json())
  .then((data) => {
    const nome_file = "./src/tipi/anagrafica.json";
    const string_data = JSON.stringify(data, null, 2);
    fs.writeFileSync(nome_file, string_data);

    console.log(nome_file);
  });

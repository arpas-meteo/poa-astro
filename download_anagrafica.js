import * as fs from "fs";

function scarica(url, nome_file) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const string_data = JSON.stringify(data, null, 2);
      fs.writeFileSync(nome_file, string_data);

      console.log(nome_file);
    });
}

scarica(
  "http://15.161.134.66:8000/poa/anagrafica",
  "./src/tipi/stazione_ana.json"
);

scarica(
  "http://app7.wdipgeo.arpas.adds/real_rete_anagrafica",
  "./src/tipi/real_rete_ana.json"
);

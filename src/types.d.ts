// export interface Regione {
//   nome: string;
// }

// export interface Provincia {
//   nome: string;
//   sigla: string;
//   region_id: string;
// }

interface Item {
  // codice: string;
  nome: string;
}

export interface Row {
  nome: string;
  // codice: string;
  // zona: Item;
  regione: Item;
  provincia: Item;
  sigla: string;
  codiceCatastale: string;
  cap: string[];
  // popolazione: number;
}

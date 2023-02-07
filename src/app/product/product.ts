export interface IProductApi {
  name: String;
  color: String;
  processor: String;
  price: Number;
}

export interface IMock {
  data: Date;
  venda: Number;
  estoque: Number;
}

export interface IMockSum {
  year: String;
  month: String;
  sum_estoque: Number;
}

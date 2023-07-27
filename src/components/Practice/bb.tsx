function return1<T>(data: T[]) {
  return data[0];
}

let n = return1([1, "2", "3"]);
console.log(n);

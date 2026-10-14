function toQueryString(params) {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}
console.log(toQueryString({ name: "John Doe", age: 30 })); 
console.log(toQueryString({ sort: "asc", limit: 10 }));
console.log(toQueryString({ search: "hello world", page: 1 }));

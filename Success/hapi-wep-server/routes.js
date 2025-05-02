const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Home Page";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "halaman not found";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About Page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const {name = "poke"} = request.params;
      const {lang} = request.query;

      if (lang === 'id') {
        return `hai ${name}!`;
      }

      return `Hello ${name}!`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;

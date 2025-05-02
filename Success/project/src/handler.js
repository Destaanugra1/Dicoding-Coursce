const { nanoid } = require('nanoid');
const bookCollection = require('./books');

const createBook = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = readPage === pageCount;

  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    }).code(400);
  }

  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  const newEntry = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt,
    updatedAt,
  };

  bookCollection.push(newEntry);

  const isAdded = bookCollection.some((book) => book.id === id);

  if (isAdded) {
    return h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    }).code(201);
  }

  return h.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan',
  }).code(500);
};

const fetchAllBooks = (request, h) => {
  const { name, reading, finished } = request.query;

  let results = bookCollection;

  if (name !== undefined) {
    results = results.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (reading !== undefined) {
    results = results.filter((book) => book.reading === (reading === '1'));
  }

  if (finished !== undefined) {
    results = results.filter((book) => book.finished === (finished === '1'));
  }

  const responseBooks = results.map(({ id, name, publisher }) => ({
    id,
    name,
    publisher,
  }));

  return h.response({
    status: 'success',
    data: {
      books: responseBooks,
    },
  });
};

const fetchBookById = (request, h) => {
  const { bookId } = request.params;
  const book = bookCollection.find((b) => b.id === bookId);

  if (book) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

  return h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }).code(404);
};

const updateBookById = (request, h) => {
  const { bookId } = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const updatedAt = new Date().toISOString();

  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    }).code(400);
  }

  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  const index = bookCollection.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    bookCollection[index] = {
      ...bookCollection[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

    return h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    }).code(200);
  }

  return h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  }).code(404);
};

const removeBookById = (request, h) => {
  const { bookId } = request.params;
  const index = bookCollection.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    bookCollection.splice(index, 1);
    return h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    }).code(200);
  }

  return h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  }).code(404);
};

module.exports = {
  createBook,
  fetchAllBooks,
  fetchBookById,
  updateBookById,
  removeBookById,
};

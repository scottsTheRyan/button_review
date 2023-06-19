import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [ 
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 1,
  },
  {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  id: 2,
  },
]

function BookList() {
  return ( 
    <section className="booklist">
      {books.map((dog) => {
        const {img, title, author, id} = dog; 
        return <Book {...dog} key={dog.id} />;
    })}
  </section>
  );
};

const Book = (props) => {
  const {img, title, author} = props;
  return (
    <article className="book">
      <img src={img} alt="Intresting facts from curious minds" />
      <h2>{title}</h2>
      <h1>{author}</h1>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

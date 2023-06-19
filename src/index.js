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
      <EventExamples/>
      {books.map((dog) => {
        const {img, title, author, id} = dog; 
        return <Book {...dog} key={dog.id} />;
    })}
  </section>
  );
};
//now we add an event, typically named 'e' and log it to see all the 
//wonderful details we can see in the terminal
const EventExamples = () => {
  const handleFormInput= (e) => {
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log('its a good show');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  // need e.preventDefault() to show console.log
  // NOTE you have to hold down click on the form and press enter to get 'form submitted to show
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Reviewing Forms</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1 rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>Click Here</button>
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

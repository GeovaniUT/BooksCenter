import React from "react";
import './category.css'
import {useState, useEffect} from 'react'

export default function Category(){

    
    const [books, setBooks] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("fantasia")
    const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${selectedCategory}&key=AIzaSyBeN_jlRd-TFHe07qwN2ArylIzailSfRxE`
    
    useEffect(() => {
        


        const listaDeLibrospoCategoria = async () => {
            const respuesta = await fetch(url, {
                method: "GET"
            })

            const lista = await respuesta.json()
            setBooks(lista.items)
        }

        listaDeLibrospoCategoria()
    }, [selectedCategory])

   

    const CategoryChange = (category) => {
        setSelectedCategory(category);
        console.log(category)
        console.log(url)
      };
    

    return(
        <>
            <div className="container">
                <ul className="category">
                    <li className="line link" onClick={() =>CategoryChange("fantasia")}>Fantasia</li>
                    <li className="line link" id="terror" onClick={() =>CategoryChange("terror")}>Terror</li>
                    <li className="line link" onClick={() =>CategoryChange("ciencia ficcion")}>Ciencia Ficción</li>
                    <li className="line link" onClick={() =>CategoryChange("romance")}>Romance</li>
                    <li className="link"  onClick={() => CategoryChange("misterio")}>Misterio</li>
                </ul>
            </div>

            <h2 className="title">Libros de {selectedCategory}</h2>
            <div className="books">
            {
                books.map((book, index) => (
                    book.volumeInfo?.imageLinks?.thumbnail && (
                        <div key={index} className="book">
                        <ul>
                            <li className="list">
                                {/* {book.volumeInfo.title} */}
                                <br></br>
                                {book.volumeInfo?.imageLinks?.thumbnail && (<img className="border"
                                    src={book.volumeInfo.imageLinks.thumbnail}
                                >
                                </img>
                                )}
                            </li>
                        </ul>
                          <div className="info">
                            <h5>Titulo:</h5>
                            <p>{book.volumeInfo.title}</p>  
                            <h5>Autor:</h5>
                            <p>{book.volumeInfo.authors}</p>
                            <h5>Paginas:</h5>
                            <p>{book.volumeInfo.pageCount}</p>
                          </div>

                        
                    </div>
                    )
                ))
            }
            </div>
            

        </>
    )
}
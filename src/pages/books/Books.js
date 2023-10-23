import React, { useEffect, useState } from "react";
import './books.css'
import Category from "./category";

export default function Books() {
    const url = "https://www.googleapis.com/books/v1/volumes?q=subject:fantasia&key=AIzaSyBeN_jlRd-TFHe07qwN2ArylIzailSfRxE"
    const [books, setBooks] = useState([])

    useEffect(() => {

        const listaDeLibrospoCategoria = async () => {
            const respuesta = await fetch(url, {
                method: "GET"
            })

            const lista = await respuesta.json()
            setBooks(lista.items)
        }

        listaDeLibrospoCategoria()
    }, [])

    return (
        <>
            <Category></Category>
            <h2 className="title">Libros de Fantasia</h2>
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
                        
                    </div>
                    )
                ))
            }
            </div>
        </>
    )
}
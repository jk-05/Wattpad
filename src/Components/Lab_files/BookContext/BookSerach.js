import React, { useEffect } from "react";
import axios from "axios";
import { useBookContext } from "./BookContext";

const BookSearch = () => {
    const { books, setBooks, searchQuery, setSearchQuery } = useBookContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/books`
                );
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (searchQuery) {
            fetchData();
        } else {
            setBooks([]); // Reset books to an empty array if no searchQuery is present
        }
    }, [searchQuery, setBooks]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search books"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <ul>
                {Array.isArray(books) && books.length > 0 ? (
                    books.map((book) => (
                        <li key={book.id}>{book.title}</li>
                    ))
                ) : (
                    <li>No books found</li>
                )}
            </ul>
        </div>
    );
};

export default BookSearch;

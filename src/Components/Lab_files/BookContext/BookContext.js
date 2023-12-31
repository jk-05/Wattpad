import React, { createContext, useState, useContext } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [books, setBooks] = useState([]); // Include books state and setBooks function

    const value = {
        searchQuery,
        setSearchQuery,
        books, // Include books state
        setBooks, // Include setBooks function
    };

    return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export const useBookContext = () => {
    return useContext(BookContext);
};

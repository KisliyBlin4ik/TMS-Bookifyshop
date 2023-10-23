import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

// Пример списка книг для автодополнения
const books = [
  'Book 1',
  'Book 2',
  'Book 3',
  'Book 4',
  'Book 5',
  // Другие книги
];

const SearchWithAutosuggest = ({ newValue2}: any) => {
    
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const onChange = (event: any, { newValue }: any) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }: any) => {
    // Здесь вы можете выполнить запрос к вашему API для получения совпадающих книг
    const inputValue = value.trim().toLowerCase();
    const filteredBooks = books.filter(book => book.toLowerCase().includes(inputValue));
    setSuggestions(filteredBooks.slice(0, 5)); // Ограничьте список до 5 совпадений
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion: any) => suggestion;

  const renderSuggestion = (suggestion: any) => <div>{suggestion}</div>;

  const inputProps = {
    placeholder: 'Поиск книг',
    value,
    onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default SearchWithAutosuggest;

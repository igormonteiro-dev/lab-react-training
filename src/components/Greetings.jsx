import React from 'react';

const Greetings = ({ lang, children }) => {
  function chosenLanguage(lang) {
    const langs = {
      de: 'Hallo',
      en: 'Hello',
      es: 'Hola',
      fr: 'Bonjour',
    };
    return langs[lang];
  }
  return (
    <div className="container">
      <span>
        {chosenLanguage(lang)} {children}
      </span>
    </div>
  );
};

export default Greetings;

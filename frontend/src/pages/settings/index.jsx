import React, { useState, useEffect } from 'react';

function Settings() {
  const [theme, setTheme] = useState('light'); 
  const [language, setLanguage] = useState('en'); 
  const [error, setError] = useState(null); 

  // Load theme and language preferences from local storage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const storedLanguage = localStorage.getItem('language');
    if (storedTheme) setTheme(storedTheme);
    if (storedLanguage) setLanguage(storedLanguage);
  }, []);

  // Update local storage when theme or language changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('language', language);
  }, [theme, language]);

  // Handle theme change event
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  // Handle language change event
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  
  // Apply selected theme
  const handleThemeUpdate = () => {
    const rootElement = document.documentElement;
    switch (theme) {
      case 'light':
        rootElement.classList.remove('dark');
        break;
      case 'dark':
        rootElement.classList.add('dark');
        break;
      default:
        setError('Invalid theme selection');
    }
  };


  // Update theme when theme state changes
  useEffect(() => {
    handleThemeUpdate(); 
  }, [theme]); 

  return (
    <div className="settings">
      <h2>Settings</h2>
      {error && <div className="error">{error}</div>}
      <form>
        <label htmlFor="theme">Theme:</label>
        <select id="theme" value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <label htmlFor="language">Language:</label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </form>
      <button onClick={handleThemeUpdate}>Apply Theme</button>
    </div>
  );
}

export default Settings;

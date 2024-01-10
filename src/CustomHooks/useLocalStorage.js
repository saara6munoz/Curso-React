import React from "react";
//implementación de lógica "Custom Hooks"
//useMethod es una convención de nomenclatura para los Custom Hooks
 function useLocalStorage(itemName, initialValue){ //para que llegue el nombre del item que almacena LocalStorage y acceder a el  
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItems;

  if (!localStorageItem) { //por si no existe nada en el localstorage 
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = [];
  } else { //si existe parseamos para que lo use js
    parsedItems = JSON.parse(localStorageItem);
  }

  const [Item, setItem] = React.useState(parsedItems);

    //almacenamos el LocalStorage y el estado
  const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  };

  return [Item, saveItem];
 }

 export { useLocalStorage };
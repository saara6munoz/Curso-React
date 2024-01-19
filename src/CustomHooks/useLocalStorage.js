import React from "react";
//implementación de lógica "Custom Hooks"
//useMethod es una convención de nomenclatura para los Custom Hooks
//para que llegue el nombre del item que almacena LocalStorage y acceder a el  

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  });

 // const [Item, setItem] = React.useState(parsedItems);

    //almacenamos el LocalStorage y el estado
  const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  };
//devolvemos un objeto ya que como array estamos obligados a recordar la posición y se vueleve engorroso
  return {
    item,
    saveItem,
    loading,
    error,
  };
 }

 export { useLocalStorage };
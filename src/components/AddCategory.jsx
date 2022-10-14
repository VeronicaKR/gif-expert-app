import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const OnInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <=1)return;

        console.log(inputValue)
        //setCategories(categories => [inputValue,...categories])
        setInputValue('');
        onNewCategory(inputValue.trim());
        
    }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={OnInputChange} 
        
        />
        
        </form>
  )
}

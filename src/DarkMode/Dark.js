import React,{useEffect,useState} from 'react'
import './dark.css'
function DarkMode() {
    const [theme, settheme] = useState(false);
    const handleClick = () => {
        settheme(!theme);
    }
   
    // The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.
    useEffect(() => {
        if (theme === true) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    })
    return (
        <div>
            <button onClick={handleClick}>{theme ? "light" : "dark"}</button>
            <h1>react  dark mode</h1>
        </div>
    )
}

export default DarkMode

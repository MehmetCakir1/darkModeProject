import React, { useEffect } from "react";
import { useState } from "react";
import articles from "../helpers/data";
import moment from "moment"
import { BsFillMoonStarsFill} from "react-icons/bs";

//to get the class given last from local storage

const getStorageTheme = () => {
    let theme = "light-theme";
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };

const Main = () => {
  const [data, setData] = useState(articles);
  const [theme,setTheme]=useState(getStorageTheme())
//   console.log(data);

const changeTheme=()=>{
    if (theme === 'light-theme') {
        setTheme('dark-theme');
      } else {
        setTheme('light-theme');
      }
}

useEffect(() => {
    //in order to give class to root element and store it in the local storage
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="mainContainer">
        <button onClick={changeTheme}><BsFillMoonStarsFill/></button>
      {data.map((item) => { 
        const { title, id, snippet, date, length } = item;
        return (
          <div key={id}>
            <h1 className="title">{title}</h1>
            <div className="dateDiv">
            <p className="date">{moment(date).format('dddd Do, YYYY')}</p>
              <p className="length">{length} min read</p>
            </div>
            <p className="snippet">{snippet}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Main;

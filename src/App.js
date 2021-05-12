import './App.css';
import {useEffect, useState} from "react";
import {CardList} from "./component/card-list/card-list";
import {SearchBox} from "./component/search-box/search-box";


function App() {
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        loadData();
    }, [monsters, searchField])


    const loadData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(user => setMonsters(user));
    }

    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    function handleChange(e) {
        {setSearchField(e.target.value)}
    }

    return (
        <div className="App">
            <SearchBox
                placeholder='search monsters'
                handleChange= {handleChange}
            />
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

export default App;

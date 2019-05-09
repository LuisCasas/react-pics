import React from 'react';
import SearchBar from './SearchBar';
import Canvas from './Canvas';

const App = () => {
    return (
    <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar />
        <Canvas />
    </div>
    );
}

export default App;
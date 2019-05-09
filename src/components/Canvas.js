import React from 'react';

const moveUpAction = () => {
    console.log('Move up');
}

const Canvas = () => {
    return(
        <div>
            <button onClick={moveUpAction}>Move Up</button>
        </div>
    );
};

export default Canvas;
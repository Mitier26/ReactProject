import React from 'react';

const Child = ({ todo }) => {
    console.log('i am Child');
    return <div>Child:{todo.changedTodo}</div>;
};

export default React.memo(Child);

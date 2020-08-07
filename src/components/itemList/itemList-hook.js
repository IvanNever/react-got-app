import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const ListGroupItem = styled.li`
    cursor: pointer;
`

function ItemList({getData, onItemSelected, renderItem}) {

    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
            .then((data) => {
                updateList(data)
            })
    }, [])

    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = renderItem(item);

            return (
                <ListGroupItem
                    className='list-group-item'
                    key={id}
                    onClick={() => onItemSelected(id)}>
                    {label}
                </ListGroupItem>
            )
        })
    }

    if (!itemList) {
        return <Spinner/>
    }

    const items = renderItems(itemList);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

export default ItemList;
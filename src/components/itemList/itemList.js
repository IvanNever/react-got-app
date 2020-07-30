import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const ListGroupItem = styled.li`
    cursor: pointer;
`

export default class ItemList extends Component {

    state = {
        itemList: null,
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);

            return (
                <ListGroupItem
                    className='list-group-item'
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </ListGroupItem>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
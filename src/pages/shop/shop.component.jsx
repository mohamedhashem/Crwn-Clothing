import React from 'react'

import ShopData from "./shop-data";

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: ShopData
        }
    }

    render() {
        const collections = this.state.collection;
        return (
            <div>
                {
                    collections.map(({ id, title, items }) => (
                        <CollectionPreview key={id} title={title} items={items} />
                    ))
                }
            </div>
        )
    }

}

export default ShopPage;
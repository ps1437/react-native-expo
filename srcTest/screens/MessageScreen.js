import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../component/ListItem';
import Screen from '../component/Screen';
import ListItemSeperator from '../component/ListItemSeperator';
import ListItemDeleteAction from '../component/ListItemDeleteAction';

const message = [
    {
        id: 1,
        title: "Shoes",
        description: "D1",
        image: require('../asset/jacket.jpg')
    },
    {
        id: 2,
        title: "Shoes",
        description: "D1",
        image: require('../asset/jacket.jpg')
    },
]

function MessageScreen() {
    return (
        <Screen>
            <FlatList
                data={message}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => <ListItem
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    renderRightActions={ListItemDeleteAction}
                />}
                ItemSeparatorComponent={ListItemSeperator}
            />
        </Screen>
    );
}



export default MessageScreen;
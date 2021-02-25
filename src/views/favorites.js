import {
    CardGrid,
    ContentCard,
    Group,
    Panel,
    PanelHeader,
    Placeholder,
    View,
} from "@vkontakte/vkui"

import {
    Icon56FavoriteOutline,
} from "@vkontakte/icons"

function Favorites({ id }) {
    return (
        <View id={id} activePanel="favorite_coffeehouses">
            <Panel id="favorite_coffeehouses">
                <PanelHeader>Избранные кофейни</PanelHeader>

                <Group>
                    <CardGrid size="l">
                        <ContentCard
                            image="https://sun9-2.userapi.com/s/v1/if1/Z8CisNtAyggE_sCEoj2ad3b2d2rL4MTdK74AqBDvcW_dUZ8AP649gMyYQyi14sMmkurgKvh4.jpg?size=100x0&quality=96&crop=0,0,2048,2048&ava=1"
                            header="Название кофейни"
                            text="Адрес кофейни"
                            maxHeight={144}
                        />
                    </CardGrid>

                    <Placeholder icon={<Icon56FavoriteOutline />}>Добавьте часто вами посещаемые кофейни в избранное!</Placeholder>
                </Group>
            </Panel>
        </View>
    )
}

export default Favorites

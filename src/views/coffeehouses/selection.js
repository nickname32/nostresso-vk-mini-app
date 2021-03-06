import {
    useEffect,
    useState,
} from 'react'

import PropTypes from 'prop-types'

import {
    Avatar,
    CardGrid,
    ContentCard,
    Group,
    Panel,
    PanelHeader,
    Search,
    Tabs,
    TabsItem,
} from '@vkontakte/vkui'

import {
    Map,
    Overlay,
} from 'pigeon-maps'

import {
    getCoffeehouses
} from '../../backend-api'

import router from '../../router'

function Selection({ id,setUserOrder }) {
    const [activeTab, setActiveTab] = useState('map')
    const [coffeehouses, setCoffeehouses] = useState([])
    const [searchString, setSearchString] = useState('')

    useEffect(() => {
        const fetchCoffeehouses = async () => {
            setCoffeehouses(await getCoffeehouses())
        }
        fetchCoffeehouses()
    }, [])

    return (
        <Panel id={id}>
            <PanelHeader separator={false}><Tabs>
                <TabsItem
                    onClick={() => {
                        setActiveTab('map')
                    }}
                    selected={activeTab === 'map'}
                >
                    Карта
                </TabsItem>
                <TabsItem
                    onClick={() => {
                        setActiveTab('list')
                    }}
                    selected={activeTab === 'list'}
                >
                    Список
                </TabsItem>
            </Tabs></PanelHeader>

            <Search
                after={null}
                onChange={(e) => {
                    setSearchString(e.target.value.trim().toLowerCase())
                }}
            />

            {(() => {
                switch (activeTab) {
                    case 'map':
                        return (
                            <div style={{ position: 'absolute', top: 108, bottom: 48, left: 0, right: 0 }}>
                                <Map
                                    provider={(x, y, z) => `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`}
                                    defaultCenter={[59.9386300, 30.3141300]} // Санкт-Петербукрг
                                    defaultZoom={10}
                                >
                                    {coffeehouses.map(coffeehouse => {
                                        let str = (coffeehouse.address + " " + coffeehouse.name).toLowerCase()
                                        if (str.indexOf(searchString) === -1) {
                                            return null
                                        }

                                        return (
                                            <Overlay
                                                key={`${coffeehouse.name} ${coffeehouse.address}`}
                                                anchor={coffeehouse.coordinates}
                                            >
                                                <Avatar
                                                    src={coffeehouse.image}
                                                    onClick={() => {
                                                        setUserOrder([])
                                                        router.go('coffeehouses.menu')
                                                    }}
                                                />
                                            </Overlay>
                                        )
                                    })}
                                </Map>
                            </div>
                        )
                    case 'list':
                        return (
                            <Group>
                                <CardGrid size="m">
                                    {coffeehouses.map(coffeehouse => {
                                        let str = (coffeehouse.address + " " + coffeehouse.name).toLowerCase()
                                        if (str.indexOf(searchString) === -1) {
                                            return null
                                        }

                                        return (
                                            <ContentCard
                                                key={`${coffeehouse.name} ${coffeehouse.address}`}
                                                image={coffeehouse.image}
                                                header={coffeehouse.name}
                                                text={coffeehouse.address}
                                                maxHeight={144}
                                                onClick={() => {
                                                    setUserOrder([])
                                                    router.go('coffeehouses.menu')
                                                }}
                                            />
                                        )
                                    })}
                                </CardGrid>
                            </Group>
                        )
                    default:
                        return null
                }
            })()}
        </Panel>
    )
}

Selection.propTypes = {
    id: PropTypes.string.isRequired,
    setUserOrder: PropTypes.func.isRequired,
}

export default Selection


import { ChangeEvent, Fragment, useEffect, useState, } from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../app/hooks"
import { getListData } from "../../features/listSlice/listSlice"
import { Button } from "../reusable-components/button"
import { Title } from "../reusable-components/title"
import FilterForm from "./filter/form"
import ItemContainer from "./item/itemContainer"

export const ListContainer = () => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const { forms, data, count } = useAppSelector(({ listSlice }) => ({
        data: listSlice.data,
        forms: listSlice.filters.params,
        count: listSlice.filters.count.intervalCount,
    }))

    useEffect(() => {

        const interval = setInterval(() => {

            dispatch(getListData(forms))

        }, count ? parseInt(count) : 3000)

        return () => clearInterval(interval);

    }, [dispatch, count, forms])

  


    return (
        <div className="list" onClick={() => setIsOpen(false)}>
            <div className="list--container">
                <Title>
                    Watchlist Name
                </Title>
                <div className="list--container--button_container">
                    <Button type="button" className="list--container--button_container--refresh" onClick={() => window.location.reload()} >
                        Refresh
                    </Button>
                    <Button type="button" className="list--container--button_container--filter" onClick={(e: ChangeEvent<HTMLButtonElement>) => {
                        setIsOpen(true)
                        e.stopPropagation()
                    }}>
                        Filters
                        {isOpen && (
                                <FilterForm  setIsOpen={setIsOpen}/>
                            )}
                    </Button>
                </div>
                <div className="list--container--items">
                    {data.map(item => (
                            <Fragment key={item.id}>
                                <ItemContainer {...item} />
                            </Fragment>
                        ))}
                </div>
            </div>
            <div className="list--placheholder"></div>
        </div>
    )
}
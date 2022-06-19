import { FC, useState } from "react"
import { DataType } from "../../../features/listSlice/model"
import Arrow from "../../svg-icons/arrow"


const ItemContainer: FC<DataType> = ({
    title,
    description,
    domain_cached_large_logo_url,
    domain_cached_logo_url,
    domain_name,
    old_score
}) => {
    const [isOpenDescription, setIsOpenDescription] = useState(false)
    return (
        <div className={`item_container ${isOpenDescription ? 'open' : ''}`}>
            <div className="item_container--components">
                <div className="item_container--image">
                    <img src={`${domain_cached_large_logo_url}`} alt="" />
                </div>
                <div className="item_container--description">
                    <div className="item_container--description--text">{title}</div>
                    {isOpenDescription && (
                            <div className="item_container--description--title--closed_description">
                                {description}
                            </div>
                        )}
                    <div className="item_container--description--title">
                        <div className="item_container--description--title--icon">
                            <img src={domain_cached_logo_url} alt="" />
                        </div>
                        <div className="item_container--description--title--text">
                            {domain_name}
                        </div>
                        <div className="item_container--description--title--hour">

                        </div>

                    </div>
                </div>
            </div>
            <div className="item_container--arrow">
                <div className="item_container--arrow--procent">
                    {old_score} %
                </div>
                <div
                    className='item_container--arrow--icon'
                    onClick={() => setIsOpenDescription((prev) => !prev)}
                >
                    <Arrow />
                </div>
            </div>
        </div>
    )
}

export default ItemContainer
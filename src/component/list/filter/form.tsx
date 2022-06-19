import { useFormik } from "formik";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { getListData, setIntervalCount, setParams } from "../../../features/listSlice/listSlice";
import { Button } from "../../reusable-components/button"
import MultipleSelect from "../../reusable-components/select"
import { AutorefreshInputData, languagesInoutData, orderInoutData } from "../select-values/select";

type FilterFormProps = {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const FilterForm: FC<FilterFormProps> = ({ setIsOpen }) => {

    const dispatch = useDispatch()
    const [currectInterval, setCurrectInterval] = useState('')
    const [lang, setLang] = useState<any>([])
    const [langResult, setLangResult] = useState('')
    const { page_token, limit } = useAppSelector(({ listSlice }) => ({
        page_token: listSlice.filters.params.page_token,
        limit: listSlice.filters.params.limit,
    }))
    const formik = useFormik({
        initialValues: {
            intervalCount: '',
            order: [],
            language: '',
        },

        onSubmit: values => {
            console.log(values.order, 'values');
            let orederValue = values.order.join(',')
            let result = {
                order: orederValue,
                languages: langResult,
                page_token: page_token,
                limit: limit
            }
            dispatch(getListData(result))
            dispatch(setParams(result))
            dispatch(setIntervalCount(currectInterval))
            setIsOpen((prev: boolean) => !prev)
        }
    });

    const handleChacgeLanguage = (ln: string) => {
        let clone = [...lang]
        if (!lang.includes(ln)) {
            clone.push(ln)
        } else {
            let index = lang.indexOf(ln)
            clone.splice(index, 1)
        }
        let result = clone.join(',')
        setLangResult(result)
        setLang(clone)
    }



    return <div className="filter_form">
        <form onSubmit={formik.handleSubmit} >
            <MultipleSelect
                setCurrect={setCurrectInterval}
                onChange={formik.handleChange}
                name={'intervalCount'}
                isCheck={false}
                content={AutorefreshInputData}
                placheholder={'AUTOREFRESH'}

            />
            <MultipleSelect
                onChange={formik.handleChange}
                name={'order'}
                isCheck={true}
                content={orderInoutData}
                placheholder={'ORDER'}
            />
            <MultipleSelect
                setCurrect={handleChacgeLanguage}
                onChange={formik.handleChange}
                name={'language'}
                isCheck={true}
                content={languagesInoutData}
                placheholder={'LANGUAGES'}
            />
            <Button className="filter_form--submit" type="submit">
                REST
            </Button>
        </form>
    </div>
}

export default FilterForm
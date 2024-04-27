import { useEffect, useMemo, useState } from "react"
import ApiService from "../services/api.service"
import IModel from "../models/IModel"

interface IHookProps {
    Service: new () => ApiService<IModel>
}

const useService = ({ Service }: IHookProps) => {
    const service = useMemo(() => new Service(), [])
    const [elements, setElements] = useState<IModel[]>([])
    useEffect(() => {
        service.getAllElements()
            .then(res => {
                setElements(res.results)
            })
    }, [])
    return elements
}

export default useService
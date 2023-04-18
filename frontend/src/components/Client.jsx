
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getTestThunk } from "../store/testThunks";

const Client = () => {

    const dispatch = useDispatch();
    const test = useSelector((state) => state.test);

    useEffect(() => {
        dispatch(getTestThunk());
    }, []);

    return (
        <div>
            testing state: {test.list.map((element, i) => (<div key={i}>{element}</div>))}
        </div>
    )
}

export default Client;
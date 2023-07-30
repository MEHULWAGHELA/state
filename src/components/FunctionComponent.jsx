import { Fragment, useState } from "react"

const FunctionComponent = () => {
    let [count, setCount] = useState({ a: 70 })
    let [number, setNumber] = useState(50)
    const [array, setarray] = useState([10, 20, 30])
    setTimeout(() => {
        count.a = count.a + 1
        count = {
            ...count
        }
        array.push(50)
        console.log(array)
        setarray([...array])
        number += 1
        setNumber(number)
    }, 2000)

    return (
        <Fragment>
            <h1>Function Component</h1>
            <h1>{array}</h1>
            <h1>{count.a}</h1>
            <h1>{number}</h1>
        </Fragment>
    )
}
export default FunctionComponent
import { Component, Fragment } from 'react'
class ClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            number: 123,
            arr: [100]
        }

        setInterval(() => {
            this.state.arr.push("oscar")
            console.log(this.state.arr)
            this.setState({
                number:
                    this.state.number
            })
        }, 3000);
    }
    render() {
        return (
            <Fragment>
                <h1>{this.state.number}</h1>
                <h1>{this.state.arr}</h1>
                <h1>Hello</h1>
            </Fragment>
        )
    }
}
export default ClassComponent
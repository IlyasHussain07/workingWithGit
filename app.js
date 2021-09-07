

// function SimpleReactComponent() {

//     return (
//         <div style={{ "text-alignment": "center" }}>
//             <h1>Hello Ilyas </h1>
//         </div>
//     )
// }

class ClassComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            count: 0
        }

    }

    Increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    Decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div className='header__master'>
                <div className='profile'>
                    <span>Count : {this.state.count}</span>
                    <button className='btn add' onClick={() => this.Increment()} >+</button>
                    <button className='btn remove' onClick={() => this.Decrement()} >x</button>
                </div>
            </div>
        );
    }
}



ReactDOM.render(
    <div>
        <ClassComponent />
        {/* <SimpleReactComponent /> */}
    </div>
    , document.getElementById('root')
)



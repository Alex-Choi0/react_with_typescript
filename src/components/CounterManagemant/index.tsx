import axios from 'axios';
import React, { useSyncExternalStore } from 'react'
import { CounterManagementProps, CounterManagementState } from './interface';

class CounterManagment extends React.Component<CounterManagementProps, CounterManagementState>{

    constructor(props : CounterManagementProps){
        super(props);

        this.state = {
            counter : 0,
            users : []
        }

        console.log('constructor')
    }

    handleAddClick(){
        console.log('handleAddClick')
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleMinusClick(){
        console.log('handleMinusClick')
        this.setState({
            counter: this.state.counter - 1
        })
    }

    static getDerivedStateFromProps(props: CounterManagementProps, state : CounterManagementState){
        console.log('getDerivedStateFromProps');
        return null
        // return props.ownerName === "Rysh" ? {counter : 5} : null;
    }

    clickWindow = () => {
        console.log('clickWindow Event occur')
        this.setState({counter : this.state.counter + 1})
    }

    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=2')
        .then(res => {
            console.log("axios get request", res.data);
            this.setState({
                users : res.data.data.map((userData : any) => userData.first_name)
            })
        })

        window.addEventListener('click', this.clickWindow)
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.clickWindow)
    }

    render(): React.ReactNode {
        console.log('render')
        const {ownerName} = this.props;
        const {counter, users} = this.state;
        return (
            <div>
                <h1>Counter Management</h1>
                <h2>Owner Name : {ownerName}</h2>
                <h3>Counter : {counter}</h3>
                <button onClick={() => this.handleAddClick()}>Add</button>
                <button onClick={() => this.handleMinusClick()}>Minus</button>
                <ul>
                    {users.map(ele => <li>{ele}</li>)}
                </ul>
            </div>
        )
    }

}

export default CounterManagment
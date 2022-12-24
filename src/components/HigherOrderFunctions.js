import React, { Component } from "react";

class HigherOrderFunctions extends Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        };
    }

    ResultList({data}) {
        console.log(data)
        return (
            <ul>
                {data.map((elt) => {
                    return (
                        <li className="list-elements" key={elt.id}>
                            <span>Id: {elt.id}</span>
                            <span>Name : {elt.name}</span>
                            <span>User Type: {elt.user_type}</span>
                        </li>
                    );
                })}
            </ul>
        );
    }

    ResultFragment({title, children}) {
        return (
            <React.Fragment>
                <h1>{title}</h1>
                <div className="display-box">{children}</div>
            </React.Fragment>
        );
    }

    FilterType({data,type}) {
        let filterData = data.filter((elt) => elt.user_type === type);
        return <this.ResultList data={filterData}/>;
    }

    // FilterLetter({letter}) {
    //     let filterData = this.state.userData.filter((elt) => elt.name[0] === letter);
    //     return <this.ResultList data={filterData} />;
    // }

    // FilterAge() {
    //     let filterData = this.state.userData.filter((elt) => {
    //         return elt.age>28&&elt.age<=50
    //     });
    //     return <this.ResultList data={filterData}/>;
    // }

    // SumTypeYears({type}){
    //     return this.state.userData
    //         .filter((elt) => elt.user_type === type)
    //         .reduce((sum, elt) => {
    //             return sum + elt.years;
    //         }, 0);
    // }

    render() {
        console.log("sdx",this.state.userData);
        return (
            <div>
                <this.ResultFragment title="Display all items">
                    <this.ResultList data={this.state.userData} />
                </this.ResultFragment>
                {/* <this.ResultFragment title="Display Based on User Type">
                    <this.FilterType data={this.state.userData} type="Designer" />
                </this.ResultFragment> */}
                {/* <this.ResultFragment title="Filter All data starting with letter J">
                    <this.FilterLetter letter="J" />
                </this.ResultFragment> */}
                {/* <this.ResultFragment title="Filter all data based on age greater than 28 and age less than or equal to 50">
                    <this.FilterAge />
                </this.ResultFragment> */}
                {/* <this.ResultFragment title="Find the total years of the designers">
                    <this.SumTypeYears type="Designer" />
                </this.ResultFragment> */}
            </div>
        );
    }
}

export default HigherOrderFunctions
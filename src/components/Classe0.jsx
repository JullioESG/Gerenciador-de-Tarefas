import React from "react";

class Classe0 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "hello world!",
        };
    }
    render() {
        return <h1>{this.state.message}</h1>;
    }
}

export default Classe0;
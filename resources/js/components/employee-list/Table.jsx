import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import { ToastContainer, toast } from "react-toastify";
import CreateModal from "./Modals/CreateModal";

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        };
    }

    // Life cycle method
    componentDidMount() {
        this.getEmployeeList();
    }

    // Get Employee list
    getEmployeeList = () => {
        let self = this;

        axios.get("/get/employees/list").then(function (response) {
            self.setState({
                employees: response.data,
            });
        });
    };

    render() {
        return (
            <div className="container">
                <ToastContainer />
                <CreateModal />
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nr</th>
                            <th scope="col">Name</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(function (x, i) {
                            return <TableRow key={i} data={x} />;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;

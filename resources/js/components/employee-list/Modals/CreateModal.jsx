import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";

class CreateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null,
        };
    }

    // Creating employee name state
    createEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        });
    };

    // Creating employee salary state
    createEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        });
    };

    // Storing Employee data
    storeEmployeeData = () => {
        axios
            .post("/store/employee/data", {
                employeeName: this.state.employeeName,
                employeeSalary: this.state.employeeSalary,
            })
            .then(() => {
                toast.success("Employee saved successfully");

                setTimeout(() => {
                    location.reload();
                }, 2500);
            });
    };

    render() {
        return (
            <>
                <div className="row text-center mb-3 pb-3">
                    <button
                        className="btn btn-success text-center col-3"
                        data-bs-toggle="modal"
                        data-bs-target="#createModal"
                    >
                        Add New Employee
                    </button>
                </div>

                <div
                    className="modal fade"
                    id="createModal"
                    tabindex="-1"
                    aria-labelledby="createModal"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5">
                                    <strong>Employee Details</strong>
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form classNameName="form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="employeeName"
                                            className="input mb-2 form-control"
                                            placeholder="Employee Name"
                                            onChange={this.createEmployeeName}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="employeeSalary"
                                            className="input mb-2 form-control"
                                            placeholder="Employee Salary"
                                            onChange={this.createEmployeeSalary}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <input
                                    type="button"
                                    className="btn btn-success"
                                    value="Save"
                                    onClick={this.storeEmployeeData}
                                />

                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CreateModal;

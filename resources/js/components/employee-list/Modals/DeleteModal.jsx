import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";

class DeleteModal extends Component {
    constructor(props) {
        super(props);
    }

    // Delete function for employee data
    deleteEmployeeData = (employee) => {
        axios.delete("/delete/employee/data/" + employee).then(() => {
            toast.error("Employee deleted successfully");

            setTimeout(() => {
                location.reload();
            }, 2500);
        });
    };

    render() {
        return (
            <div
                className="modal fade"
                id={"deleteModal" + this.props.modalId}
                tabindex="-1"
                aria-labelledby="deleteModal"
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
                            Are you sure, You want to delete this Employee data?
                            This cannot be reversed.
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>

                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    this.deleteEmployeeData(this.props.modalId);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteModal;

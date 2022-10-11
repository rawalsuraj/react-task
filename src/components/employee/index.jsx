import React, { useEffect, useState } from 'react'
import { MasterAPICall } from '../../api/master.api';
import { Button, message, Table } from 'antd'
import { useHistory } from 'react-router-dom';

export const EmployeeLists = () => {
    const [items, setItems] = useState([]);
    const history = useHistory();
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Date Of Birth',
            dataIndex: 'dob',
            key: 'dob',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => {
                return (
                    <React.Fragment>
                        <a>Delete</a>
                    </React.Fragment>
                )
            },
        },
    ];

    useEffect(() => {
        getEmployeeList()
    }, [])

    const getEmployeeList = () => {
        const url = "/employees";
        const method = 'get';
        MasterAPICall(url, method)
            .then((data) => {
                const employees = data.data.map(item => item.key = item.id);
                setItems(employees)
            })
            .catch((error) => {
                message(error?.message);
            });
    }

    return (
        <div>
            <Button
                onClick={() => {
                    history.push('/add')
                }}
                type="primary"
                style={{
                    marginBottom: 16,
                }}
            >
                Add Employee
            </Button>
            <Table dataSource={items} columns={columns} />
        </div>
    )
}

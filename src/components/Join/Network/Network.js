import { useState } from "react"
import { useLayoutEffect } from "react"

function UsersList({ Users }) {
    return (
        <div className="usersTable">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Country</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Users.map((user) => {

                            return (
                                <tr>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.county}</td>
                                    <td>{user.password}</td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

function Newtwork() {
    const [users, setUsers] = useState()

    const getUsers = function () {
        const uri = 'https://trfapi.000webhostapp.com/getUsers.php'
        const params = {
            method: 'GET',
        };

        fetch(uri, params)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((err) => console.log(err))

    }

    useLayoutEffect(() => {
        getUsers();
    }, []);

    if (users) {
        return (
            <div>
                <h1 className="mb-4">Users List</h1>
                <UsersList Users={users} />
            </div>
        )
    }
    else {
        return (
            <div>
                <h1 className="mb-4">Users List</h1>
                <h3> There is no users in our network</h3>
            </div>
        )
    }

}

export default Newtwork
import React from "react";
import useFetch from "./Custom_Hooks/useFetch";

function UsersList() {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default UsersList;

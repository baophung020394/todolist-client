import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import { fetchUSers } from '../redux';
import { Button, DatePicker, version } from "antd";

function UserContainer({ userData, fetchUSers }) {
    useEffect(() => {
        fetchUSers()
    }, [])
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
    <h2>{userData.error}</h2>
    ) : (
        <div>
            <h1>antd version: {version}</h1>
            <Button type="primary" style={{ marginLeft: 8 }}>
                        Primary Button
            </Button>

            <h2>User List </h2>
            <div>
                {userData && 
                    userData.users &&
                    userData.users.map(user => <p>{user.name}</p>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        userData: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUSers: () => dispatch(fetchUSers())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer)

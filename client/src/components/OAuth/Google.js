import {Redirect} from 'react-router-dom';

const Google = (props) => {
    const id = props.routerProps.match.params.username;
    localStorage.setItem("username", id);
    return <Redirect to={`/profile/${id}`} />
}

export default Google;
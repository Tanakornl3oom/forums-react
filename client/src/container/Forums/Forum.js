import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CoreService from '../../service/CoreService';

function Forum(props) {
    const [forum, setForum] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        const { data } = await CoreService.getContentById(
            props.match.params.id
        );
        setForum(data.data);
        setIsLoading(false);
    };

    return (
        <Fragment>
            <NavLink to={'/forums'}>Back</NavLink>
            Forum id {`${props.match.params.id}`}
            <br />
            <Fragment>
                {isLoading ? (
                    <Fragment>Loading .....</Fragment>
                ) : (
                    <Fragment> id : {forum._id}</Fragment>
                )}
            </Fragment>
        </Fragment>
    );
}

export default Forum;

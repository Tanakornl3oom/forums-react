import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CoreService from '../../service/CoreService';

function Forum(props) {
    const [forum, setForum] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchContent = async id => {
        const { data } = await CoreService.getContentById(id);
        setForum(data.data);
        setIsLoading(false);
    };

    useEffect(() => {
        const { id } = props.match.params;
        fetchContent(id);
    }, [props.match.params]);

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

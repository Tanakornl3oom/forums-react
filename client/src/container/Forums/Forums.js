import React, { Fragment, useEffect, useState } from 'react';
import CardForums from '../../component/Card/CardForums';
import CoreService from '../../service/CoreService';

function Forums() {
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchContents();
    }, []);

    const fetchContents = async () => {
        const { data } = await CoreService.getAllContents();
        setDatas(data.data);
        setIsLoading(false);
    };

    const renderCardForum = () => {
        return datas.map((data, index) => {
            if (data.isActive)
                return (
                    <CardForums
                        id={data._id}
                        key={index}
                        title={data.title}
                        content={data.content}
                        tags={data.tags}
                    />
                );
            return <Fragment key={index} />;
        });
    };

    return !isLoading ? (
        <Fragment>
            <div>Forums</div>
            {renderCardForum()}
        </Fragment>
    ) : (
        <Fragment>Loading .....</Fragment>
    );
}

export default Forums;

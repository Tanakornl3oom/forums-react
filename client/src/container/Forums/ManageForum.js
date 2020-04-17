import React, { Fragment, useState } from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Button,
    CardHeader,
    Typography,
    TextField,
    Chip
} from '@material-ui/core';

import CoreService from '../../service/CoreService';

function ManageForum() {
    const [forum, setForum] = useState({});
    const [tag, setTag] = useState('');

    const handleChange = ({ target }) => {
        const { name, value } = target;

        forum[name] = value;
        setForum(forum);
    };

    const handleTag = ({ target }) => {
        const { value } = target;

        setTag(value);
    };

    const handdleOnKeyDown = ({ key }) => {
        if (key === 'Enter') {
            let tags = forum.tags || [];
            if (!(tags.indexOf(tag) > -1)) tags.push(tag);
            else alert('same tag');

            setForum({ ...forum, tags });
            setTag('');
        }
    };

    const handleDelete = tagChip => {
        let tags = forum.tags;
        tags = tags.filter(tag => {
            return tag !== tagChip;
        });
        setForum({ ...forum, tags });
    };

    const renderChip = () => {
        if (forum.tags && forum.tags.length > 0)
            return forum.tags.map((tag, id) => {
                return (
                    <Chip
                        key={id}
                        size="small"
                        label={tag}
                        onDelete={() => {
                            handleDelete(tag);
                        }}
                    />
                );
            });
    };

    const onSubmit = async () => {
        try {
            await CoreService.saveContent(forum);
            alert('success');
        } catch (error) {
            console.log(error);
            alert('error');
        }
    };

    return (
        <Fragment>
            manage forum
            <Card>
                <CardHeader title="Create Content" />
                <CardContent>
                    <div>
                        <Typography component="span">Title</Typography>
                        <TextField name="title" onChange={handleChange} />
                    </div>

                    <div>
                        <Typography component="span">Content</Typography>
                        <TextField
                            name="content"
                            style={{ width: '50ch' }}
                            multiline
                            onChange={handleChange}
                            rows={4}
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <Typography component="span">Tags</Typography>
                        <TextField
                            name="tags"
                            value={tag}
                            onChange={handleTag}
                            onKeyDown={handdleOnKeyDown}
                        />
                        {forum.tags && renderChip()}
                    </div>
                </CardContent>
                <CardActions>
                    <Button color="secondary" size="small" onClick={onSubmit}>
                        create
                    </Button>
                </CardActions>
            </Card>
        </Fragment>
    );
}

export default ManageForum;

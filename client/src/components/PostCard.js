import React from 'react'
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes }}) {

    return (
        <Card>
            <Card.Content fluid>
                <Image
                    floated='right'
                    size='mini'
                    src='https://st4.depositphotos.com/5575514/23597/v/600/depositphotos_235978748-stock-illustration-neutral-profile-picture.jpg'
                />
                <Card.Header>{username}s</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
                <Card.Description>
                   {body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as='div' labelPosition='right'>
                    <Button color='green'>
                        <Icon name='heart' />
                    </Button>
                        <Label basic color='green' pointing='left'>
                            {likeCount}
                        </Label>
                </Button>
            </Card.Content>
        </Card>
    )
}

export default PostCard

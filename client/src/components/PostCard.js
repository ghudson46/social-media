import React from 'react'
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes }}) {

    const likePost = () => {
        console.log('like');
    }

    const commentOnPost = () => {
        console.log('comment')
    }

    return (
        <Card>
            <Card.Content fluid>
                <Image
                    floated='right'
                    size='mini'
                    src='https://st4.depositphotos.com/5575514/23597/v/600/depositphotos_235978748-stock-illustration-neutral-profile-picture.jpg'
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
                <Card.Description>
                   {body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra style={{display: 'flex', flexDirection: 'row'}}>
                <Button as='div' labelPosition='right' onClick={likePost}>
                    <Button color='green' basic>
                        <Icon name='heart' />
                    </Button>
                        <Label basic color='green' pointing='left'>
                            {likeCount}
                        </Label>
                </Button>
                <Button as='div' labelPosition='right' onClick={commentOnPost}>
                    <Button color='blue' basic>
                        <Icon name='comments' />
                    </Button>
                        <Label basic color='blue' pointing='left'>
                            {commentCount}
                        </Label>
                </Button>
            </Card.Content>
        </Card>
    )
}

export default PostCard

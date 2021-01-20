import React, { useContext } from 'react'
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes }}) {

    const { user } = useContext(AuthContext);


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
,               <LikeButton user={user} post={{ id, likes, likeCount }}/>


                <Button labelPosition='right' as={Link} to={`/posts/${id}`}>
                    <Button color='blue' basic>
                        <Icon name='comments' />
                    </Button>
                        <Label basic color='blue' pointing='left'>
                            {commentCount}
                        </Label>
                </Button>

                { user && user.username === username && (
                    <DeleteButton postId={id} />
                )} 
            </Card.Content>
        </Card>
    )
}

export default PostCard

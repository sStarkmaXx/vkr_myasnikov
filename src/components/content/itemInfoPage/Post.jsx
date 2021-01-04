import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import classes from './Post.module.css';



const Post = (props) => {
  let url = 'url(' + props.userImg + ')';
  return (
    <div className={classes.post}>
      <div className={classes.img} style={{backgroundImage: url}}></div>
      <div className={classes.name}>{props.userName}</div>
      <div className={classes.message}>{props.message}</div>
    </div>
  );
}

export default Post;

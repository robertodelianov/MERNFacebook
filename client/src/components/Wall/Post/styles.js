import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( () => ({
  Card: {
    maxWidth: '100%',
    height: '100%',
  },
  Media: {
    paddingTop: '100%',
  },
  Comment: {
    fontSize: '25px',
  },
  LikeButton: {
    fontSize: '17px',
    fontWeight: 'bold',
  },
  ByYouPost: {
    color: '#f50057',
    fontWeight: 'bold',
  },
  LikedPost: {
    color: 'red',
  },
}));

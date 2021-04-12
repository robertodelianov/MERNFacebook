import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( () => ({
  Container: {
    backgroundColor: '#f50057',
  },
  ButtonBack: {
    marginTop: '50px',
    marginBottom: '50px',
  },
  CircularProgress: {
    color: 'blue',
    marginTop: '50px',
    marginBottom: '50px',
  },
  DontHaveAPost: {
    marginTop: '20px',
    marginBottom: '20px',
    fontStyle: 'italic',
    fontSize: '25px',
    color: 'white',
  },
  CreatePostButton: {
    marginLeft: '25px',
    marginBottom: '20px',
  },
}));

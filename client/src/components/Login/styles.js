import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( () => ({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
  },
  Form: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightgreen',
    padding: '20px',
    borderTopRightRadius: '10%',
    borderBottomLeftRadius: '10%',
  },
  FormElements: {
    marginBottom: '15px',
  },
  LogIn: {
    marginTop: '25px',
  }
}));

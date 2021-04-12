import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( () => ({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
  },
  FormContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  FormElements: {
    marginTop: '20px',
    marginBottom: '20px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  Title: {
    display: 'block',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
}));

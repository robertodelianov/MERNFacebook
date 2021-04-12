import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( () => ({
  Container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  Appbar: {
    margin: '15px 0',
    borderRadius: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '10px solid #f50057',
  },
  Title: {
    fontSize: '70px',
  },
  TitleEffects: {
    color: '#f50057',
    fontSize: '80px',
    fontWeight: 'bold',
  },
  Appbar2:{
    display: 'grid',
    gridAutoFlow: 'column',
    width: '80%',
    borderBottom: '5px solid #1565c0',
    padding: '20px',
  },
  Title2: {
    fontSize: '35px',
    fontWeight: 'bold',
  },
  TitleEffects2: {
    color: '#f50057',
    fontSize: '25px',
  },
  ExitButton: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
}));

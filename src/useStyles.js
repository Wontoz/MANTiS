import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'fixed',
        top: 'left: 50%',
        width: 400,
        backgroundColor: "black",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: 15,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    scbutton: {
        background: 'linear-gradient(45deg, #FF5836 40%, #FF7F34 60%)',
        color: 'white'
    }
}));

export default useStyles;
import { Box, makeStyles } from "@material-ui/core";

//components
import Header from "./Components/Header";
import InfoHeader from "./Components/infoHeader";
import Articles from "./Components/Articles";

const useStyles = makeStyles(theme=>({
  header: {
    marginTop: 110,
    width:'59%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]:{
      width:'75%'
    },
    [theme.breakpoints.down('sm')]:{
      width:'85%'
    }
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box className = {classes.header}>
        <InfoHeader />
        <Articles/>
      </Box>
    </Box>
  );
}

export default App;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
  
    footer: {
      padding: theme.spacing(3, 2),
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    navTabs: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        
      },
      projectCard: {
        maxWidth: 830,
        height: 650,
        margin: theme.spacing(12, 0, 0)
      },
      projectMedia: {
        height: 500,
      },
      projectActions: {
        padding: theme.spacing(0, 0, 0),
      },
      carousel: {
        height: 1010,
        marginBottom: -70
      },
      listDivider: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        margin: theme.spacing(0, 0, 2),
      },
      contactForm: {
        '& > *': {
          margin: theme.spacing(10, 0, 12),
          padding: theme.spacing(10, 0, 12),
          
      }
    },
    homeCard: {
      height: 200,
      margin: theme.spacing(6, 0, 0)
    },
    subCard: {
      height: 230,
      margin: theme.spacing(2, 0, 2)
    },
    bioCard: {
      height: 230,
      margin: theme.spacing(2, 0, 2)
      
    },
    bioMedia: {
      height: 165,
      borderRadius: 5,
      margin: theme.spacing(-2.5, 0, 0)
     
    },
  }));

  export default useStyles
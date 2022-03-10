import Snackbar from 'react-native-snackbar';

const CustomSnackbar = (props) => {
  
  Snackbar.show({
    text: 'Hello world',
    duration: Snackbar.LENGTH_SHORT,

  });
};

export default CustomSnackbar;

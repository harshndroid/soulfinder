export default {
  main: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  backgroundImage: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    opacity: 0.6,
  },
  title: {
    textAlign: 'center',
    fontWeight: 600,
    marginTop: 50,
    fontStyle: 'italic',
  },
  bottomWrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fffffff2',
    borderTopLeftRadius: '40%',
    borderTopRightRadius: '40%',
  },
  input: {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: 30,
    marginTop: 24,
    width: '60%',
    fontSize: 13,
    padding: 8,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    width: '40%',
    marginBottom: 20,
  },
};

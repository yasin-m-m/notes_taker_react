const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  };
  const date = new Date();
  const year = date.getFullYear()
  return (
    <footer style={footerStyle}>
      <p>&copy; {year} Notes Taker. A Project By <a href="https://www.linkedin.com/in/yasinmm/" target="blank">Yasin M M</a></p>
    </footer>
  );
};

export default Footer;
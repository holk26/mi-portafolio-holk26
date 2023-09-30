const Footer = () => {
    return(
        <footer className="bg-gray-800 py-8">
        <div className="container mx-auto">
          <h1 className="text-center text-light">&copy; Homero Cabrera Araque</h1>
          <p className="text-center text-gray-400">All rights Reserverd {new Date().getFullYear()}</p>

        </div>
      </footer>
    )
}

export default Footer;
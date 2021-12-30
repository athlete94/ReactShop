const Footer = () => {
    return <footer class="page-footer grey darken-3">
      <div class="footer-copyright">
        <div class="container">
        © {(new Date()).getFullYear()} Copyright Text
        <a class="grey-text text-lighten-4 right" href="https://github.com/athlete94">Github</a>
        </div>
      </div>
    </footer>
        
}

export {Footer}
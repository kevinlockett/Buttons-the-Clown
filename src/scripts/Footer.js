export const Footer = () => {
    return `
        <div class="footer--left" >
            <img class="img img--footer" src="./img/locket_32_tny.png" alt="" />
            Copyright &copy; ${new Date().toLocaleDateString('en-US')} by Kevin Lockett
        </div>
        <div class="footer--right" >
            <a href="https://github.com/kevinlockett" target="blank"><img src="./img/github_white_tny.png" class="img img--github" alt=""></a>
        </div>
    `
}
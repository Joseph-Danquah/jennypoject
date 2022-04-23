function Page(){
    return(
        <div>
            <header>
            <nav>
              <img src="./accounts.png" width="40px"></img>
              <h1>Steps in becoming fullstack dev</h1>
            </nav>
            </header>
            <ol>
                <li>react is simple </li>
                <li>react is nice </li>
                <li>react is good </li>
            </ol>
            <footer>
                "@joegreat 2022 all right reserved"
            </footer>
        </div>
    )
}
ReactDOM.render(<Page/> ,document.getElementById("root"))
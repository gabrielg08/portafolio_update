function Designs() {
    return(
        <div className="grid grid-rows-2 justify-center min-w-96 bg-black mt-80">
            <div className="flex justify-center mt-52">
                <h2 className="text-[#5CAC0E] text-3xl p-0">TOP DESIGNS</h2>
            </div>
            <div className="grid grid-cols-1 gap-2 justify-center items-center md:grid-cols-3">
            <a href="https://fabulous-eclair-b74cb1.netlify.app/" target="_blank">
                <div className="flex justify-center">
                <img className="h-1/2 w-1/2" src="/public/pokedex.png" alt="" />
                </div>
                </a>


                <a href="https://lustrous-rugelach-931c5c.netlify.app/" target="_blank">
                <div className="flex justify-center">
                    <img className="h-1/2 w-1/2" src="/public/rick.png" alt="" />    
                </div>
                </a>
                
                <a href="https://thriving-pudding-ca1ed1.netlify.app/" target="_blank">
                <div className="flex justify-center">
                    <img className="h-1/2 w-1/2" src="/public/usuarios.png" alt="" />
                </div>
                </a>
            </div>
        </div>
    )
}

export default Designs;
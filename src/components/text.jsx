function Texto(){
    return(
        <div className="grid grid-rows-2 justify-center bg-black text-white w-full min-w-96 p-3 h-60">
            <div className="text-center p-4">
                <h2 className=" text-[#5CAC0E]">A programmer who</h2>
                <h3>jugdges a book <a className=" text-[#5CAC0E] underline"> cover...</a></h3>
                <p className="p-4">Because if the cover does not impress you what else can?</p>
            </div>
            <div className="flex justify-center mt-28 mb-80">
                <img className="w-13 h-8" src="/public/Flecha.png" alt="" />
            </div>
            
        </div>
    )
}

export default Texto;
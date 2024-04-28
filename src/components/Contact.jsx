function Contact(){
    return(
        <div className="grid grid-rows-2 justify-center w-screen mt-80">
            <h2 className="mt-20 text-2xl ">Talk whit me!</h2>
            <div className="mt-20 grid-rows-3 w-[800px] justify-center bg-[#5CAC0E]">
                <div className="grid grid-cols-2">
                <label htmlFor="fn">Full Name</label>
                <input type="text" id="fn"/>
                </div>
            </div>
        </div>
    )
}
export default Contact;
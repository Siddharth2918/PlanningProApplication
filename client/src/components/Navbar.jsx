const Navbar = ()=>{
    return(
        <div className="flex justify-between bg-blue-500 h-16 ">
            <div className="m-2 p-1 my-auto"><span>PlanningPro</span></div>
            <div className="m-2 p-1 my-auto">
                <span className="m-2">Home</span>
                <span className="m-2">Login</span>
            </div>
        </div>
    )
}

export default Navbar;
export default function Login() {
    return (
        <div className="h-full flex flex-col justify-center items-center border 1px solid">
            <div className="border 1px solid flex flex-col justify-center items-center w-11/12 h-full">
                <h1 className='text-4xl text-[#800020] border 1px solid'>Login</h1>
                <div className="flex flex-col w-9/12 my-5">
                    <label for="name" className="text-lg text-[#800020] font-bold">Username:</label>
                    <input type="text" id="name" name="name" className="rounded-lg"/>
                </div>
                <div className="flex flex-col w-9/12 my-5">
                    <label for="name" className="text-lg text-[#800020] font-bold">Password:</label>
                    <input type="password" id="pass" name="pass" className="rounded-lg"/>
                </div>
                <button className="px-5 py-2 bg-[#800020] text-white mt-5">Login</button>
            </div>
            
        </div>
    );
  }
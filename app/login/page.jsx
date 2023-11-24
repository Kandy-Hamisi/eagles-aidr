import Link from "next/link"
import { FaEnvelope, FaUserShield } from "react-icons/fa"

const Login = () => {
    return (
      <section className="max-container min-h-screen padding flex items-center justify-center relative bg-blue-100">
        <div className="bg-white shadow-xl w-[350px] md:w-[500px] padding">
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold">Aidr</h1>
            </div>
            <form className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-4 relative">
                    <label htmlFor="email" className="text-md ">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="youremail@gmail.com"
                        className="input"
                    />
                    <FaEnvelope className="text-blue-400 absolute right-0 mr-2 top-[35px]" />
                </div>
                <div className="flex flex-col space-y-4 relative">
                    <label htmlFor="email" className="text-md ">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="your password"
                        className="input"
                    />
                    <FaUserShield className="text-green-600 absolute right-0 mr-2 top-[35px]" />
                </div>
                <div className="flex items-center space-x-4">
                    <input type="checkbox" name="privacy" id="privacy" />
                    <p className="text-sm">I accept the <span className="text-blue-400">Terms & conditions</span></p>
                </div>
                <div className="flex items-center space-x-4">
                    <input type="checkbox" name="privacy" id="privacy" />
                    <p className="text-sm">I am a member or data collector of a humanitarian organization</p>
                </div>

                <div>
                    <button className="w-full bg-blue-400 text-white font-bold font-🇵alanquin p-2 rounded-md">Login</button>
                </div>
                <div className="flex justify-center">
                    <p className="text-sm font-palanquin">Not an Aidr member. <Link href="/register" className="cursor-pointer text-blue-400">Register</Link></p>
                </div>
            </form>
        </div>
      </section>
    )
  }
  
  export default Login
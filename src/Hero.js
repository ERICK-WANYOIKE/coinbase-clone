const Hero = () => {
    return (
      
        <header className="bg-white dark:bg-gray-800">
        <div className=" px-4 py-8  mx-auto lg:px-20 ">
            <div className="items-center lg:flex lg:px-8">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                         <div className="flex ">
                             <div>
                             <a
                             href="/"
                             aria-label="Company"
                             title="Company"
                             class="inline-flex items-center lg:mx-auto"
                           >
                           <svg width="20px" height="20px" viewBox="0.004 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M63.04 39.741c-4.274 17.143-21.638 27.575-38.783 23.301C7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.317 39.737.957c17.144 4.274 27.576 21.64 23.302 38.784z" fill="blue"/>
                           <path d="M46.11 27.441c.636-4.258-2.606-6.547-7.039-8.074l1.438-5.768-3.512-.875-1.4 5.616c-.922-.23-1.87-.447-2.812-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117l-.37-.092-2.297 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.139c.85.213 1.683.436 2.502.646l-1.453 5.835 3.507.875 1.44-5.772c.957.26 1.887.5 2.797.726L27.504 50.8l3.511.875 1.453-5.823c5.987 1.133 10.49.676 12.383-4.738 1.527-4.36-.075-6.875-3.225-8.516 2.294-.531 4.022-2.04 4.483-5.157zM38.087 38.69c-1.086 4.36-8.426 2.004-10.807 1.412l1.928-7.729c2.38.594 10.011 1.77 8.88 6.317zm1.085-11.312c-.99 3.966-7.1 1.951-9.083 1.457l1.748-7.01c1.983.494 8.367 1.416 7.335 5.553z" fill="#fff"/>
                           </svg>
                             <span class=" heroTitle ml-2 font-medium font-sans text-xs   hover:border-b-2 ">
                             Jump start your crypto portfolio
                             </span>
                           </a>
                         </div>
                         <div>
                            <svg className="w-8 h-6 px-2 " fill="blue" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                         </div>
                       </div>
                      <h1 className=" heroHeader text-4xl tracking-wide font-bold leading-none  font-sans lg:text-5xl lg:py-2 px-4">
                        Jump start 
                        <br/> 
                        your crypto 
                        <br/> 
                        portfolio
                       </h1>

                        <p className="mt-4 w-10/12 text-sm text-gray-600 font-sans leading-6 mb-6  text-gray-900">
                              Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.
                        </p>
                        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-6">
                        <input
                          placeholder="Email address"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-3  md:mr-3 text-blue-900 text-xs  border border-gray-400  focus:outline-none"
                        />
                        <button
                          type="submit"
                          className=" heroBtn inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium  text-white "
                        >
                          Subscribe
                        </button>
                      </form>


                       </div>
                 </div>
                <div className=" flex items-center justify-center px-6  md:w-6/12 ">
                    <img className="w-full min-h-0 max-w-md" src="https://miro.medium.com/max/602/0*Yptvfuy-KY9XWMiN.png" alt="#"/>
                </div>
              </div>  
           </div>
        </header>








     );
}
 
export default Hero;
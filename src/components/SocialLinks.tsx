import { FaInstagram, FaFacebook, FaYoutube, FaMap } from 'react-icons/fa'

export const SocialLinks = () => {
    return(
        <section className="mt-5">
            <h3 className="text-3xl font-extrabold App" >Nos réseaux sociaux et itinéraire</h3>

                          <ul className="mt-5 items-center ">
                           <li className='text-2xl flex items-center' ><FaInstagram className='mr-2'/><a className="hover:text-[#000000]" href="https://instagram.com/cbs_technologie">Instagram</a></li>
                           <li className='text-2xl flex items-center' ><FaFacebook className='mr-2'/><a className="hover:text-[#000000]" href="https://facebook.com/Cbs-Tech">Facebook</a></li>
                           <li className='text-2xl flex items-center' ><FaYoutube className='mr-2'/><a className="hover:text-[#000000]" href="https://www.youtube.com/channel/UC7bSaOP00HFW7sRGLHygl7A">Youtube</a></li>
                           <li className='text-2xl flex items-center' ><FaMap className='mr-2'/><a className="hover:text-[#000000]" href="https://www.google.com/maps/place/12%C2%B034'34.0%22N+16%C2%B016'07.6%22W/@12.575705,-16.2702138,699m/data=!3m1!1e3!4m4!3m3!8m2!3d12.576114!4d-16.268775?entry=ttu">Adresse</a></li>
                          </ul>
        </section>
    );
}
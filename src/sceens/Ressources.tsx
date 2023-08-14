import { ImLink } from 'react-icons/im'


export const Ressources = () => {
    return (
         <main>
              <h3 className="font-extrabold text-5xl mt-12 mb-12 App text-white">Pour vos commandes</h3>

              <ul>
                   <li className='text-3xl flex items-center ml-10 text-white'><ImLink className='mr-2'/><a className="hover:underline mr-3" href="https://instagram.com/cbs_technologie">Matériels, Accessoires et Logiciels</a></li>
                   <li className='text-3xl flex items-center ml-10 text-white'><ImLink className='mr-2'/><a className="hover:underline mr-3" href="https://facebook.com/Cbs-Tech">Cours et Autres</a></li>
                   <li className='text-3xl flex items-center ml-10 text-white'><ImLink className='mr-2'/><a className="hover:underline mr-3" href="https://www.youtube.com/channel/UC7bSaOP00HFW7sRGLHygl7A">Presentation de nos produits</a></li>   
              </ul>

              <p className="mt-10 ml-10 items-center text-2xl text-white">Chez CBS TECHNOLOGIE nous avons des matériaux de qalité et le savoir faire dont vous avez besoin avec un personnel qualifié et rompus à la tâche.</p>
     
         </main>
    );
}
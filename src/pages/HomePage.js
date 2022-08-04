import jengarner from '../components/jengarner.webp'
import singlemom1 from '../components/istockphoto-1035146258-612x612.jpg'
import singlemom2 from '../components/single mom3.jpg'

function HomePage() {
    return (
        <div>
        <div className='DivBlock'>
            <span>
            <h3>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h3>
        </span>
            </div>
      
        <div class="row">
  <div class="column">
  <img className='HomeImg1' src={jengarner}/>
  </div>
  <div class="column">
  <img className='HomeImg1' src={singlemom1}/>
  </div>
  <div class="column">
    <img className="HomeImg1" src={singlemom2}/>
  </div>
</div>
        


        </div>
    );
}

export default HomePage;
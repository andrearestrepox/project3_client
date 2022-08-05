import jengarner from '../components/jengarner.webp'
import singlemom1 from '../components/istockphoto-1035146258-612x612.jpg'
import singlemom2 from '../components/single mom3.jpg'
import typingimg from '../components/typingimg.jpg'

function HomePage() {
    return (
        <div>
        <div className='DivBlock'>
            <h3 className='TextDiv'>
            This is for her. The one who spends countless nights rocking her baby to sleep. The one who wakes up every two hours to feed her new-born. The one who checks for monsters under the bed and behind closet doors. The one who forgets to eat because there is too much to do. This is for you. The you who goes on hot-girl walks after nap time. The you who enjoys a good book over an even better coffee. The you who tells the craziest stories at brunch with the girls. This is for you and for her; for the single moms in South Florida who desire to see a strong, loving community of women making it happen. We know it takes a village, why not choose yours?
           
            </h3>
        
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
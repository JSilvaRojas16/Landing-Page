// import { useState } from 'react'
// import personOne from '../../img/person_1.jpg'
// import personTwo from '../../img/person_2.jpg'
// import personThree from '../../img/person_4.jpg'
// import { Slide } from './Slide'

// export const Slider = () => {
//   const people = [
//     { id: 1, img: personOne, active: true },
//     { id: 2, img: personTwo, active: false },
//     { id: 3, img: personThree, active: false }
//   ]
  

//   const back = () => {
  
//   }
//   const next = () => {
    

//   }

//   return (
//     <div className='owner-slider'>
//       <div className="slider">
//         {people.map((e) => {
//           if (e.active) {
        
//             return <Slide key={e.id} img={e.img}></Slide>
//           }
//         })}

//         <div className="slide-button">
//           <button id="prevBtn" className="material-symbols-outlined" onClick={back}>arrow_back_ios</button>
//           <button id="nextBtn" className="material-symbols-outlined" onClick={next}>arrow_forward_ios</button>
//         </div>

//       </div>
//     </div>
//   )
// }
import { useState } from 'react'
import personOne from '../../img/person_1.jpg'
import personTwo from '../../img/person_2.jpg'
import personThree from '../../img/person_4.jpg'
import { Slide } from './Slide'

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const people = [
    { id: 1, img: personOne },
    { id: 2, img: personTwo },
    { id: 3, img: personThree }
  ];

  const back = () => {
    const newIndex = (currentIndex - 1 + people.length) % people.length;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const newIndex = (currentIndex + 1) % people.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='owner-slider ' >
      <div className="slider">
        <Slide key={people[currentIndex].id} img={people[currentIndex].img} />

        <div className="slide-button">
          <button id="prevBtn" className="material-symbols-outlined" onClick={back}>arrow_back_ios</button>
          <button id="nextBtn" className="material-symbols-outlined" onClick={next}>arrow_forward_ios</button>
        </div>
      </div>
    </div>
  )

}



import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'> 
       <div className="about-left">
             <img src={about_img}alt="" className='about-img'/> 
             <img src={play_icon} alt=""className='play-icon' />
        </div>
      <div className="about-right">
       <h3>ABOUT UNIVERSITY</h3>
      <h2>Nurturing tommorrows leaders Today</h2>
      <p>Embark on a transformative educational
         journey with our university comprehensive 
         educational Programs.Our cuttimg edge  curriculum 
        is designed to empower studentnst with the knowledge,
        skills and  experiences needed to excel in the
         dynamic field of education .
      </p>
      <p>
        With a focus on innovation ,hands on learning
         ,and personalized mentorship, our programs
          prepare aspiring educators to make a 
        meaningful impact in classroms, schools,and 
        communities.
      </p>
      <p>
        Whether you inspire to become a teacher,administrator,
        counselor,or educational leader,Our diverse range  of programs
        offers the perfect pathway to acheive your goals and unlock your
         full potential in shaping the future of education.
      </p>
      </div>

    </div>
  )
}

export default About

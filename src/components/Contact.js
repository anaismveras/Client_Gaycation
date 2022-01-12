import emily from '../images/emily.jpg'
import anais from '../images/anais.jpg'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

const Contact = (props) => {
    console.log('props in home', props)
    return (
        <div className="contact">
            <div id="contactHeader">
                <h1><b><u>Gaycation Team</u></b></h1><br></br>
                <h4>Connect with us below via LinkedIn or GitHub</h4>
            </div>
            <div class="column">
                <div className="col-sm-4">
                    <img className="contactImages" src={anais} alt="Anais"></img><br></br><br></br><h4>Anais Veras (They/Them)</h4>
                    <a href="https://www.linkedin.com/in/anaismveras/" target="_blank" rel="noreferrer"><img className="logo" src={linkedin}></img></a>
                    <a href="https://github.com/anaismveras" target="_blank" rel="noreferrer"><img className="logo" src={github}></img></a>
                </div>
                <div className="col-sm-4">
                    <img className="contactImages" src={emily} alt="Emily"></img><br></br><br></br><h4>Emily Barwinczak</h4>
                    <a href="https://www.linkedin.com/in/emilybarwinczak/" target="_blank" rel="noreferrer"><img className="logo" src={linkedin}></img></a>
                    <a href="https://github.com/emilybarwinczak" target="_blank" rel="noreferrer"><img className="logo" src={github}></img></a>
                </div>
            </div>
        </div>
    )
}

export default Contact
import React from 'react'
import ZooImage from '../../images/zoo.JPG'
import BumbleLogo from '../../images/bumbleLogo.png'

const Message = () => {
    return (
        <section id="message">
            <h1>Our Story (So Far)</h1>
            <article id="bumble" className="step">
                <figure id="logo">
                    <img src={BumbleLogo} alt="Bumble logo" />
                </figure>
                <p className="description">
                    We matched on Bumble on the 8th of March, 2020, texted back and forth for an awesome 2 days, and then 
                    I added you on Facebook so that we could finally get off the app :P
                    <br />
                    <br />
                    We talked for about a week on messenger, and in that week, we really got to know each other super well :) 
                    If our texts were mountains, some of them would give Mount Everest a run for its money :P
                    <br />
                    <br />
                    After that amazing week of back and forth, we went on our first date to Either Or in Newtown. That date
                    was so great (even though we got lost a couple of times :P) but little did I know that we were about to
                    enter into something amazing...Quarantine Skype Calls! :D
                </p>
            </article>
            <figure id="zooImage">
                <img src={ZooImage} alt="Us at the zoo" />
            </figure>
        </section>
    )
}

export default Message
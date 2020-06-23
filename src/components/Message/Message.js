import React from 'react'
import ZooImage from '../../images/zoo.JPG'
import BumbleLogo from '../../images/bumbleLogo.png'
import SkypeCovid from '../../images/skype-covid.svg'

const Message = () => {
    return (
        <section id="message">
            <h1>Our Story (So Far)</h1>
            <article className="stepContainer">
                <article id="bumble" className="step alignRight">
                    <figure id="logo" className="imageContainer">
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
            </article>
            <article className="stepContainer">
                <article id="skype-calls" className="step">
                    <p className="description">
                        Because of COVID-19, our following dates had to be done on Skype. I feel like it brought
                        us closer a lot faster, which became especially clear when we finally got to
                        meet up in person after a month of skyping :D  
                        <br />
                        <br />
                        I always remember being worried that I would run out of things to say during the call, but
                        somehow we just never, EVER, shutup, so in the blink of an eye we would have been talking for
                        3 hours.
                        <br />
                        <br />
                        Fast forward to restrictions being slowly eased, and we get to have our first few dates in person after so
                        long. It was technically only our second proper date, but like we always say, it's like we knew each other
                        for ages.
                    </p>
                    <figure id="skype-covid" className="imageContainer">
                        <img src={SkypeCovid} alt="Skype and Covid images combined" />
                    </figure>
                </article>
            </article>
            <article className="stepContainer">
                <article className="step-column">
                    <figure id="zooImage">
                        <img src={ZooImage} alt="Us at the zoo" />
                    </figure>
                    <p>The best we had so far, without a doubt. We spent the whole day together, and it was the first time when
                        we walked around hand-in-hand (it was such an amazing feeling). Whenever I would see you smiling at me,
                        it was like we were in our own little bubble and nothing else mattered.
                    </p>
                </article>
            </article>
        </section>
    )
}

export default Message
import React from 'react'
import Emoji from '../Emoji/Emoji'
import ZooImage from '../../images/zoo.JPG'
import BumbleLogo from '../../images/bumbleLogo.svg'
import SkypeCovid from '../../images/skype-covid.svg'
import Kingsleys from '../../images/kingsleys.jpg'
import Soccer from '../../images/soccer.jpg'

const Year2020 = () => {
    return (
        <section>
            <h2 className="year">2020</h2>
            <article className="stepContainer">
                <article id="bumble" className="step alignRight">
                    <figure id="logo" className="imageContainer">
                        <img src={BumbleLogo} alt="Bumble logo" />
                    </figure>
                    <p className="description">
                        We matched on Bumble on the 8th of March, 2020, texted back and forth for an awesome 2 days, and then 
                        I added you on Facebook so that we could finally get off the app <Emoji symbol="🤪" />
                        <br />
                        <br />
                        We talked for about a week on messenger, and in that week, we really got to know each other super well
                        <Emoji symbol=" 😊 " />  If our texts were mountains, some of them would give Mount Everest a run for its 
                        money <Emoji symbol=" 😏" />
                        <br />
                        <br />
                        After that amazing week of back and forth, we went on our first date to Either Or in Newtown. That date
                        was so great (even though we got lost a couple of times <Emoji symbol="😜" />) but little did I know that we were about to
                        enter into something amazing...Quarantine Skype Calls! <Emoji symbol="😁" />
                    </p>
                </article>
            </article>
            <article className="stepContainer">
                <article id="skype-calls" className="step reverseFlex">
                    <p className="description">
                        Because of COVID-19, our following dates had to be done over Skype. It brought
                        us closer a lot faster which became especially clear when we finally got to
                        meet up in person after a month of skyping <Emoji symbol=" 😁" /> 
                        <br />
                        <br />
                        I always remember being worried that I would run out of things to say during the call, but
                        somehow we just never, EVER, shut up <Emoji symbol=" 😂 " /> so in the blink of an eye we would have been talking for
                        3 hours.
                        <br />
                        <br />
                        Fast forward to restrictions being slowly eased, and we get to have a few more dates in person after so
                        long. It was technically only our second proper date, but like we always say, it was like we knew each other
                        for ages <Emoji symbol=" 🤗 " />
                    </p>
                    <figure id="skype-covid" className="imageContainer">
                        <img src={SkypeCovid} alt="Skype and Covid images combined" />
                    </figure>
                </article>
            </article>
            <article className="stepContainer">
                <article className="step-column">
                    <figure id="zooImage" className="imageContainer">
                        <img src={ZooImage} alt="Us at the zoo" />
                    </figure>
                    <p>The best date we had so far, without a doubt <Emoji symbol=" 😊" /> We spent the whole day together, and it was the first time when
                        we walked around hand-in-hand (it was such an amazing feeling <Emoji symbol=" 😉 " />). Whenever I would see you smiling at me,
                        it was like we were in our own little bubble and nothing else mattered <Emoji symbol=" 🤗 " />
                        <br />
                        <br />
                        When it came time to grab some dinner, your idea to have a pizza picnic in the park was such an amazing idea. It's cute moments like these
                        that make me pinch myself that I'm actually spending time with someone as special as you <Emoji symbol=" 😊 " />
                        <br />
                        <br />
                        Another reason why it was such a special date was because it was the day we agreed to make our relationship official. I was expecting to
                        have to ask you to be my girlfriend in a more formal way <Emoji symbol=" 😂 " /> but we just ended up agreeing to it so casually, which 
                        made it so much better <Emoji symbol=" 😊 " /> It was a real testament to how comfortable we've become with each other.
                    </p>
                </article>
            </article>
            <article className="stepContainer">
                <article id="kingsleys" className="step alignRight">
                    <figure id="kingsleysImage" className="imageContainer rounded">
                        <img src={Kingsleys} alt="Kingsleys Restaurant" />
                    </figure>
                    <p className="description">
                    I met your family at Kingsleys, which was an important step in our relationship, and it was awesome to finally meet them all <Emoji symbol=" 🤗" /> 
                    <br />
                    <br />
                    I wasn’t really expecting them to welcome me as well as they did (I’m always thinking the worst <Emoji symbol=" 😂" />) but they really made me 
                    feel comfortable. You have an awesome family <Emoji symbol=" 😊" />
                    </p>
                </article>
            </article>
            <article className="stepContainer">
                <article id="soccer" className="step reverseFlex">
                    <p className="description">
                    It has always been a dream of mine to have my girlfriend watch me play soccer, and I couldn’t be prouder to have you watching on from the sideline <Emoji symbol=" 🥰 " /> It was even better that we 
                    actually won the game for your first time watching (I reckon you are definitely a lucky charm <Emoji symbol=" 😉" />)  and I think you gave me super powers during the game <Emoji symbol=" 🤗 " /> 
                    <br />
                    <br />
                    Can’t wait to have you watching me play more games in the future. And I also can’t wait to watch you play netball when I get the chance <Emoji symbol=" 😊" />
                    </p>
                    <figure id="soccerBall" className="imageContainer rounded">
                        <img src={Soccer} alt="Soccer ball" />
                    </figure>
                </article>
            </article>
            <article id="finalMessage">
                <h2>To be continued ...</h2>
                <p>I'm looking forward to making some more amazing memories with you <Emoji symbol=" 😊" /></p>
            </article>
        </section>
    )
}

export default Year2020
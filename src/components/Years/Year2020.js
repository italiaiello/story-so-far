import React from 'react'
import Emoji from '../Emoji/Emoji'
import ZooImage from '../../images/2020/zoo.JPG'
import BumbleLogo from '../../images/2020/bumbleLogo.svg'
import SkypeCovid from '../../images/2020/skype-covid.svg'
import Kingsleys from '../../images/2020/kingsleys.jpg'
import Soccer from '../../images/2020/soccer.jpg'
import Scorecard from '../../images/2020/scorecard.JPG'
import Heels from '../../images/2020/heels.JPG'
import BraFrogLady from '../../images/2020/braFrogLady.JPG'
import RedShell from '../../images/2020/redShell.jpg'


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
                        it was like we were in our own little bubble and nothing else mattered <Emoji symbol=" 🤗" />
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
            <article className="stepContainer">
                <article id="holeyMoley" className="step alignRight">
                    <figure id="scorecard" className="imageContainer rounded skinnyImage">
                        <img src={Scorecard} alt="Holey Moley Scorecard" />
                    </figure>
                    <p className="description">
                    After all the banter and jokes we made about kicking each other’s asses, we finally had the chance to go to Holey Moley <Emoji symbol=" 🤗 " /> I was pretty surprised that it was so close the whole way through, I honestly 
                    thought that I would easily win, but you definitely showed some amazing skills <Emoji symbol=" 😏" /> 
                    <br />
                    <br />
                    Being super cocky got the better of me in the end, and you were just too good for me on the day. But don’t you worry, 
                    I’m gonna make things right when we go bowling <Emoji symbol=" 😉" />
                    <br />
                    <br />
                    I also finally tried brunch for the first time, and I can see why you like it, the food looks so fancy and colorful <Emoji symbol=" 😊 " /> I would love to go to brunch with you more often <Emoji symbol=" 🥰" />
                    </p>
                </article>
            </article>
            <article className="stepContainer">
                <article id="heels" className="step reverseFlex">
                    <p className="description">
                    If we lost Holey Moley, the stakes were that I had to wear my mum’s heels, and you had to wear your frog onesie with a bra on the outside <Emoji symbol=" 😂 " /> Since you kicked my ass, I had to slip into my mum’s heels (which were a surprisingly 
                    good fit <Emoji symbol=" 🤪 " />) and send you a photo as proof. 
                    <br />
                    <br />
                    Now let me tell you this, I’m never losing another bet to you again, so you better prepare yourself for bowling <Emoji symbol=" 😉" /> 
                    </p>
                    <figure id="meInHeels" className="imageContainer rounded skinnyImage">
                        <img src={Heels} alt="Me in heels" />
                    </figure>
                </article>
            </article>
            <article className="stepContainer">
                <article id="bowling" className="step alignRight">
                    <figure id="braFrogLady" className="imageContainer rounded skinnyImage">
                        <img src={BraFrogLady} alt="Bra Frog Lady" />
                    </figure>
                    <p className="description">
                    Our bowling date was really fun, well for me at least <Emoji symbol=" 🤪 " /> To be honest, I was surprised at how well you did (you even developed a new amazing bowling technique <Emoji symbol=" 😂" />) but I definitely reckon we both knew who was going to win before we 
                    even started. 
                    <br />
                    <br />
                    I think we were both happy that I won in the end anyway, considering the high stakes we were playing for. Since you won Holey Moley, you kept the forfeit of wearing your frog onesie with a bra on the outside <Emoji symbol=" 😏" /> 
                    <br />
                    <br />
                    My new one was that I had to maintain an expressionless face and not touch you at all for the rest of the day (which would have been horrible <Emoji symbol=" 🥰" />)
                    <br />
                    <br />
                    As shown in the image, you had to transform into Bra-Frog Lady, and somehow you still look super cute. I think I need to make out with Bra-Frog Lady soon <Emoji symbol=" 😉" />
                    </p>
                </article>
            </article>
            <article className="stepContainer">
                <article id="marioKart" className="step reverseFlex">
                    <p className="description">
                    My winning ways didn’t stop with bowling though <Emoji symbol=" 😉 " /> When played against each other in Mario Kart at the Arcade, I pulled off arguably the best Mario Kart win in history by hitting you with a red shell right before the finish line <Emoji symbol=" 🤪" /> 
                    <br />
                    <br />
                    I’m still mesmerised by how amazing that win was to this day. Your reaction to losing in such an evil way was absolutely priceless, it’ll be ingrained in my brain forever <Emoji symbol=" 😂" />
                    </p>
                    <figure id="redShell" className="imageContainer rounded">
                        <img src={RedShell} alt="Red Shell Mario Kart" />
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
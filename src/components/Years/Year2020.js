import React from 'react'

// Components
import Emoji from '../Emoji/Emoji'
import Slider from '../Slider/Slider'

// Images
import ZooImage from '../../images/2020/zoo.JPG'
import BumbleLogo from '../../images/2020/bumbleLogo.svg'
import SkypeCovid from '../../images/2020/skype-covid.svg'
import Kingsleys from '../../images/2020/kingsleys.jpg'
import Soccer from '../../images/2020/soccer.jpg'
import Scorecard from '../../images/2020/scorecard.JPG'
import Heels from '../../images/2020/heels.JPG'
import BraFrogLady from '../../images/2020/braFrogLady.JPG'
import RedShell from '../../images/2020/redShell.jpg'
import Party from '../../images/2020/party.JPG'
import RedDress from '../../images/2020/redDress.JPG'
import PinkDress from '../../images/2020/pinkDress.JPG'
import PurpleDress from '../../images/2020/purpleDress.JPG'
import Onesie from '../../images/2020/onesie.JPG'
import Picnic from '../../images/2020/picnic.JPG'
import PhotoBooth from '../../images/2020/photoBooth.JPG'
import Trivia from '../../images/2020/trivia.JPG'
import SocialHideout from '../../images/2020/social-hideout.JPG'
import Gallo from '../../images/2020/gallo.JPG'
import NailPolish from '../../images/2020/nailPolish.JPG'
import Halloween from '../../images/2020/halloween.jpg'



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
            <article className="stepContainer">
                <article id="party" className="step alignRight">
                    <figure id="partyImage" className="imageContainer rounded">
                        <img src={Party} alt="Us at my 21st" />
                    </figure>
                    <p className="description">
                    I never would have imagined celebrating my 21st with such an amazing girl by my side, but having you there made the day so much more special <Emoji symbol=" 🤗 " /> You just seemed to fit in to the family so well, everyone loved you instantly, and I knew they would love you cause you’re just so 
                    damn phenomenal <Emoji symbol=" 😏" /> 
                    <br />
                    <br />
                    Everything worked out perfectly too <Emoji symbol=" 😏 " /> Obviously my actual 21st was May 17th, but I reckon COVID almost acted like a wingman, cause it would have definitely been a bit early for you to meet my parents at the party if it happened in May, and we weren’t as comfortable with each other compared to now <Emoji symbol=" 😊" />
                    <br />
                    <br />
                    I love having this photo on my phone, it makes me smile every time I see it. I think the world of you Bri, you’re awesome <Emoji symbol=" 🥰" />
                    </p>
                </article>
            </article>
            <article className="stepContainer">
                <article className="step-column">
                    <Slider imageURLs={[RedDress, PinkDress, PurpleDress, Onesie]} />
                    <p>
                        It was great meeting your close friend Tash, and it was awesome spending the rest of the day with you at home too <Emoji symbol=" 🤗" />
                        <br />
                        <br />
                        Making that pavlova together was so damn cool, especially since I finally learned how to crack an egg (which seemed to amuse you quite a bit <Emoji symbol=" 😂" />) And my gosh it tasted good, it was by far the most amazing pavlova I’ve ever tasted in my life <Emoji symbol=" 😋 " />
                        <br />
                        <br />
                        I never imagined that in 2020 I would be in my girlfriend's room wearing her dresses and frog onesie while posing for the camera <Emoji symbol=" 😆 " /> I don't know about you, but I reckon I look pretty sexy in them (especially the red dress and the onesie <Emoji symbol=" 😉" />)
                        <br />
                        <br />
                        Then we got some food from Grill’d (bloody phenomenal burgers and chips <Emoji symbol=" 😏" />), cuddled on your bed and watched Coming to America <Emoji symbol=" 😊 " /> Having you resting on my shoulder and holding each other’s hand throughout the movie was so awesome, I wished we could just stay like that forever <Emoji symbol=" 😚" />
                        <br />
                        <br />
                        It just amazed me how natural it felt to be with you and your family at home. I’d love to do it more often <Emoji symbol=" 🥰" />
                    </p>
                </article>
            </article>
            <article className="stepContainer">
                <article id="picnic" className="step reverseFlex">
                    <p className="description">
                    We had our first picnic in Cabarita Park, and it was such an amazing experience <Emoji symbol=" 😊 " /> Not only was it our first picnic, but it was the first one I’ve ever been on as well. After that experience, I’d definitely love to have more picnics with you in the future <Emoji symbol=" 🤗" />
                    <br />
                    <br />
                    Also, who knew strawberries and cheese went so well together? (Granted it was the cheese that tasted the least like cheese, but I stand by it <Emoji symbol=" 🤪" />).
                    <br />
                    <br />
                    The more time I spend with you, the more amazing you prove to be (except when you kick my ass in the Monopoly Deal card game <Emoji symbol=" 😅😂" />)
                    </p>
                    <figure id="picnicDate" className="imageContainer rounded skinnyImage">
                        <img src={Picnic} alt="Our first picnic date" />
                    </figure>
                </article>
            </article>
            <article className="stepContainer">
                <article id="trivia" className="step alignRight">
                    <figure id="triviaSheet" className="imageContainer rounded skinnyImage">
                        <img src={Trivia} alt="Our first trivia date" />
                    </figure>
                    <p className="description">
                    We went to the Willoughby Hotel for dinner, which I was excited to try since you had so many good things to say about it <Emoji symbol=" 😊 " /> And you weren’t wrong, the food was great, the atmosphere was awesome, just a really cool place <Emoji symbol=" 😎" />
                    <br />
                    <br />
                    The best part had to be the unexpected trivia we played, our first of many as a couple I’m sure <Emoji symbol=" 😏 " /> It didn’t really turn out as awesome as we wanted it to be, we got absolutely rinsed by the other teams <Emoji symbol=" 😂" />
                    <br />
                    <br />
                    However, the experience alone was pretty special, and as long as you’re by my side, I’m always a winner <Emoji symbol=" 🥰" />
                    </p>
                </article>
            </article>
            <article className="stepContainer">
                <article id="photoBooth" className="step reverseFlex">
                    <p className="description">
                    After getting my ass kicked in Holey Moley the first time, I was adamant to make up for it <Emoji symbol=" 😏 " /> So, we had another battle at the Chatswood one. I think this time around was a much better reflection of our skill levels <Emoji symbol=" 🤪 " />(that pendulum one really screwed you up <Emoji symbol=" 😂" />).
                    <br />
                    <br />
                    Then we played pool together and you actually weren’t as bad as you made yourself out to be. I was pretty impressed <Emoji symbol=" 😊" />
                    <br />
                    <br />
                    Doing the arcade is always a must, but I think we’ve agreed that we’ll never go near that dancing one again <Emoji symbol=" 😆" /> And as usual, we had our super tense air hockey battle which I really love since you look super sexy when you do a little celebratory dance after getting a point <Emoji symbol=" 😉" />
                    <br />
                    <br />
                    One of the highlights was using that photobooth <Emoji symbol=" 🤗 " /> We messed it up a little the first time, but once we got the hang of it we were amazing <Emoji symbol=" 🥰 " /> (you look super sexy in every photo <Emoji symbol=" 😏" />). And damn we’re amazing kissers <Emoji symbol=" 😚" />
                    </p>
                    <figure id="photoBoothImage" className="imageContainer rounded skinnyImage">
                        <img src={PhotoBooth} alt="Trying out the photobooth" />
                    </figure>
                </article>
            </article>
            <article className="stepContainer">
                <article id="brunch" className="step alignRight">
                    <figure id="brunchFood" className="imageContainer rounded skinnyImage">
                        <img src={SocialHideout} alt="Brunch at social hideout" />
                    </figure>
                    <p className="description">
                    I had always seen stories from my friends on Instagram where they were at some cool looking brunch place, or they had a plate of food that looked so damn exquisite, but they never put the name of the bloody place in there <Emoji symbol=" 😂" />
                    <br />
                    <br />
                    As soon as I had finally found Social Hideout, I knew we had to try it <Emoji symbol=" 🤗" /> It was such a beautiful place, and I couldn’t have dined with a more beautiful girl <Emoji symbol=" 🥰" />
                    <br />
                    <br />
                    When I saw your plate come I was amazed at how awesome it looked, and I remember trying to think about how they would make pink risotto look as cool as that <Emoji symbol=" 😆" /> But I was so surprised when it came out cause it looked bloody amazing <Emoji symbol=" 😎" /> (I’m still not 100% sure if that white thing was cheese <Emoji symbol=" 🤪" />)
                    <br />
                    <br />
                    I can’t wait to try other awesome brunch places with you <Emoji symbol=" 😘" />
                    </p>
                </article>
            </article>
            <article className="stepContainer">
                <article id="gallo" className="step reverseFlex">
                    <p className="description">
                    I love how thoughtful you are, and receiving Gallo as a gift was such a thoughtful gift <Emoji symbol=" 🤗 " /> I love looking at him because it always reminds me of you <Emoji symbol=" 🥰" />                   
                    <br />
                    <br />
                    I reckon I’ll definitely keep it alive a bit longer than the love fern in ‘How to Lose a Guy in 10 Days’ <Emoji symbol=" 🤪" />                   
                    <br />
                    <br />
                    I love you so much Bri <Emoji symbol=" 😘" />                
                    </p>
                    <figure id="galloImage" className="imageContainer rounded">
                        <img src={Gallo} alt="Gallo the Succulent Rooster" />
                    </figure>
                </article>
            </article>
            <article className="stepContainer">
                <article id="nailPolish" className="step alignRight">
                    <figure id="brunchFood" className="imageContainer rounded skinnyImage">
                        <img src={NailPolish} alt="Nail Polish" />
                    </figure>
                    <p className="description">
                    I don’t know why I was so excited to get my nails painted, but I really enjoyed it. I might do it more often. <Emoji symbol=" 😂 " /> Also, my mum said that I actually have very nice, feminine looking fingers, and in the image, I have to say, my fingers look SEXY <Emoji symbol=" 😏" />                   
                    <br />
                    <br />
                    However, because of my new sexy looking hands, Gallo was aroused and decided to propose to me <Emoji symbol=" 😅 " /> I may have led him on a bit from all the quality time I was spending with him, and I was caught off guard when he whipped out that ring.                    
                    <br />
                    <br />
                    I tried letting him down easy by telling him that I already have an amazingly gorgeous and phenomenal girlfriend, but Gallo didn’t want a bar of it and actually threatened me. So, I think I need you to put him in his place next time you see him <Emoji symbol=" 😉" />
                    </p>
                </article>
            </article>
            <article className="stepContainer">
                <article id="halloween" className="step reverseFlex">
                    <p className="description">
                        It was our first Halloween as a couple (and my first proper Halloween in my life <Emoji symbol=" 😊" />), and damn were you sexy as a sailor <Emoji symbol=" 😏 " /> I was the luckiest pirate of the seas to have such a gloriously beautiful woman by my side <Emoji symbol=" 😘" />                   
                        <br />
                        <br />
                        We even did a couple of role plays as well, which set an even sexier mood for our make out <Emoji symbol=" 😉 " /> (well, maybe except for the pirate role play, which turned out to be more humorous than sexy <Emoji symbol=" 😂" />).                    
                        <br />
                        <br />
                        If COVID is less of a nuisance next Halloween, we should definitely try to find a Halloween ball or something to go to so we can really show off our super sexy outfits <Emoji symbol=" 🥰" />                 
                    </p>
                    <figure id="halloweenPic" className="imageContainer rounded skinnyImage">
                        <img src={Halloween} alt="Halloween" />
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
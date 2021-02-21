import React from 'react'
import Emoji from '../Emoji/Emoji'
import LunaPark from '../../images/2021/luna-park.jpg'
import ValentinesDay from '../../images/2021/valentines-day.JPG'

const Year2021 = () => {
    return (
        <section>
            <article className="stepContainer">
                <article id="luna-park" className="step alignRight">
                    <figure id="lunaParkImg" className="imageContainer rounded">
                        <img src={LunaPark} alt="Luna Park" />
                    </figure>
                    <p className="description">
                        After talking about how awesome it would be to go to Luna Park a million times, we finally went, and it was such a magical night <Emoji symbol=" 😊" />                     
                        <br />
                        <br />
                        I loved every second - holding your hand, cuddling you while waiting in line, seeing your amazing smile <Emoji symbol=" 🤗 " /> The Wild Mouse ride was actually a little scary, especially on the drops, but holding you in a death grip definitely helped <Emoji symbol=" 😆 " /> Coney Island was awesome too, you’re the sack race Queen <Emoji symbol=" 😉 " /> (and you definitely wore the pants on the steep slide <Emoji symbol=" 😎" />)                    
                        <br />
                        <br />
                        But I think the best highlight was making out with you on the Ferris wheel, it was so romantic <Emoji symbol=" 🥰 " /> (and so damn sexy <Emoji symbol=" 😏" />). It took a lot of self control to not rip your clothes off <Emoji symbol=" 😉 " /> (which is lucky because getting out of the Ferris wheel would have been interesting <Emoji symbol=" 😂" />)                    
                        <br />
                        <br />
                        I bloody love ya so damn much, and I’m looking forward to some more sexy Ferris wheel rides <Emoji symbol=" 😘" />
                    </p>
                </article>
            </article>
            <article className="stepContainer">
                <article id="valentines-day" className="step reverseFlex">
                    <p className="description">
                        Valentine’s Day was so special since we both hadn’t celebrated it properly before, and now I was finally able to celebrate with the most beautiful Valentine I could have ever asked for <Emoji symbol=" 🥰 " /> Spending the Valentine’s weekend together was such a great idea, since we were able to really enjoy each other’s company <Emoji symbol=" 😊 " />                       
                        <br />
                        <br />
                        Going to Via Napoli was amazing too, sharing the Caprese pizza and gnocchi with you was so damn good <Emoji symbol=" 😋 " /> I’ve never seen waiters moving so fast <Emoji symbol=" 😆 " /> (well, except for the young bloke with the coffee that smiled at us when he caught us watching him <Emoji symbol=" 🤪 " />)                       
                        <br />
                        <br />
                        After all the cryptic and confusing clues, I was finally able to find out what my gift was, and bloody hell it was amazing <Emoji symbol=" 😘 " /> I can feel your love pouring out of it every time I look at it because of how much effort you put into it <Emoji symbol=" 🤗 " /> I absolutely love it <Emoji symbol=" 😍 " />                       
                        <br />
                        <br />
                        You must have been initially a bit disappointed in my gift at first since you thought all I bought for you was a bear <Emoji symbol=" 😂 " /> But I’m glad you love the earrings too (you look so beautiful with them on <Emoji symbol=" 😊 " />)                      
                        <br />
                        <br />
                        I love you superbly, duperly, phenomenally much and I can’t wait to have you as my super sexy Valentine again for years to come <Emoji symbol=" 🥰 " />                        
                    </p>
                    <figure id="valentinesDayPic" className="imageContainer rounded skinnyImage enlargeImage">
                        <img src={ValentinesDay} alt="Valentine's Day" />
                    </figure>
                </article>
            </article>
        </section>
    )
}

export default Year2021

import React from 'react'
import Emoji from '../Emoji/Emoji'
import LunaPark from '../../images/2021/luna-park.jpg'

const Year2021 = () => {
    return (
        <section>
            <article className="stepContainer">
                <article id="christmas" className="step alignRight">
                    <figure id="christmasImg" className="imageContainer rounded">
                        <img src={LunaPark} alt="Christmas" />
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
        </section>
    )
}

export default Year2021

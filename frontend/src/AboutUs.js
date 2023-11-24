import React from 'react';
import "./css/aboutUs.css";
import firstImage from "./pics/firstImage.jpg";
import secondImage from "./pics/woman_m.jpg";

const AboutUs = () =>{

    return(
        <div className="container_aboutUs">
            <div className="first_part">
            <div className='first_column'>
            <div className="title_aboutUs">
                <h3>
                    Origins Story
                </h3>
            </div>
            <div className="content_aboutUs">
                <p>
                Guinness World Records - originally the Guinness Book of Records - the ultimate authority on record-breaking achievements, started out as an idea for a book of facts to solve arguments in pubs.
                </p>
                <p>
                The idea came about in the early 1950’s when Sir Hugh Beaver (1890—1967), Managing Director of the Guinness Brewery, attended a shooting party in County Wexford. There, he and his hosts argued about the fastest game bird* in Europe and failed to find an answer in any reference book.
                </p>
                <p>
                In 1954, recalling his shooting party argument, Sir Hugh had the idea for a Guinness promotion based on the idea of settling pub arguments and invited the twins Norris (1925—2004) and Ross McWhirter (1925—75) who were fact-finding researchers from Fleet Street to compile a book of facts and figures.
                </p>
                <p>
                Guinness Superlatives was incorporated on 30 November and the office opened in two rooms in a converted gymnasium on the top floor of Ludgate House, 107 Fleet Street.
                </p>
                <p>
                After an initial research phase, work began on writing the book, which took 13 and a half 90-hour weeks, including weekends and bank holidays. Little did the McWhirters know that taking shape was a book that would go on to become an all-time best seller and one of the most recognized and trusted brands in the world… 
                </p>
                <p>
                *Although the books never did tackle this original question - owing to their focus purely on world records - the red-breasted merganser would be the most likely answer; it is fully migratory and still occasionally hunted.
                </p>
            </div>
            </div>
            <div className='second_column'>
            <img src={firstImage} alt="Description of the image" />
            </div>
            </div>
            <div className="second_part">
                <div className='first_con'>
                    <img src={secondImage} alt="Description of the image" />
                </div>
                <div className='second_ph'>
                <div className="title_second">
                   <h3>
                        The power of record-breaking
                   </h3>
                </div>
                <div className="content_second">
                    <p>
                        Today, Guinness World Records is a global brand, with offices in London, New York, Beijing, Tokyo and Dubai, with brand ambassadors and adjudicators on the ground around the world. 
                        </p>
                    <p>
                    Our mission to document the incredible can still be found each year on the pages of our book, but also through TV Shows, social media and live events.
                    </p>
                    <p>
                    Whether in the form of a personal life-long dream, or a team attempt within a company of 5000, the power of record-breaking is easy to see, and continues to inspire amazing feats and achievements every day, across the globe. 
                    </p>
                    <p>
                    Could you become Officially Amazing?
                    </p>
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                    <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
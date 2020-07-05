import React from 'react';
import './index.css';
import MarsWeather from './MarsWeather';
import TwitterContainer from './TwitterContainer';

class PageBody extends React.Component {
    render() {
        return(
<div className="content">
    <div className="collumns">
        <div className="collumn">
            <div className="head">
                <span className="headline hl3">
                    Mars Weather
                </span>
                <p>
                    <span className="headline hl4">
                        by NASA Insight
                    </span>
                </p>
            </div>
            <MarsWeather/>
        </div>
        <div className="collumn">
            <div className="head">
                <span className="headline hl5">
                    Give people courage
                </span>
                <p>
                    <span className="headline hl6">
                        The crowd seemed to grow
                    </span>
                    </p>
                </div>
            <p>The sunset faded to twilight before anything further happened.  The crowd far away on the left, towards Woking, seemed to grow, and I heard now a faint murmur from it.  The little knot of people towards Chobham dispersed.  There was scarcely an intimation of movement from the pit.</p>

            <p>It was this, as much as anything, that gave people courage, and I suppose the new arrivals from Woking also helped to restore confidence.  At any rate, as the dusk came on a slow, intermittent movement upon the sand pits began, a movement that seemed to gather force as the stillness of the evening about the cylinder remained unbroken.  Vertical black figures in twos and threes would advance, stop, watch, and advance again, spreading out as they did so in a thin irregular crescent that promised to enclose the pit in its attenuated horns.  I, too, on my side began to move towards the pit.</p>

            <p>Then I saw some cabmen and others had walked boldly into the sand pits, and heard the clatter of hoofs and the gride of wheels.  I saw a lad trundling off the barrow of apples.  And then, within thirty yards of the pit, advancing from the direction of Horsell, I noted a little black knot of men, the foremost of whom was waving a white flag.</p>

        </div>
        <div className="collumn">
            <div className="head">
                <span className="headline hl1">
                    May the Force be with you
                </span>
                <p>
                    <span className="headline hl2">
                        Let go your conscious self and act on instinct
                    </span>
                </p>
            </div><p>Partially, but it also obeys your commands. Hey, Luke! May the Force be with you. I have traced the Rebel spies to her. Now she is my only link to finding their secret base.</p>
        <p>Leave that to me. Send a distress signal, and inform the Senate that all on board were killed. 
            <span className="citation">
                "It might be helpful to realize, that very probably the parents of the first native born Martians are alive today."
            </span> This time, let go your conscious self and act on instinct. In my experience, there is no such thing as luck. You're all clear, kid. Let's blow this thing and go home!</p>
        <p>You don't believe in the Force, do you? Partially, but it also obeys your commands. The plans you refer to will soon be back in our hands. As you wish.</p></div>
        <div className="collumn">
            <div className="head">
                <span className="headline hl3">
                    The buzz of the little world 
                </span>
                <p>
                    <span className="headline hl4">
                        A thousand unknown plants
                    </span>
                </p>
            </div>
            <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath</p>
        </div>
        <div className="collumn">
            <div className="head">
                <span className="headline hl1">
                Curiosity Rover Updates
                </span>
                <p>
                    <span className="headline hl4">
                        powered by Twitter
                    </span>
                </p>
                </div>
                <TwitterContainer/>
            </div>
        </div>
    </div>
        )
    }
}

export default PageBody;
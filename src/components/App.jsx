import React from "react";
import { useState } from "react";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

import { Statistics } from "./Statistics/Statistics";

import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";

import { Container } from "./App.styled";



function App() {
    const [neutral, setNeutral] = useState(0);
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);

    const options = {good, neutral, bad};

    const handleFeedback = (option) => {
        switch (option) {
            case 'neutral': setNeutral(prevN => prevN + 1);
                break;
            case 'good': setGood(prevG => prevG + 1);
                break;
            case 'bad': setBad(prevB => prevB + 1);
                break;
            default: console.log('Unknown...');
                return;
        }
    }

    const countTotalFeedback = () => {
        return neutral + good + bad;
    }
    const countPositiveFeedbackPercentage = () => {
        return Math.floor((good * 100) / countTotalFeedback());
    }

    return (
        <Container>
            <Section
                title="Please leave feedback">
                <FeedbackOptions
                    onBtnClick={handleFeedback}
                    arrayOfOptions={Object.keys(options)}
                />
            </Section>

            {countTotalFeedback() ? (
                <Section
                    title="Statistics"
                >
                    <Statistics
                        rates={options}
                        total={countTotalFeedback()}
                        positive={countPositiveFeedbackPercentage()}
                    />
                </Section>

            ) : (
                <Notification message="There is no feedback" />
            )}

        </Container>
    )
}



// class oldApp extends React.Component {

//     static propTypes = {}

//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }

//     onBtnClick = (actionType) => {

//         this.setState(prevState => ({
//             [actionType]: prevState[actionType] + 1,
//         }))
//     }

//     countTotalFeedback = () => {
//         const total = Object.values(this.state).reduce((prev, nmbr) => prev + nmbr);
//         return total
//     }
//     countPositiveFeedbackPercentage = () => {
//         const positive = Math.floor((this.state.good * 100) / this.countTotalFeedback());
//         return positive;
//     }

//     render() {
//         const total = this.countTotalFeedback();

//         return (
//             <Container>
//                 <Section
//                     title="Please leave feedback">
//                     <FeedbackOptions
//                         onBtnClick={this.onBtnClick}
//                         arrayOfOptions={Object.keys(this.state)}

//                     />
//                 </Section>

//                 {total ? (
//                     <Section
//                         title="Statistics"
//                     >
//                         <Statistics
//                             rates={this.state}
//                             total={this.countTotalFeedback()}
//                             positive={this.countPositiveFeedbackPercentage()}
//                         />
//                     </Section>

//                 ) : (
//                     <Notification message="There is no feedback" />
//                 )}

//             </Container>
//         )
//     }

// }

export default App;
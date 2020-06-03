import React, { useEffect } from 'react'
import { Route } from "react-router-dom";

import Home from '../home/Home';
import FlashcardTester from '../test/FlashcardTester';
import FlashcardViewer from '../view/FlashcardViewer';
import FlashcardCreator from '../create/containers/FlashcardCreator';
import FlashcardTopicManager from '../manage/FlashcardTopicManager';

const Body = ({ loadTopics }) => {

    useEffect(() => {
        loadTopics()
    }, [])

    return (
        <div>
            <Route path="/home/" component={Home}/>
            <Route path="/manage/" component={FlashcardTopicManager} />
            <Route path="/view/" component={FlashcardViewer} />
            <Route path="/create/" component={FlashcardCreator} />
            <Route path="/test/" component={FlashcardTester} />
        </div>
    )
}

export default Body
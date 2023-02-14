import {useEffect, useRef} from 'react';
/*This file is created for generating a random number between any given interval for the purpose of generating food for the snake on the screen on the random positions.*/
export function randomIntFromInterval(min, max) {
    /* min and max included */
    return Math.floor(Math.random() * (max - min +1) + min);
} 

export function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay!== null){
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export function reverseLinkedList(head){
    let previousNode = null;
    let currentNode = head;
    while (currentNode !== null){
        const nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    return previousNode;
}
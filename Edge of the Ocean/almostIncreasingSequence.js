function solution(sequence) {
    sequence2 = sequence.slice(0)
    counter = 0;
    counter2 = 0;
    //sequence 1
    if (sequence[0] > sequence[1]) {
        sequence.splice(0, 1);
        counter++;
    }

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            sequence.splice(i + 1, 1);
            counter++;
            break;
        }
    }

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            sequence.splice(i + 1, 1);
            counter++;
            break;
        }
    }

    //sequence2
    if (sequence2[0] > sequence2[1]) {
        sequence2.splice(0, 1);
        counter2++;
    }

    for (let i = 0; i < sequence2.length; i++) {
        if (sequence2[i] >= sequence2[i + 1]) {
            sequence2.splice(i, 1);
            counter2++;
            break;
        }
    }

    for (let i = 0; i < sequence.length; i++) {
        if (sequence2[i] >= sequence2[i + 1]) {
            sequence2.splice(i, 1);
            counter2++;
            break;
        }
    }

    if (counter > 1 && counter2 > 1) {
        return false;
    } else {
        return true;
    }
}

console.log(solution([1, 2, 3, 4, 3, 6]));
console.log(solution([3, 5, 67, 98, 3]));
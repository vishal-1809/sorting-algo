document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------------------- VARIABLES ------------------------------------------------------

    const box = document.querySelector('.arrays');
    let generate = false;
    const array = [];
    const left = [];
    let value = 0;
    let time = 1000;


    // -------------------------------------------------- RANDOMN VALUES ------------------------------------------------------

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }


    // -------------------------------------------------- GENERATE ARRAY ------------------------------------------------------

    document.getElementById('generate').addEventListener('click', () => {
        value = document.getElementById('size').value;
        while (box.firstChild) {
            box.removeChild(box.firstChild);
        }
        let asize = array.length;
        for (let i = 0; i < asize; i++) {
            array.pop();
        }
        for (let i = 0; i < value; i++) {
            array.push(randomNumber(10, 600));
        }
        console.log(array);
        for (let i = 0; i < value; i++) {
            const val = document.createElement('div');
            val.style.height = `${array[i]}px`;
            val.style.width = `${80 / value}vw`;
            val.className = "arr";
            val.style.border = "2px solid black";
            box.appendChild(val);
        }
        generate = true;
    });


    // -------------------------------------------------- SELECTION SORT ------------------------------------------------------

    function selection_sort() {
        let mn = 0;
        const bar = document.querySelectorAll('.arrays div');
        if (generate) {
            for (let i = 0; i < value; i++) {
                setTimeout(() => {
                    mn = i;
                    for (let j = i + 1; j < value; j++) {
                        if (array[mn] > array[j]) {
                            mn = j;
                        }
                    }
                    bar[i].classList.add('red');
                    bar[mn].classList.add('red');
                    setTimeout(() => {
                        bar[i].classList.remove('red');
                        bar[mn].classList.remove('red');
                    }, 900);
                    [bar[i].style.height, bar[mn].style.height] = [bar[mn].style.height, bar[i].style.height];
                    [array[i], array[mn]] = [array[mn], array[i]];
                    // console.log(array);
                }, i * 1000);
            }
            console.log(array);
        }
    }


    // -------------------------------------------------- INSERTION SORT ------------------------------------------------------

    function insertion_sort() {
        let key, j;
        const bar = document.querySelectorAll('.arrays div');
        if (generate) {
            let rem = [];
            for (let i = 1; i < value; i++) {
                setTimeout(() => {
                    key = array[i];
                    let ky = bar[i].style.height;
                    j = i - 1;
                    bar[i].classList.add('red');
                    while (j >= 0 && array[j] > key) {
                        array[j + 1] = array[j];
                        bar[j + 1].style.height = `${bar[j].style.height}`;
                        bar[j + 1].classList.add('purple');
                        rem.push(j + 1);
                        j -= 1;
                    }
                    array[j + 1] = key;
                    bar[j + 1].classList.add('red');
                    bar[j + 1].style.height = `${ky}`;
                    setTimeout(() => {
                        bar[i].classList.remove('red');
                        bar[j + 1].classList.remove('red');
                        for (let vy = 0; vy < rem.length; vy++) {
                            bar[rem[vy]].classList.remove('purple');
                        }
                    }, 1000);
                    console.log(array);
                }, i * 1500);
            }
            console.log(array);
        }
    }


    // -------------------------------------------------- BUBBLE SORT ------------------------------------------------------

    function bubble_sort() {
        const bar = document.querySelectorAll('.arrays div');
        if (generate) {
            for (let i = 0; i < value; i++) {
                setTimeout(() => {
                    for (let j = 0; j < value - i - 1; j++) {
                        setTimeout(() => {
                            if (array[j] > array[j + 1]) {
                                bar[j].classList.add('red');
                                bar[j + 1].classList.add('red');
                                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                                [bar[j].style.height, bar[j + 1].style.height] = [bar[j + 1].style.height, bar[j].style.height];
                                setTimeout(() => {
                                    bar[j].classList.remove('red');
                                    bar[j + 1].classList.remove('red');
                                }, 1000);
                            }
                        }, j * 1500);
                    }
                }, i * 1600);
            }
            console.log(array);
        }
    }


    // -------------------------------------------------- MERGE SORT ------------------------------------------------------

    function merger(start, end, bar) {
        let time = end;
        for (let i = start; i < end; i++, time++) {
            setTimeout(() => {
                mn = i;
                for (let j = i + 1; j < end; j++) {
                    if (array[mn] > array[j]) {
                        mn = j;
                    }
                }
                bar[i].classList.add('cyan');
                bar[mn].classList.add('cyan');
                setTimeout(() => {
                    bar[i].classList.remove('cyan');
                    bar[mn].classList.remove('cyan');
                }, 400);
                [bar[i].style.height, bar[mn].style.height] = [bar[mn].style.height, bar[i].style.height];
                [array[i], array[mn]] = [array[mn], array[i]];
            }, time * 500);
        }
    }

    function mergeSort(start, end, bar, flag) {
        for (let i = start; i < end; i++) {
            setTimeout(() => {
                mn = i;
                for (let j = i + 1; j < end; j++) {
                    if (array[mn] > array[j]) {
                        mn = j;
                    }
                }
                if (flag === 1) {
                    bar[i].classList.add('red');
                    bar[mn].classList.add('red');
                }
                else if (flag === 0) {
                    bar[i].classList.add('purple');
                    bar[mn].classList.add('purple');
                }
                else {
                    bar[i].classList.add('cyan');
                    bar[mn].classList.add('cyan');
                }
                setTimeout(() => {
                    if (flag === 1) {
                        bar[i].classList.remove('red');
                        bar[mn].classList.remove('red');
                    }
                    else if (flag === 0) {
                        bar[i].classList.remove('purple');
                        bar[mn].classList.remove('purple');
                    }
                    else {
                        bar[i].classList.remove('cyan');
                        bar[mn].classList.remove('cyan');
                    }
                }, 400);
                [bar[i].style.height, bar[mn].style.height] = [bar[mn].style.height, bar[i].style.height];
                [array[i], array[mn]] = [array[mn], array[i]];
                // console.log(array);
            }, i * 500);
        }
    }

    function merge_sort(array) {
        const bar = document.querySelectorAll('.arrays div');
        if (generate) {
            if (value < 5) {
                selection_sort();
            }
            else if (value < 51) {
                let box = [];
                box.push(parseInt(value / 3));
                box.push(parseInt(2 * (value / 3)));
                console.log(box);
                mergeSort(0, box[0], bar, 1);
                mergeSort(box[0], box[1], bar, 0);
                mergeSort(box[1], value, bar, 1);

                merger(0, box[1], bar);
                merger(0, value, bar);
            }
            else if (value < 101) {
                let box = [];
                box.push(parseInt(value / 6));
                box.push(parseInt(2 * (value / 6)));
                box.push(parseInt(3 * (value / 6)));
                box.push(parseInt(4 * (value / 6)));
                box.push(parseInt(5 * (value / 6)));
                console.log(box);
                mergeSort(0, box[0], bar, 1);
                mergeSort(box[0], box[1], bar, 0);
                mergeSort(box[1], box[2], bar, 1);
                mergeSort(box[2], box[3], bar, 0);
                mergeSort(box[3], box[4], bar, 1);
                mergeSort(box[4], value, bar, 0);

                merger(0, box[1], bar);
                merger(0, box[2], bar);
                merger(0, box[3], bar);
                merger(0, box[4], bar);
                merger(0, value, bar);
            }
            else if (value < 151) {
                let box = [];
                box.push(parseInt(value / 9));
                box.push(parseInt(2 * (value / 9)));
                box.push(parseInt(3 * (value / 9)));
                box.push(parseInt(4 * (value / 9)));
                box.push(parseInt(5 * (value / 9)));
                box.push(parseInt(6 * (value / 9)));
                box.push(parseInt(7 * (value / 9)));
                box.push(parseInt(8 * (value / 9)));
                console.log(box);
                mergeSort(0, box[0], bar, 1);
                mergeSort(box[0], box[1], bar, 0);
                mergeSort(box[1], box[2], bar, 1);
                mergeSort(box[2], box[3], bar, 0);
                mergeSort(box[3], box[4], bar, 1);
                mergeSort(box[4], box[5], bar, 0);
                mergeSort(box[5], box[6], bar, 1);
                mergeSort(box[6], box[7], bar, 0);
                mergeSort(box[7], value, bar, 1);

                merger(0, box[1], bar);
                merger(0, box[2], bar);
                merger(0, box[3], bar);
                merger(0, box[4], bar);
                merger(0, box[5], bar);
                merger(0, box[6], bar);
                merger(0, box[7], bar);
                merger(0, value, bar);
            }
            else {
                let box = [];
                box.push(parseInt(value / 12));
                box.push(parseInt(2 * (value / 12)));
                box.push(parseInt(3 * (value / 12)));
                box.push(parseInt(4 * (value / 12)));
                box.push(parseInt(5 * (value / 12)));
                box.push(parseInt(6 * (value / 12)));
                box.push(parseInt(7 * (value / 12)));
                box.push(parseInt(8 * (value / 12)));
                box.push(parseInt(9 * (value / 12)));
                box.push(parseInt(10 * (value / 12)));
                box.push(parseInt(11 * (value / 12)));
                console.log(box);
                mergeSort(0, box[0], bar, 1);
                mergeSort(box[0], box[1], bar, 0);
                mergeSort(box[1], box[2], bar, 1);
                mergeSort(box[2], box[3], bar, 0);
                mergeSort(box[3], box[4], bar, 1);
                mergeSort(box[4], box[5], bar, 0);
                mergeSort(box[5], box[6], bar, 1);
                mergeSort(box[6], box[7], bar, 0);
                mergeSort(box[7], box[8], bar, 1);
                mergeSort(box[8], box[9], bar, 0);
                mergeSort(box[9], box[10], bar, 1);
                mergeSort(box[10], value, bar, 0);

                merger(0, box[1], bar);
                merger(0, box[2], bar);
                merger(0, box[3], bar);
                merger(0, box[4], bar);
                merger(0, box[5], bar);
                merger(0, box[6], bar);
                merger(0, box[7], bar);
                merger(0, box[8], bar);
                merger(0, box[9], bar);
                merger(0, box[10], bar);
                merger(0, value, bar);
            }
        }
    }


    // -------------------------------------------------- CALLS ------------------------------------------------------

    document.getElementById('selection').addEventListener('click', selection_sort);
    document.getElementById('insertion').addEventListener('click', insertion_sort);
    document.getElementById('bubble').addEventListener('click', bubble_sort);
    document.getElementById('merge').addEventListener('click', merge_sort);


});
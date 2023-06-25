'use strict'

const clock = document.getElementById("clock");
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const childs = ['unity', 'ten'];
const clockChilds = [
    {
        name: 'hour',
        childs
    },
    {
        name: 'minute',
        childs
    },
    {
        name: 'second',
        childs
    }
];

clockChilds.forEach((clockChild, index) => {
    const clockBox = document.createElement("div");
    clockBox.className = "h-[50px] flex gap-1 overflow-hidden rounded-xl duration-300";
    clockBox.id = clockChild.name;
    clockChild.childs.forEach((name, indexNumber) => {
        const boxChild = document.createElement("div");
        boxChild.className = "w-[50px] rounded-xl h-[calc(50px*10)] duration-300";
        boxChild.id = name;
        numbers.forEach(number => {
            const numberBox = document.createElement("div");
            numberBox.className = 'rounded-xl w-[50px] h-[50px] bg-black/60 flex justify-center items-center';
            numberBox.innerHTML = `
                <p class="text-2xl font-bold text-white">${number}</p>
            `;

            boxChild.appendChild(numberBox);
        });

        setInterval(() => {
            const date = new Date();
            const dateClock = [
                date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
                date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
                date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
            ];
            boxChild.style.marginTop = clockChild.name === clockChilds[index].name && `calc(-50px*${dateClock[index].toString()[indexNumber]}`;
        }, 1000);

        clockBox.appendChild(boxChild);
    });


    clock.appendChild(clockBox);
});



const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    console.log(data);

    document.getElementById("adviceHeader").innerHTML = "ADVICE #" + data.slip.id;
    document.getElementById("advice").innerHTML = data.slip.advice;

}

fetchAdvice();

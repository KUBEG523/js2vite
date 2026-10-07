
function TestConsoleLog()
{
        console.clear();
    // consol logi w java script - termial w przegladarce
console.log('Katalog warsztatów uruchomiony');
console.log('lorem ipsum');
console.log(typeof'127');
console.log(typeof 127);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof []);
console.log(typeof {});
}

function Testyzmiennych()
{
    console.clear();
// zmienne w javascript
// stałe
const zmiennastala = 1;

//zmienne 
let zmiennalet = "tekst"; // zmienna na poziomie globalnym - nowsza

var zmiennavar = "tekst"; // zmienna na poziomie lokalnym

    const przykladowa_liczba = 64;
    const przykladowy_boolen = true;

    let przykladowy_tekst = "Teksty";
    let przykladowa_liczba_przecinkowa = 128.8;
    let przykladowa_struktura = [1,2,3,4];

    console.log("Wypisanie zmiennych");
    console.log(przykladowa_liczba);
    console.log(typeof przykladowa_liczba);

    console.log(przykladowy_boolen);
    console.log(typeof przykladowy_boolen);

    console.log(przykladowy_tekst);
    console.log(typeof przykladowy_tekst);

    console.log(przykladowa_liczba_przecinkowa);
    console.log(typeof przykladowa_liczba_przecinkowa);

    console.log(przykladowa_struktura);
    console.log(typeof przykladowa_struktura);


    console.log("interpolacja i łączenie róznych typów danych");
    console.log(`przykladowa liczba ${przykladowa_liczba} i przykladowy tekst ${przykladowy_tekst}`);

}

function TestWarunkow()
{
        console.clear();

        let zmiennawarunku = 14;
        let wynik="";

        console.log("status warunków if");
        if(zmiennawarunku == 5)
        {
            Wynik = "Zmiennawarunku == 5";
            console.log(`${wynik}`);
        }
        else if(zmiennawarunku>15)
        {
            wynik = "Zmiennawarunku >15";
            console.log(`${wynik}`);
        }
        else
        {
            wynik = "Zmienna <15 && zmienna =! 5";
            console.log(`${wynik}`);
        }

        zmiennawarunku = 3;
          console.log("status warunków switch");
        switch(zmiennawarunku)
        {
            case 1:
                console.log("case 1");
                console.log(`${wynik}`);
                break;
            case 2:
                console.log("case 2");
                console.log(`${wynik}`);
                break;
            case 3:
                console.log("case 3");
                console.log(`${wynik}`);
                break;
            case 4:
                console.log("case 4");
                console.log(`${wynik}`);
                break;
            default: 
                console.log("defult");
                console.log(`${wynik}`);
                break;
        }

        wynik = (zmiennawarunku == 3) ? "wynik pozytwyny z ?" : "Wynik negatywny z :";
        console.log(`${wynik}`);

}
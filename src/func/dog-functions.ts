//Funktion som räknar antal unika färger
    export const numberOfColors = (dogs: Dog[]): number => {
        //let numberOfUniqueColors = 0;
        const uniqueColors: string[] = [];
        dogs.forEach((dog) => {
            //console.log(dog.color);
            const thisColor = dog.color;
            const index = uniqueColors.indexOf(thisColor);
            //console.log(index);
            if(index === -1) uniqueColors.push(dog.color);
        });
        return uniqueColors.length;
    };
    
    export const commonColor = (dogs: Dog[]): string =>{
        const colors: string[] =[]; //{ color: string; amount: number} =[];
        const amounts: number[] =[];
    
        dogs.forEach((dog) => {
            const index = colors.indexOf(dog.color);
           //console.log(index);
            if(index === -1) {
            colors.push(dog.color);
            amounts.push(1);
        } else{
            amounts[index]++;
        }
        });
        colors.forEach((color, index) =>{		// vi vill ha en pretty print som skriver ut alla färger som hundarna har och hur
            console.log(`Färgen ${color} har ${amounts[index]} hundar.`);// många hundar det finns av varje färg
            console.log("---------------------------");
        })
        //console.log(colors, amounts);
        const maxAmount = Math.max(...amounts);
        return colors[amounts.indexOf(maxAmount)];
    };
    // vi vill ha en pretty print som skriver ut alla färger som hundarna har och hur
    // många hundar det finns av varje färg
    
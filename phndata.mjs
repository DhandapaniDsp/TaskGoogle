import PData from './data.json' assert { type: 'json' };
//  console.log(fooData.person[0].lastName,"Data")
 const five = PData.mobiles[0].modal
 const six = PData.mobiles[1].modal
 const sixpro = PData.mobiles[2].modal
 const fivedes =PData.mobiles[0].description
 const sixdes =PData.mobiles[1].description
 const prodes =PData.mobiles[2].description
    what();
    function what() {
        document.getElementById('pixfive').innerHTML = five;
        document.getElementById('pixsix').innerHTML = six;
        document.getElementById('pixsixpro').innerHTML = sixpro;
        document.getElementById('pixfivedes').innerHTML = fivedes;
        document.getElementById('pixsixdes').innerHTML = sixdes;
        document.getElementById('pixsixprodes').innerHTML = prodes;

    };

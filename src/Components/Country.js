import React from 'react';
import { SayButton } from 'react-say-fork';
import Footer from './Footer';


const Country = () => {
  const counties = [
    {
      id: 1,
      country: "Sudan",
      city: "Khartoum"
    },
    {
      id: 2,
      country: "Nigeria",
      city: "Abuja"
    },
    {
      id: 3,
      country: "Ghana",
      city: "Accra"
    },
    {
      id: 4,
      country: "Ethiopia",
      city: "Addis Ababa"
    },
    {
      id: 5,
      country: "Algeria",
      city: "Algiers"
    },
    {
      id: 6,
      country: "Madagascar",
      city: "Antananarivo"
    },
    {
      id: 7,
      country: "Eritrea",
      city: "Asmara"
    },
    {
      id: 8,
      country: "Mali",
      city: "Bamako"
    },
    {
      id: 9,
      country: "Central Africa",
      city: "Bangui"
    },
    {
      id: 10,
      country: "Gambia",
      city: "Banjul"
    },
    {
      id: 11,
      country: "Guinea-Bissau",
      city: "Bissau"
    },
    {
      id: 12,
      country: "Congo",
      city: "Brazzaville"
    },
    {
      id: 13,
      country: "Burundi",
      city: "Bujumbura"
    },
    {
      id: 14,
      country: "Egypt",
      city: "Cairo"
    },
    {
      id: 15,
      country: "South Africa",
      city: "Cape Town (legislative),Bloemfontein (judicial), Pretoria (admin.)"
    },
    {
      id: 16,
      country: "Guinea",
      city: "Conakry"
    },
    {
      id: 17,
      country: "Senegal",
      city: "Dakar"
    },
    {
      id: 18,
      country: "Tanzania",
      city: "Dodoma"
    },
    {
      id: 19,
      country: "Djibouti",
      city: "Djibouti"
    },
    {
      id: 20,
      country: "Western Sahara",
      city: "El Aaiún"
    },
    {
      id: 21,
      country: "Sierra Leone",
      city: "Freetown"
    },
    {
      id: 22,
      country: "Botswana",
      city: "Gaborone"
    },
    {
      id: 23,
      country: "Uganda",
      city: "Kampala"
    },
    {
      id: 24,
      country: "South Sudan",
      city: "Juba"
    },
    {
      id: 25,
      country: "Zimbabwe",
      city: "Harare"
    },
    {
      id: 26,
      country: "Rwanda",
      city: "Kigali"
    },
    {
      id: 27,
      country: "Congo (Kinshasa)",
      city: "Kinshasa"
    },
    {
      id: 28,
      country: "Gabon",
      city: "Libreville"
    },
    {
      id: 29,
      country: "Malawi",
      city: "Lilongwe"
    },
    {
      id: 30,
      country: "Swaziland",
      city: "Mbabane (administrative), Lobamba (legislative)"
    },
    {
      id: 31,
      country: "Togo",
      city: "Lomé"
    },
    {
      id: 32,
      country: "Angola",
      city: "Luanda"
    },
    {
      id: 33,
      country: "Zambia",
      city: "Lusaka"
    },
    {
      id: 34,
      country: "Equatorial Guinea",
      city: "Malabo (formerly Santa Isabel city state)"
    },
    {
      id: 35,
      country: "Mozambique",
      city: "Maputo"
    },
    {
      id: 36,
      country: "Lesotho",
      city: "Maseru"
    },
    {
      id: 37,
      country: "Somalia",
      city: "Mogadishu"
    },
    {
      id: 38,
      country: "Liberia",
      city: "Monrovia"
    },
    {
      id: 39,
      country: "Comoros",
      city: "Moroni"
    },
    {
      id: 40,
      country: "Kenya",
      city: "Nairobi"
    },
    {
      id: 41,
      country: "Mauritania",
      city: "Nouakchott"
    },
    {
      id: 42,
      country: "Burkina Faso",
      city: "Ouagadougou"
    },
    {
      id: 43,
      country: "Mauritius",
      city: "Port Louis"
    },
    {
      id: 44,
      country: "Niger",
      city: "Niamey"
    },
    {
      id: 45,
      country: "Chad",
      city: "N'Djamena"
    },
    {
      id: 46,
      country: "Benin",
      city: "Porto-Novo"
    },
    {
      id: 47,
      country: "Cape Verde",
      city: "Praia"
    },
    {
      id: 48,
      country: "Morocco",
      city: "Rabat"
    },
    {
      id: 49,
      country: "Libya",
      city: "Tripoli"
    },
    {
      id: 50,
      country: "Tunisia",
      city: "Tunis"
    },
    {
      id: 51,
      country: "Seychelles",
      city: "Victoria"
    },
    {
      id: 52,
      country: "Namibia",
      city: "Windhoek"
    },
    {
      id: 53,
      country: "Côte d'Ivoire",
      city: "Yamoussoukro"
    },
    {
      id: 54,
      country: "Cameroon",
      city: "Yaoundé"
    },  
  ]
    
  return (
    <div>
      <h1>African Countries and their Capital Cities</h1>

      <div   style={{
        // display in grid of five
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: "10px"
        
      }}>
        {counties.map(country => (
          <SayButton
            speak={country.country}
            pitch={1.5}
            rate={0.5}
            
            key={country.id}
          >
          < Countries  country= {country}/>
          </SayButton>
          
        ))}
      </div>
<Footer/>
    </div>
  )
}

export default Country;

const Countries = ({ country }) => {
  return (
    <div style={{
      marginBottom: "80px",
    }}>
      <h3 style={{
        cursor: "pointer",
        height: "80px",
        textTransform: "uppercase",

      }} key={country.id}>{country.country}</h3>
      <h4>{country.city}</h4>
    </div>
  );
}
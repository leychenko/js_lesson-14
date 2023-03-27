//================================= Задача 1 ====================================
// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// назва компанії на час розробки (назву періодично змінюють)
// власник компанії
// споснсори (масив спонсорів)
//       * прізвище спонсора
//       * ім’я  спонсора
//       * сума вкладень спонсора
// рік випуску
// вартість сайту
// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

let sitesList = [
  {
    titleComp: "Tesla",
    ownerComp: "Jon",
    sponsors: [
      {
        secondName: "Wilies",
        name: "Ron",
        investmentAmount: 50000,
      },
      {
        secondName: "Collins",
        name: "Juliy",
        investmentAmount: 3000,
      },
      {
        secondName: "Washington",
        name: "Danzel",
        investmentAmount: 110000,
      },
    ],
    releaseYear: 2009,
    price: 60000,
  },
  {
    titleComp: "NASA",
    ownerComp: "Mask",
    sponsors: [
      {
        secondName: "Wensday",
        name: "Ostin",
        investmentAmount: 15000,
      },
      {
        secondName: "Kruz",
        name: "Penelopa",
        investmentAmount: 3400,
      },
      {
        secondName: "Stalone",
        name: "Silvester",
        investmentAmount: 15000,
      },
    ],
    releaseYear: 2003,
    price: 9000,
  },
  {
    titleComp: "Amazon",
    ownerComp: "Tonny",
    sponsors: [
      {
        secondName: "Anderson",
        name: "Pamela",
        investmentAmount: 12000,
      },
      {
        secondName: "Creyg",
        name: "Daniel",
        investmentAmount: 1200,
      },
      {
        secondName: "Genry",
        name: "Ford",
        investmentAmount: 400000,
      },
    ],
    releaseYear: 2001,
    price: 450000,
  },
  {
    titleComp: "Amazon",
    ownerComp: "Tonny",
    sponsors: [
      {
        secondName: "Shiffer",
        name: "Claudiy",
        investmentAmount: 41000,
      },
      {
        secondName: "Hefner",
        name: "Orest",
        investmentAmount: 1800,
      },
      {
        secondName: "Jony",
        name: "Dep",
        investmentAmount: 16000,
      },
    ],
    releaseYear: 1999,
    price: 3000,
  },
  
]

//==============================================================================================
// 1) загальну вартість усіх сайтів

const allSitesCoust = sitesList.reduce(
  (prevValue, coust) => (prevValue += coust.price),
  0
)
 console.log(`1) Загальна вартість усіх сайтів становить - ${allSitesCoust}$`)
//==============================================================================================
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.

const countSiteFor_2000To_2009 = sitesList.reduce(
  (prevValue, site) =>
    site.releaseYear > 2000 && site.releaseYear < 2009
      ? prevValue + 1
      : prevValue,
  0
)

 console.log(
   `2) Кількість сайтів, що було зроблено між 2000 та 2009 рр. - ${countSiteFor_2000To_2009}`
 )
 //============================================================================================
 // 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000

const countSitesInvestAmountMore_100000 = sitesList.reduce((prevValue,sites)=>{
	if(sites.sponsors.reduce((prevValue2,sponsors)=>prevValue2 + sponsors.investmentAmount,0) > 100000)
	return prevValue + 1
	return prevValue
},0)

 console.log(
   `3) Кількість сайтів, де сума спонсорських вкладень була більшою за 100000 - ${countSitesInvestAmountMore_100000}`
 )
// //==============================================================================================
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
 const arrSponsorsList =[]
 for (const list of sitesList) {
   for (const sponsors of list.sponsors) {
     arrSponsorsList.push(`${sponsors.name} ${sponsors.secondName}`)
   }
 }
console.log(`4) Загальний список усіх спонсорів: ${arrSponsorsList}`)
// document.write(`${test}`)
//==============================================================================================
// 5) знайти рік, коли прибуток був найбільшим

const yearWhenPriceWasBiggest = getYearWhenPriceWasBiggest(sitesList)
function getYearWhenPriceWasBiggest(sites) {
	 let max = -Infinity
   let maxPriceYear
   for (const coust of sites) {
     if (coust.price > max) {
       max = coust.price
       maxPriceYear = coust.releaseYear
     }
   }
	return maxPriceYear
}

 console.log(`5) Прибуток був найбільшим у ${yearWhenPriceWasBiggest} рік`)
//==============================================================================================
// 6) упорядкувати список за спаданням прибутку

const sortPrice = sitesList.sort((a,b)=> b.price - a.price)
console.log(`6) упорядкувати список за спаданням прибутку${sortPrice}`)
//==============================================================================================


// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

const sitesLower_10000 = sitesList.filter(site => site.price < 10000)
const sitesMore_10000 = sitesList.filter((site) => site.price >= 10000)

console.log(`7) Сайти з вартість до 10000 ${sitesLower_10000}`)
console.log(`7) Сайти з вартість більше 10000 ${sitesMore_10000}`)



 
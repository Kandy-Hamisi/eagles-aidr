// import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
// import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Features" },
    { href: "#contact-us", label: "Contact Us" },
];

export const blankForms = [
  {
    id: 1,
    formName: "Hamas3479SiteDescriptionForm",
    period: "21-Nov-2023",
  },
  {
    id: 2,
    formName: "Hamas3479SiteDescriptionForm",
    period: "10-Oct-2021",
  },
  {
    id: 3,
    formName: "Hamas3479CasualtyDataForm",
    period: "10-Oct-2022",
  },
  {
    id: 4,
    formName: "Hamas3479SiteDescriptionForm",
    period: "10-Oct-2023",
  },
  {
    id: 5,
    formName: "Hamas3479SiteDescriptionForm",
    period: "23-Nov-2023",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Al Shifaa Premature Newborn Babies",
    organization: 'USAID',
    date: '2023',
    media: '/basic-bar.png',
  },
  {
    id: 2,
    title: "Al Shifaa Premature Newborn Babies",
    organization: 'UN',
    date: '2023',
    media: '/basic-bar.png',
  },
  {
    id: 3,
    title: "Al Shifaa Premature Newborn Babies",
    organization: 'USAID',
    date: '2023',
    media: '/basic-bar.png',
  },
  {
    id: 4,
    title: "Al Shifaa Premature Newborn Babies",
    organization: 'USAID',
    date: '2023',
    media: '/basic-bar.png',
  },
]




// chart information

export const barChartData = {
    options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        responsive: [{
            breakpoint: 350,
            options: {

            }
        }],
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
};
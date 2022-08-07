import './styles/sass/styles.scss';
import './App.css';
import { useState } from 'react';
import { Link, Routes, Route, Outlet, useParams } from 'react-router-dom';

const TestingData = {
    user1: [{
        firstName: 'Thor',
        lastName: 'Hot',
        age: 20,
        height: 180,
        sex: "male",
        address: "66 Nairn Ave Toronto Ontario",
        occupation: "Badger wrangler",
        Bio: "Me like badgers",
    }],

    user2: [{
        firstName: 'Shelby',
        lastName: 'Laserface',
        age: 35,
        height: 190,
        sex: "female",
        address: "52 West 3rd, Hamilton, Ontario",
        occupation: "Pikachu impersonator",
        Bio: "PIKA PIKA!",
    }],

    user3: [{
        firstName: 'Vanilla',
        lastName: 'Ice',
        age: 99,
        height: 175,
        sex: "Other",
        address: "290 Bremner Blvd, Toronto, ON M5V 3L9 ",
        occupation: "Retired One Hit Wonder",
        Bio: "Remember me? Seriously, do you remember me? *Cries*",
    }],

    user3: [{
        firstName: 'Vanilla',
        lastName: 'Ice',
        age: 99,
        height: 175,
        sex: "Other",
        address: "290 Bremner Blvd, Toronto, ON M5V 3L9 ",
        occupation: "Retired One Hit Wonder",
        Bio: "Remember me? Seriously, do you remember me? *Cries*",
    }],

    user4: [{
        firstName: 'Derek',
        lastName: 'Pickles',
        age: 41,
        height: 160,
        sex: "male",
        address: "21 Jump Street, Los Angeles, California",
        occupation: "Professional Wrestler",
        Bio: "This wrestling singlet is both stylish and comfortable.",
    }],

    user5: [{
        firstName: 'Tonya',
        lastName: 'Smithdottir',
        age: 22,
        height: 159,
        sex: "female",
        address: "Laugavegur 20a, 101 Reykjavík, Iceland",
        occupation: "Future Mayor of Reykjavík",
        Bio: "Try our hotdogs!",
    }],

}

export default TestingData;
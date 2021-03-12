import React from 'react';

// Image imports
import Profile from '../images/alfie/alfie.jpeg';
import { FaGraduationCap } from 'react-icons/fa';

const eventData = [
  {
    id: 1,
    event: {
      type: "singleImageEvent",
      title: "Born",
      date: "31-07-1998",
      img: Profile,
      first: 'true',
    }
  },
  {
    id: 4,
    event: {
      type: "smallEvent",
      title: "Praised",
      date: "10-10-2010",
    }
  },
  {
    id: 3,
    event: {
      type: "fourImageEvent",
      title: "Praised",
      date: "11-10-2010",
      imgs: [ Profile, Profile, Profile, Profile ]
    }
  },
  {
    id: 4,
    event: {
      type: "smallEvent",
      title: "Graduation",
      date: "06-07-2020",
      icon: <FaGraduationCap className="w100 center" size={50} color="white" />
    }
  },

]

export default eventData
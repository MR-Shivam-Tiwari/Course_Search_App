const courses = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "https://crowdbotics.ghost.io/content/images/2021/02/ReactNativeFeaturedImage.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    dueDate: "2023-01-20",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 2,
    name: "Intermediate React Native",
    instructor: "Jane Smith",
    description:
      "Take your React Native skills to the next level with this intermediate course.",
    enrollmentStatus: "In Progress",
    thumbnail: "https://readybytes.in/media/pages/blog/how-to-setup-react-native-localization-for-react-native-app/4081d4f11e-1680348760/1-cover.jpg",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Introduction to React Native", "Comfortable with ES6+"],
    syllabus: [
      /* ... */
    ],
    dueDate: "2023-02-17",
    students: [
      /* ... */
    ],
  },
  {
    id: 3,
    name: "Advanced React Native",
    instructor: "Emily Roberts",
    dueDate: "2023-03-24",
    description:
      "Master React Native and learn to build complex mobile applications.",
    enrollmentStatus: "Closed",
    thumbnail: "https://crowdbotics.ghost.io/content/images/2021/05/React-Native-Featured-Image.png",
    duration: "12 weeks",
    schedule: "Weekends, 10:00 AM - 4:00 PM",
    location: "Online",
    prerequisites: ["Intermediate React Native", "Understanding of Redux"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 4,
    name: "Responsive Web Design",
    instructor: "Laura Smith",
    dueDate: "2023-04-21",
    description:
      "Explore the world of responsive design and learn to create websites that work on every device.",
    enrollmentStatus: "Open",
    thumbnail: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/01/104228210.jpg?auto=format&q=60&fit=max&w=930",
    duration: "5 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["HTML", "CSS", "Basic JavaScript"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 5,
    name: "Data Structures in Java",
    instructor: "Alex Johnson",
    dueDate: "2023-05-19",
    description:
      "Dive deep into data structures and algorithms using Java and enhance your problem-solving skills.",
    enrollmentStatus: "Open",
    thumbnail: "https://contentstatic.techgig.com/photo/93000110/what-makes-java-still-popular-among-developers.jpg?28608",
    duration: "10 weeks",
    schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Basic Java programming"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 6,
    name: "Full-Stack JavaScript",
    instructor: "Mohammed Ali",
    dueDate: "2023-04-21",
    description:
      "Become a full-stack developer by learning both front-end and back-end JavaScript technologies.",
    enrollmentStatus: "In Progress",
    thumbnail: "https://cyberhoot.com/wp-content/uploads/2020/07/Free-Courses-to-learn-JavaScript-1024x576.jpg",
    duration: "14 weeks",
    schedule: "Saturdays, 9:00 AM - 3:00 PM",
    location: "Online",
    prerequisites: ["Basic HTML", "CSS", "JavaScript"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 7,
    name: "Introduction to Python",
    instructor: "Samantha Bloom",
    dueDate: "2023-07-21",
    description:
      "Start your programming journey with Python, one of the most popular programming languages.",
    enrollmentStatus: "Open",
    thumbnail: "https://developers.redhat.com/sites/default/files/styles/article_feature/public/Python-01%20%282%29.png?itok=TEVIQBQo",
    duration: "6 weeks",
    schedule: "Weekends, 10:00 AM - 1:00 PM",
    location: "Online",
    prerequisites: ["Basic computer literacy"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 8,
    name: "Cloud Computing with AWS",
    instructor: "Chris P. Bacon",
    dueDate: "2023-08-18",
    description:
      "Get hands-on experience with cloud services and solutions provided by Amazon Web Services.",
    enrollmentStatus: "Open",
    thumbnail: "https://assets.intersystems.com/dims4/default/a9dad27/2147483647/strip/true/crop/780x422+0+0/resize/780x422!/quality/90/?url=http%3A%2F%2Finter-systems-brightspot.s3.amazonaws.com%2F26%2Fbd%2F6a6aa762425f87ad7d5c2fe65f8c%2Fawslogo-image.jpg",
    duration: "8 weeks",
    schedule: "Fridays, 5:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of networking", "Basic Linux commands"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 9,
    name: "Cybersecurity Fundamentals",
    instructor: "Jamie Lannister",
    dueDate: "2023-09-22",
    description:
      "Learn about the fundamentals of cybersecurity and how to protect systems against cyber threats.",
    enrollmentStatus: "Open",
    thumbnail: "https://www.1stformationsblog.co.uk/wp-content/uploads/2021/10/shutterstock_505066678.jpg",
    duration: "9 weeks",
    schedule: "Mondays, 6:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic IT knowledge"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 10,
    name: "Digital Marketing Essentials",
    instructor: "Arya Stark",
    dueDate: "2023-10-20",
    description:
      "Discover digital marketing strategies and learn how to promote businesses online.",
    enrollmentStatus: "Open",
    thumbnail: "https://www.simplilearn.com/ice9/free_resources_article_thumb/history_and_evolution_of_digital_marketing.jpg",
    duration: "7 weeks",
    schedule: "Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Basic understanding of the internet",
      "Interest in marketing",
    ],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 11,
    name: "Machine Learning with TensorFlow",
    instructor: "Tony Stark",
    dueDate: "2023-11-17",
    description:
      "Understand the principles of machine learning and develop skills using TensorFlow framework.",
    enrollmentStatus: "Closed",
    thumbnail: "https://s40424.pcdn.co/in/wp-content/uploads/2023/01/What-is-machine-learning-Definition-types.jpg.optimal.jpg",
    duration: "11 weeks",
    schedule: "Thursdays, 6:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Python", "Basic statistics"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 12,
    name: "UI/UX Design Principles",
    dueDate: "2023-12-15",

    instructor: "Natasha Romanoff",
    description:
      "Create intuitive and beautiful user experiences by learning the core principles of UI/UX design.",
    enrollmentStatus: "In Progress",
    thumbnail: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699315200&semt=ais",
    duration: "8 weeks",
    schedule: "Tuesdays, 5:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Graphic design basics"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 13,
    name: "Blockchain Technology",
    instructor: "Bruce Wayne",
    dueDate: "2024-01-19",

    description:
      "Explore blockchain technology and its applications beyond cryptocurrencies.",
    enrollmentStatus: "Open",
    thumbnail: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-Blockchain-Matters.jpg",
    duration: "10 weeks",
    schedule: "Saturdays and Sundays, 3:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: ["Basic programming", "Interest in fintech"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 14,
    name: "Ethical Hacking for Beginners",
    instructor: "Elliot Alderson",
    dueDate: "2024-02-23",

    description:
      "An introduction to ethical hacking and penetration testing techniques.",
    enrollmentStatus: "Open",
    thumbnail: "https://www.techopedia.com/wp-content/uploads/2023/02/dreamstime_m_123641233-1.jpg",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Understanding of networks", "Basic Linux usage"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 15,
    name: "Mobile App Development with Flutter",
    instructor: "Diana Prince",
    dueDate: "2024-03-22",

    description:
      "Learn to build beautiful and functional mobile apps using Flutter & Dart.",
    enrollmentStatus: "In Progress",
    thumbnail: "https://img.freepik.com/free-vector/various-screens-violet-public-transport-mobile-app_23-2148704862.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1699315200&semt=ais",
    duration: "8 weeks",
    schedule: "Weekends, 1:00 PM - 4:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 16,
    name: "Project Management Professional (PMP)® Certification Prep",
    instructor: "Bruce Banner",
    dueDate: "2024-04-19",

    description:
      "Prepare for the PMP® certification and learn to manage projects efficiently.",
    enrollmentStatus: "Open",
    thumbnail: "https://www.investopedia.com/thmb/QYWqTkyDW-yfpVsjmAP0Mf2bw2Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/project-management.asp-Final-0c4cd7f77aad40228e7311783c27f728.png",
    duration: "9 weeks",
    schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Experience in project management"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 17,
    name: "Game Development with Unity",
    instructor: "Clark Kent",
    dueDate: "2024-05-24",

    description: "Create engaging 2D and 3D games using Unity and C#.",
    enrollmentStatus: "Open",
    thumbnail: "https://www.cdmi.in/courses@2x/unity.webp",
    duration: "10 weeks",
    schedule: "Mondays and Fridays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["C# programming", "Basic game design"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
  {
    id: 18,
    name: "Advanced SQL and Database Management",
    instructor: "Peter Parker",
    dueDate: "2024-06-21",

    description: "Master SQL and manage databases with advanced techniques.",
    enrollmentStatus: "Open",
    thumbnail: "https://cdn.sanity.io/images/oaglaatp/production/feb9c80a48a201140dcfa20559b73ab1b803e59b-1200x800.png?w=1200&h=800&auto=format",
    duration: "7 weeks",
    schedule: "Wednesdays, 5:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of SQL and databases"],
    syllabus: [
      /* ... */
    ],
    students: [
      /* ... */
    ],
  },
];

export default courses;

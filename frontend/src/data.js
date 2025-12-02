const hours = [
    {
        _id: '1',
        day: 'Sunday', 
        startTime: ' 10a' ,
        endTime: '5p',
    },
    {
        _id: '2',
        day: 'Monday', 
        startTime: ' Closed' ,
        endTime: '',
    },
    {
        _id: '3',
        day: 'Tuesday', 
        startTime: ' 10a' ,
        endTime: '5p',
    },
    {
        _id: '4',
        day: 'Wednesday', 
        startTime: ' 10a' ,
        endTime: '5p',
    },
    {
        _id: '5',
        day: 'Thursday', 
        startTime: ' 10a' ,
        endTime: '5p',
    },
    {
        _id: '6',
        day: 'Friday', 
        startTime: ' 10a' ,
        endTime: '7p',
    },
    {
        _id: '7',
        day: 'Saturday', 
        startTime: ' 10a' ,
        endTime: '5p',
    },
    
]

const tickets = [
    {
        _id: '1',
        type: 'Adult',
        price: 18.0
    },
    {
        _id: '2',
        type: 'Child',
        price: 5.0
    },
    {
        _id: '3',
        type: 'Senior',
        price: 15.0
    },
    {
        _id: '4',
        type: 'Military',
        price: 15.0
    },
    {
        _id: '5',
        type: 'Student',
        price: 12.0
    }
]

const events = [
    {
        _id: '1',
        date: '2025-12-05',
        time: '6:00pm',
        title: 'Artist Network Brunch',
        artist: 'Maria Rodgriguez'
    },
    {
        _id: '2',
        date: '2025-12-12',
        time: '7:00pm',
        title: 'Sculpture Garden Evening',
        artist: 'Patricia Williams'
    },
    {
        _id: '3',
        date: '2025-12-08',
        time: '2:00pm',
        title: 'Artist Network Brunch',
        artist: 'Maria Rodgriguez'
    },
    {
        _id: '4',
        date: '2025-12-18',
        time: '5:30pm',
        title: 'Photography & Light Exhibit',
        artist: 'Sarah Johnson'
    },
    {
        _id: '5',
        date: '2025-12-15',
        time: '3:00pm',
        title: 'Modern Textile Art Showcase',
        artist: 'David Kim'
    },
    {
        _id: '6',
        date: '2025-11-30',
        time: '3:00pm',
        title: 'Artworks Book Club Meeting',
        artist: 'David Smith'
    },
]

export { hours, tickets, events };
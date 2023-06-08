const student = {
    firstName: "Lorenzo",
    lastName: "Mokwa",
    age: 19,
    student: true,
}

console.log(student.firstName)

// breaking an object into separate variables, refered to as 'destructuring'

const movie = {
    title: 'Fight Club',
    writer: "Chuck P.",
    year: 1999,
    genre: 'Action',
}

/*
    const title = movie.title
    const writer = movie.writer
    const year = movie.year
    const genre = movie.genre
*/

// shorthand for destructuring
const {title, writer, year, genre} = movie

console.log(title)
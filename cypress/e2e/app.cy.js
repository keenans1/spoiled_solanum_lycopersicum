describe('template spec', () => {
  let movies
  beforeEach(() => {
  movies = 
  [
    {
    id: 436270,
    poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    title: "Black Adam",
    average_rating: 4,
    release_date: "2022-10-19"
    },
    {
    id: 724495,
    poster_path: "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
    title: "The Woman King",
    average_rating: 4,
    release_date: "2022-09-15"
    },
    {
    id: 1013860,
    poster_path: "https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
    title: "R.I.P.D. 2: Rise of the Damned",
    average_rating: 7,
    release_date: "2022-11-15"
    }
  ]
})

  it('Should visit our home page and display Spoiled Fruit title', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Spoiled Fruit')
  })

  it('Should show a list of movie when a user visits the home page', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", movies )
  })
})




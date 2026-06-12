// Beginner Tasks
// Show a welcome message only if isLoggedIn is true.
// Render a “Login” or “Logout” button based on isLoggedIn value.
// Show “You have messages” only if messages.length > 0.
// Display different greetings for a user depending on their role (admin, user, guest).
// Show a loading spinner when isLoading is true; show content when it's false.

// Intermediate Tasks
// Create a multi-step form with 3 steps using conditional rendering.
// Toggle dark mode or light mode UI based on a boolean flag.
// Display an error message only if error exists.
// Show a “New User” banner if isNewUser is true and signupDate is within 7 days.
// Based on user.age, show “Adult” if age ≥ 18, otherwise “Minor”.


// const Task1 = () => {
//     const users = [
//         { name: "aa", online: true },
//         { name: "bb", online: false },
//         { name: "cc", online: true },
//     ]

//     return (
//         <section className="p-32">
//             {users.map((user, index) => (
//                 <div key={index}>
//                     {user.online == true ?
//                         (
//                             <p className="flex">
//                                 <span className=" block h-2 w-2 rounded-full bg-green-400"></span>
//                                 {user.name}
//                             </p>
//                         ) :
//                         (
//                             <p>{user.name}</p>
//                         )
//                     }</div>
//             ))}
//         </section>
//     )
// }

// export default Task1;

// Show reviews only if rating >= 4, and show the star count next to each.

const Task1 = () => {
    const movies = [
        { name: "Dabangg", rating: 0 },
        { name: "Interstellar", rating: 3 },
        { name: "God Father", rating: 5 },
        { name: "Game of Thrones", rating: 4 },
    ]

    return (
        <section className="p-32">
            {
            movies.filter(movie=> movie.rating >= 4)
            .map((movie) => (
                <div key={movie.rating>4}>
                    {movie.rating >= 4 &&
                        (
                            <p>
                                {movie.name} || 
                                Rating: {movie.rating}
                            </p>
                        )
                    }
                </div>
            ))}
        </section>
    )
}

export default Task1;
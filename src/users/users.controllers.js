const uuid = require('uuid')

const userDB = [
    {
        id: "471c7235-6464-4845-bf3c-27f13c0d042c",
        first_name: "Luis",
        last_name: "Vallejo",
        email: "admin@admon.com",
        password: "aquiles001",
        birthday: "2002/11/06"
    },
    {
        id: "ff3ffefa-918c-4481-aff1-b92d1fdfb1da",
        first_name: "Arthas",
        last_name: "Menethil",
        email: "ArtM@azeroth.com",
        password: "Ment1234",
        birthday: "1986/11/06"
    },
    {
        id: "ae4f6407-8d6c-4df2-bebc-881c259185c3",
        first_name: "Varok",
        last_name: "Comillosaurio",
        email: "HorColM@azeroth.com",
        password: "Collm5454",
        birthday: "1980/11/06"
    }
]

const getAllUsers = ()=> {
    return userDB
}

const getUserById = (id)=> {
    const data = userDB.find(user => user.id === id)
    return data
}

const createNewUser = (data) => {
    const newUser = {
        id: uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }
    userDB.push(newUser)
    return newUser
}

module.exports = { getAllUsers, getUserById, createNewUser }
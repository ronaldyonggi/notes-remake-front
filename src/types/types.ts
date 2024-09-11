export interface Note {
    id: string
    content: string
    createdAt: string
    updatedAt: string
    important: boolean
    // user: User
    // userId: string
}

// export interface User {
//     id: string
//     username: string
//     name: string
//     passwordHash: string
//     createdAt: string
//     notes: Note[]
// }
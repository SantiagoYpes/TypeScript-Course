interface StudentPrimary {
    name: string
    id: number
    isActive: number | boolean
    grade?: number
}

const updateStudent = (student: StudentPrimary, updateStudent: Partial<StudentPrimary>) => {
    return { ...student, ...updateStudent }
}

const Santi: StudentPrimary = {
    name: 'Santi',
    id: 1,
    isActive: true,
}
const updateSanti: StudentPrimary = updateStudent(Santi, { grade: 10, isActive: false })


//Required and Readonly
// Converts the atributes in required
const recordStudent = (studentPri: Required<StudentPrimary>): StudentPrimary => {
    return studentPri
}

//Converts the atributes in readonly
const assignStudent: Readonly<StudentPrimary> = {
    ...updateSanti, grade: 2
}

//Record
type Students = 'Sara' | 'Kelly'

type Letter = 'A' | 'B' | 'C' | 'D'

const assginLetter: Record<Students, Letter> = {
    Sara: 'A',
    Kelly: 'B',
}

interface Grades {
    assign1: number
    assign2: number
}

const assignGrades: Record<Students, Grades> = {
    Sara: { assign1: 10, assign2: 20 },
    Kelly: { assign1: 30, assign2: 40 },
}

//Pick and omit
type AssignName = Pick<StudentPrimary, "name">
type AssignPreview = Omit<Required<StudentPrimary>, "name">

const nameStudent: AssignName = { name: "Daniel" }
const prevStudent: AssignPreview = { id: 123, isActive: false, grade: 23 }

// Exclude and extract
type adjustLetter = Exclude<Letter, 'D'>
type highLetter = Extract<Letter, 'A' | 'B'>


//Nonnullables

type AllPossibleGrades = 'Dave' | 'John' | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>

//type NewAssing = {title : string, desc: string}

const createNewAssign = (title: string, desc: string) => {
    return { title, desc }
}
type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign('English task', 'Create a sentence')
console.log(tsAssign)

// Parameters

type assignParams = Parameters<typeof createNewAssign>

const assignArgs: assignParams = ['English', 'Non']

const tsAssign2: NewAssign = createNewAssign(...assignArgs)


// Awaited - helps us with the returntype of a promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}
const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type UsersJson = Awaited<ReturnType<typeof fetchUsers>>
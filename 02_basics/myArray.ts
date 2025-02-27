const superHeroes: string[] = []//if it's just [] -> never type; [] = [] -> empty array; string[] = [] ->string
// const heroPower: number[] = []
const heroPower: Array<number> = [];//another syntax

type User = {
    name: string
    isActive: boolean
}
const allUsers: User[] = []

const MLModels: number[][] = [
    [255, 255, 255],
    []
]

superHeroes.push("spiderman")
heroPower.push(2)

allUsers.push({name: "", isActive: true})
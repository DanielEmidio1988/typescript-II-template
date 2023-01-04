function helloTurma(){
  console.log("Boraaa Ammal B")  
}
helloTurma()

// Crie um sistema de cadastro de usuários que contenha:

// Type Alias para uma pessoa (Person) com as 
// propriedades id, name, email, password e role;

//Type Person com as propriedades da atividade. Observe que 
// o role pode assumir como conteúdo apenas "NORMAL" ou "ADMIN"

type Person = {
  id:string,
  name:string,
  email:string,
  password:string,
  role: "ADMIN" | "NORMAL"
}

// Criando um objeto com o tipo Person: 
const cliente: Person ={
  id: "1b2b3b3",
  name: "Tião",
  email: "tiao@email.com",
  password: "123",
  role: "NORMAL"
}
//Imprimindo os valores do objeto cliente: 
console.log (`Nome: ${cliente.name} \nEmail: ${cliente.email}`)

// Type Aliases de conta, com as propriedades account e permission: 
// AdminAccount 
// NormalAccount

// 
type AdminAccount = {
  account:string,
  permission:boolean
}
type NormalAccount = {
  account:string,
  permission:boolean,
}

// Vamos continuar nosso sistema de cadastro de usuários criando:

// Enum com valores ADMIN e NORMAL;

enum Role {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

const novoCliente :Person ={
  id:"1b5b165b12b",
  name: "Claudia",
  email: "claudinha@emial.com",
  password: "claudinha123",
  role: Role.ADMIN
}
console.table(novoCliente)

// Tipo Intersection unindo: pessoa(Person) + permissão (Role);

type NormalUser = Person & NormalAccount

type AdminUser = Person & AdminAccount

// Um array de usuários que permite guardar apenas usuários
// do tipo Person + Role;
type UnionTypeToArray = NormalUser | AdminUser

const normalAcconuntArray : UnionTypeToArray[] = [] 

// Crie duas pessoas, uma com permissão normal e a outra admin;

const userNormal: NormalUser ={
  id: "n42n2n5",
  name: "César",
  email: "cesarbackend@contato.com",
  password: "cesar+datadeNascimento",
  role: Role.NORMAL,
  account: "Dr.Cesar",
  permission: false
}

const userAdmin: AdminUser = {
  id: "asvase3124",
  name: "Everson",
  email: "eversonbackend@contato.com",
  password: "everson+datadeNascimento",
  role: Role.ADMIN,
  account: "Ever",    
  permission: true
}

const pessoaCliente: Person = {
  id: "asv123ase3124",
  name: "Samvs",
  email: "samvs@contato.com",
  password: "samvs123456",
  role: Role.NORMAL
}

// Guarde essas pessoas no array de usuários.
normalAcconuntArray.push(userNormal)
normalAcconuntArray.push(userAdmin)

console.log("Array de usuários:")
console.table(normalAcconuntArray)
















/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 
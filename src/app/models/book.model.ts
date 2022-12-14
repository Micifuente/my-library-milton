export class Book{
    name: string=""
    author: string=""
    genre: string=""
    // se coloca el ? para indicar que es opcional
    publishedYear?: number
    description?: string

    constructor(
         name:string,
         author:string,
         genre:string,
         publishedyear:number,
         description:string){
         
          this.name= name
          this.author=author
          this.genre=genre
          this.publishedYear=publishedyear
          this.description=description  

    }

}
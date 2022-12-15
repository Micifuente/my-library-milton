import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  books: Book[]=[
    new Book('Dpn quijote', 'Cervantes',"novela",1800,""),
    new Book('100 años de soledad', 'garcia marques',"novela",1980,""),
    new Book('el señor de los anillos', 'tolkien',"Fantasia",1999,"")
  ]

  constructor() { }

  createBook(newBook: Book){
    this.books.push(newBook)
    //this.logger.log("se ha creado un libro!")
   }

}

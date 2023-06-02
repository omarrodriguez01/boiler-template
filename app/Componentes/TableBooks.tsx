import BookRow from "./BookRow";

interface Book {

  titulo: String;
  autor: String
  stock: String;

}

var fakeBook: Book[];

const book1: Book = { titulo: "Corona de media noche", autor: "Sahara J Maas", stock: "30" }
const book2: Book = { titulo: "Reina de trueno", autor: "Sahara J Maas", stock: "30" }

fakeBook = [book1, book2]

export function TableBook() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light table-fixed">
              <thead className="font-medium">
                <tr>
                  <th className="w-14" ><span></span></th>
                  <th className="text-grayfigma font-extralight text-sm " >Titulo</th>
                  <th className="text-grayfigma font-extralight text-sm">Autor</th>
                  <th className="text-grayfigma font-extralight text-sm">Stock</th>
                </tr>
              </thead>
              <tbody>
                {
                  fakeBook.map(exam => {
                    return (
                      <BookRow date={exam.titulo} grade={exam.autor} level={exam.stock}/>
                    )

                  })

                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

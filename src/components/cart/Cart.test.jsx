import { render, screen } from "@testing-library/react";
import Cart from ".";
import userEvent from "@testing-library/user-event";

const item ={
    name: "Mint chip",
    imagePath: "/images/mint-chip.png",
    id: "f78f",
}

const basket =
    [
        {
          name: "Mint chip",
          imagePath: "/images/mint-chip.png",
          id: "f78f",
        },
        {
            name: "Mint chip",
            imagePath: "/images/mint-chip.png",
            id: "f78f",
          },
     
      ]





// prop alan bileşenleri test ediyorsak
// aldıkları probların benzerini göndeririz
test(" dsa", async() => {
    // prop olarak göndermemiz gereken orjinal fonk yeerine geceke
    // mock fonksiyonu oluşturma
   const mock = jest.fn();
  render(
    <Cart
      item={item}
      basket={basket}
      setBasket={mock}
    />,
  );

// ıtem olarak gönderdiğimiz name değeri için ekrana bir span basılır

screen.getByText(item.name)

// resmin src kısmında ıtem ın imagePĞath değerine uygun olmalı

 const images = screen.getByAltText("çeşit-resim")
 
 expect(images).toHaveAttribute("src" , item.imagePath)
// toplam ürün bilgisi kısmında sepette 2 yazmalı

const amount = screen.getByTestId("amount")
 
expect(amount).toHaveTextContent(2)

const user = userEvent.setup()
// ekle ve sıfırla butonuna basınca set basket tetiklenir 
const addBtn = screen.getByRole("button" ,{name:/ekle/i})
const dellBtn = screen.getByRole("button" ,{name:/sıfırla/i})

// ekle butonuna tıkla
await user.click(addBtn)

// setbasket fonk çalıştımı

expect(mock).toHaveBeenCalledWith( [...basket , item
    // {
    //   name: "Mint chip",
    //   imagePath: "/images/mint-chip.png",
    //   id: "f78f",
    // },
    // {
    //     name: "Mint chip",
    //     imagePath: "/images/mint-chip.png",
    //     id: "f78f",
    //   },
    //   {
    //     name: "Mint chip",
    //     imagePath: "/images/mint-chip.png",
    //     id: "f78f",
    //   },
 
  ]
)
 // sıfırla butonuna tıkla
 await user.click(dellBtn)

 // setBasket fonk doğru parametre ile calıştımı
expect(mock).toHaveBeenCalledWith([])

});

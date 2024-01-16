import { render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

/* 
 ! Seçiciler 
? Methot [All] By seçici
* Methot  > get | find | query
* get > element başlangıçta DOM da var ise kullanılır
* query > get ile aynı işi yapar elemanı bulamazsa null döndürür
* find > elementin ne zaman ekrana basılaağı belli değilse (async)
*
*/

// ürünler ekrana geliyormu
test("API dan gelen veriler için ekrana kartlar basılır", async () => {
  render(<Scoops />);

  // ekrana basılan kartları al
  const images = await screen.findAllByAltText("çeşit-resim");

  // gelen resimlerin sayısı birden büyükmü

  expect(images.length).toBeGreaterThanOrEqual(1);

  console.log(images);
});

// ekleme ve sıfırlama butonlarının işlşevselliği

test("ekleme ve sıfırlamanın toplama etkisi", async () => {
  render(<Scoops />);
  const user = userEvent.setup();
  // ekleme ve sıfırlama butonunu çağırma

  const addBtns = await screen.findAllByRole("button", { name: "Ekle" });
  const dellBtns = await screen.findAllByRole("button", { name: "Sıfırla" });

  // toplam spanı cağır

  const total = screen.getByRole("heading", { name: /çeşitler ücreti/i });

  //toplamın değeri 0 dır
  expect(total).toHaveTextContent(0);

  //ekle butonlarından birine tıklanır

  await user.click(addBtns[0]);
  //toplam fiyetı 20 olur

  expect(total).toHaveTextContent(20);
  // farklı birt ceşitten iki tane daha eklenir

  await user.dblClick(addBtns[2]);
  //toplam fiyat 60 olur
  expect(total).toHaveTextContent(60);

  // bir tane eklenenei sıfırla

  await user.click(dellBtns[0]);

  //toplam fiyat 40 olur

  expect(total).toHaveTextContent(40);

  // 2 tane sıfırla butonuna tıklanmır

  await user.click(dellBtns[2]);
  // toplam fiyat 0 olur

  expect(total).toHaveTextContent(0);
});


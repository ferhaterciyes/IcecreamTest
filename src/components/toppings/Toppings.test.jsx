import userEvent from "@testing-library/user-event";
import Toppings from ".";
import { render, screen } from "@testing-library/react";

test("sosları ekleme çıkarma işlemi toplam fiyatı etkiler", async () => {
  render(<Toppings />);
  const user = userEvent.setup();

  // toplam başlığı sıfırmı

  const total = screen.getByRole("heading", { name: /soslar ücreti/i });

  expect(total).toHaveTextContent(0);

  // bütün sosların checkboxlarını cağır

  const toppings = await screen.findAllByRole("checkbox");

  // soslardan birincisini sepete ekle

  await user.click(toppings[0]);
  // total 3 e eşitmi
  expect(total).toHaveTextContent(3);

  //soslardan 3 sünü sepete ekle

  await user.click(toppings[2]);

  // total 6 ya eşitmi

  expect(total).toHaveTextContent(6);

  // soslardan birincisiini sepetten çıkar

  await user.click(toppings[0]);

  // total 3 e eşitmi

  expect(total).toHaveTextContent(3);

  //soslardan 3 sünü sepetten çıkar

  await user.click(toppings[2]);

  // total 0 a eşitmi
  expect(total).toHaveTextContent(0);
});

test("API dan gelen soslar için kartlar basılıyormu", async () => {
  render(<Toppings />);

  const images = await screen.findAllByAltText("sos-resim");
    // ekrana basılıp basılmadığını kontrol etmek için dizinin uzunluğu testi yapılır
  expect(images.length).toBeGreaterThanOrEqual(1)


});
